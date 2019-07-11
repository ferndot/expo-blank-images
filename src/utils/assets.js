import { Image } from 'react-native'
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export const cacheFonts = fonts => Font.loadAsync(fonts)

export const cacheImages = images => (
  images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
)

export const loadAssetsAsync = (images, fonts) => {
  const imageAssets = cacheImages(images)
  const fontAssets = cacheFonts(fonts)
  return Promise.all([imageAssets, fontAssets])
}
