import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { robotEmotions } from '../enums/robotEmotions'
import { customFetch } from '../helpers/customFetch'
import { loadersEnum } from '../enums/loaders'
import { setupSentiment } from '../tensor/sentimentPredictor'
export interface IClassifyResponse {
  completion: string
  label: string
  model: string
  object: string
  search_model: string
  selected_examples: ISelectedExample[]
}

export interface ISelectedExample {
  document: number
  label: string
  text: string
}

const Home = () => {
  const [textToAnalize, setTextToAnalize] = useState('')
  const [analizedTextEmotion, setAnalizedTextEmotion] = useState<string>('')
  const [robotEmotion, setEmotion] = useState(robotEmotions.neutral)
  const [isLoading, setIsLoading] = useState(false)
  const hasAnalizedRef = useRef(false)
  const [iaHandler, setIaHandler] = useState<'tensorflow' | 'openai'>(
    'tensorflow'
  )

  const analizeMood = useCallback(async () => {
    const body = {
      examples: [
        ['A happy moment', 'Positive'],
        ['I am sad.', 'Negative'],
        ['I am feeling awesome', 'Positive'],
      ],
      labels: ['Positive', 'Negative', 'Neutral'],
      query: textToAnalize,
      search_model: 'ada',
      model: 'curie',
    }
    setAnalizedTextEmotion('')
    setIsLoading(true)
    let response = undefined
    if (iaHandler === 'openai') {
      const openAIresponse = await customFetch<IClassifyResponse>({
        endpoint: 'classifications',
        method: 'POST',
        data: body,
        token: process.env.openAIKey,
      })
      response = openAIresponse.data?.label.toLowerCase() || ''
    } else {
      response = await setupSentiment(textToAnalize)
    }

    setIsLoading(false)
    hasAnalizedRef.current = true

    setAnalizedTextEmotion(response || 'neutral')
  }, [setAnalizedTextEmotion, textToAnalize, iaHandler])

  const textToAnalizeChange = (event: any) => {
    setTextToAnalize(event.target.value)
  }

  useEffect(() => {
    const analizedMapImage: Record<string, robotEmotions> = {
      negative: robotEmotions.negative,
      positive: robotEmotions.positive,
      neutral: robotEmotions.neutral,
      surprise: robotEmotions.surprise,
    }
    setEmotion(analizedMapImage[analizedTextEmotion] || robotEmotions.surprise)
  }, [analizedTextEmotion])

  return (
    <div>
      <div className="max-w-xs md:max-w-2xl mx-auto py-16">
        <div className="text-center font-normal font-bold text-gray-900 text-5xl">
          Entiende el mood de tus usuarios gracias a <br /> Inteligencia
          Artificial
        </div>
        <div className="text-center text-sm text-gray-500 pl-32 pr-32 mt-5">
          Copia y pega el texto que deseas analizar en el recuadro a
          continuación y te diremos como se siente tu usuario*
        </div>
      </div>
      <div className="max-w-xs md:max-w-7xl mx-auto py-16 bg-dark rounded-md grid grid-cols-2 gap-3">
        <div className="ml-32">
          <div className="resize-none bg-blue-500 rounded-lg ml-56 text-white text-center -mb-8 border-0">
            {!analizedTextEmotion && !isLoading ? (
              'Please write some text to analize'
            ) : isLoading ? (
              <Image src={loadersEnum.ellipsis} width={48} height={48} />
            ) : (
              `You mood is ${analizedTextEmotion} !!`
            )}
          </div>

          <img className="object-none -mb-56" src={robotEmotion} alt="robot" />
        </div>
        <div className="flex flex-col mr-4">
          <div className="w-full bg-white py-6 rounded-md">
            <span className="font-bold ml-4 mr-8">
              Elige el servicio de IA:
            </span>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-dark h-5 w-5"
                name="radio"
                value="tensorflow"
                onChange={() => setIaHandler('tensorflow')}
                checked={iaHandler === 'tensorflow'}
              />
              <span className="ml-2 mr-8">TensorFlow</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-dark h-5 w-5"
                name="radio"
                onChange={() => setIaHandler('openai')}
                value="openai"
                checked={iaHandler === 'openai'}
              />
              <span className="ml-2">OpenIA</span>
            </label>
          </div>
          <div className="mt-7">
            <textarea
              className="w-full rounded-lg border-0 resize-none"
              name="text-area"
              id="text"
              rows={9}
              placeholder="Ingresa el texto a ser analizado"
              onChange={textToAnalizeChange}
              value={textToAnalize}
            />
          </div>
          <button
            className="mt-2 flex justify-end"
            onClick={analizeMood}
            disabled={isLoading}
          >
            <a className="border-blue-500 items-center text-sm font-medium bg-blue-500 text-white rounded cursor-pointer p-2">
              {isLoading ? (
                <Image src={loadersEnum.ellipsis} width={48} height={30} />
              ) : hasAnalizedRef.current ? (
                'Analizar nuevamente'
              ) : (
                'Analizar mood'
              )}
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
