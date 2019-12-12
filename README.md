# openfin-runtime-bug

## Description

sample app for runtime 14 bug

---

## Getting Started
- `yarn` to install dependencies
- `yarn start` to run the app
- Then in another terminal window - `npm run launch`

## Recreate bug:
- Upon app launch move the window using the AppBar
- Then on the lower right corner resize the window
- Attempt to move the window
- Then resize the window again using lower right corner
- Attempt to move the window again (notice it does not move)
- Change the openfin runtime to 13.76.45.14 in /public/app.dev.json
- Perform the steps again (bug should *not* be reproducable)
