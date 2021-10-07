import * as tf from '@tensorflow/tfjs'

import * as loader from './loader'
import { OOV_INDEX, padSequences } from './sequenceUtils'

const POSITIVE_MARGIN = 0.66
const NEUTRAL_MARGIN = 0.4

export interface IUrlModelMetadata {
  model: string
  metadata: string
}

export type ISentimenntMetadata = {
  index_from: string
  max_len: number
  word_index: number
  vocabulary_size: number
}

const HOSTED_URLS: IUrlModelMetadata = {
  model:
    'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json',
  metadata:
    'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json',
}

class SentimentPredictor {
  /**
   * Initializes the Sentiment demo.
   */
  private urls: IUrlModelMetadata = { model: '', metadata: '' }
  private model: tf.LayersModel | undefined = undefined
  private indexFrom: any
  private maxLen = 0
  private wordIndex: any
  private vocabularySize = 0

  async init(urls: IUrlModelMetadata) {
    this.urls = urls
    this.model = await loader.loadHostedPretrainedModel(urls.model)
    await this.loadMetadata()
    return this
  }

  async loadMetadata() {
    const sentimentMetadata: ISentimenntMetadata =
      await loader.loadHostedMetadata(this.urls.metadata)
    this.indexFrom = sentimentMetadata['index_from']
    this.maxLen = sentimentMetadata['max_len']

    this.wordIndex = sentimentMetadata['word_index']
    this.vocabularySize = sentimentMetadata['vocabulary_size']
  }

  predict(text: string) {
    // Convert to lower case and remove all punctuations.
    const inputText = text
      .trim()
      .toLowerCase()
      .replace(/(\.|\,|\!)/g, '')
      .split(' ')
    // Convert the words to a sequence of word indices.
    const sequence = inputText.map((word) => {
      let wordIndex = this.wordIndex[word] + this.indexFrom
      if (wordIndex > this.vocabularySize) {
        wordIndex = OOV_INDEX
      }
      return wordIndex
    })
    // Perform truncation and padding.
    const paddedSequence = padSequences([sequence], this.maxLen)
    const input = tf.tensor2d(paddedSequence, [1, this.maxLen])

    const beginMs = performance.now()
    const predictOut = this.model?.predict(input) as tf.Tensor<tf.Rank>
    // const score = predictOut?.data()[0]
    const score = predictOut?.dataSync()[0]
    // const score = 0
    predictOut?.dispose()
    const endMs = performance.now()

    return { score, elapsed: endMs - beginMs }
  }
}

export const setupSentiment = async (
  text: string
): Promise<string | undefined> => {
  const exist = await loader.urlExists(HOSTED_URLS.model)
  if (exist) {
    const predictorTensor = await new SentimentPredictor().init(HOSTED_URLS)
    const { score } = predictorTensor.predict(text)
    return handleSentimentScore(score)
  }
}

const handleSentimentScore = (score: number): string => {
  if (score > POSITIVE_MARGIN) {
    return 'positive'
  } else if (score > NEUTRAL_MARGIN) {
    return 'neutral'
  } else {
    return 'negative'
  }
}
