# RayHealth

## Installation (OSX)
- Install 
  - Api
    - install docker
    - `cd ./src/Api`
    - install mongodb via docker
        - `npm run docker:start-db`
        - `docker run --name ray_health -d -p 127.0.0.1:27017:27017 mongo`
    - _optional:+ install mongoDb Compass for db tools
  - Install _store dependencies
    - `cd ./src/_store`
    - `npm install`
  - ReactNative
    - `cd ./src/ReactNative`
    - see instructions here https://reactnative.dev/docs/environment-setup
        - follow "React Native CLI Quickstart"
    - `brew install watchman`
    - `sudo gem install cocoapods`
    - install all dependencies
        - `npm run install-clean`
## Run

### API
- `cd ./src/Api`
- install npm
    - `npm install`
- start database
    - `npm run docker:start-db`
- in one terminal to generate and watch typescript to javascript
    - `npm run dev:watch` 
- to start express server
    - `npm run dev:server` 

### React Native
- `cd ./src/ReactNative`
- in separate terminal
    - start typescript
        - `npm run dev:watch`
    - start 
        - `npm run dev:start`
- ios
    - start via xcode
- android
    `npm run start:android`

