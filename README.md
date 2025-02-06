# Expo ImagePicker Android Issue

This repository demonstrates a bug encountered when using the Expo ImagePicker library on Android devices. The picker fails to open, returning unhelpful error messages.  The problem appears to be related to a combination of permissions and potentially the Android version or device configuration.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on an Android device or emulator.
4. Attempt to open the ImagePicker.

## Expected Behavior

The ImagePicker should open and allow the user to select an image.

## Actual Behavior

The picker fails to open, and an error (potentially vague) is reported in the console.

## Solution

Refer to the `bugSolution.js` file for a potential fix which involves using MediaLibrary instead of ImagePicker.