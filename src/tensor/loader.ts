import * as tf from '@tensorflow/tfjs'

/**
 * Test whether a given URL is retrievable.
 */
export const urlExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch (err) {
    return false
  }
}

/**
 * Load pretrained model stored at a remote URL.
 *
 * @return An instance of `tf.Model` with model topology and weights loaded.
 */

export const loadHostedPretrainedModel = async (
  url: string
): Promise<tf.LayersModel | undefined> => {
  try {
    const model = await tf.loadLayersModel(url)
    return model
  } catch (err) {
    console.error(err)
  }
}

/**
 * Load metadata file stored at a remote URL.
 *
 * @return An object containing metadata as key-value pairs.
 */
export const loadHostedMetadata = async (url: string) => {
  try {
    const metadataJson = await fetch(url)
    const metadata = await metadataJson.json()
    return metadata
  } catch (err) {
    console.error(err)
  }
}
