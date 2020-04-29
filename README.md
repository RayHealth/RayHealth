# RayHealth

## Installation (OSX)
- Install 
  - Install redux _store dependencies
    - `cd ./src/_store`
    - `npm install`
  - Api
    - install docker
    - `cd ./src/Api`
    - install mongodb via docker
        - `npm run docker:create-db`
    - _optional: install mongoDb Compass for db tools
  - ReactNative
    - update `devMachineAddress` at `~/src/_store/sharedConfig/index.ts` to your local machine's address
    - `cd ./src/ReactNative`
    - see instructions here https://reactnative.dev/docs/environment-setup
        - follow "React Native CLI Quickstart"
    - `brew install watchman`
    - `sudo gem install cocoapods`
    - install all dependencies
        - `npm run install-clean`
    - create main.jsbundle file
        - `npm run bundle-ios-dev`
## Run

### API
- `cd ./src/Api`
- install npm
    - `npm install`
- in one terminal to generate and watch typescript to javascript
    - `npm run dev:watch` 
- to start express server
    - `npm run dev:server` 

### React Native
- `cd ./src/ReactNative`
- in separate terminal
    - start typescript
        - `npm run dev:watch`
    - start react-native server
        - `npm run dev:start`
- ios
    - start via xcode
- android
    `npm run start:android`

