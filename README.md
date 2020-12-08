# RNBoilerplate

To run Android, you need to:
1. Add ```local.properties``` in ```android``` folder.
2. In ```local.properties```, you need to add ```sdk.dir=/your/path/here/Android/sdk```
3. ```npm install```
4. If you want to use emulator emulator, download a device in AVD Manager in Android Studio.
5. Run the emulator.
6. ```npm run android```

To run iOS, you need to: (For macOS)
1. Go to ios folder of the project. ```cd ios```
2. ```pod install && cd ..```
3. ```npm run ios```