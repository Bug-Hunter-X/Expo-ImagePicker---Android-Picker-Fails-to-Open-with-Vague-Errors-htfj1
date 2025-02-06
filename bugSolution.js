import * as MediaLibrary from 'expo-media-library';

async function pickImage() {
  let result = await MediaLibrary.requestPermissionsAsync();

  if (result.granted === true) {
    let assets = await MediaLibrary.getAssetsAsync();
    let uri = assets.assets[0].uri;
    console.log('Image URI:', uri);
  } else {
    console.log('Permission to access media library was denied.');
  }
}

// ... rest of your component code