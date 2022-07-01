# natively

A very simple template for React Native with essential packages and strict TypeScript (Only for Android)

## Why Typescript?

Is the best programming language for web. Made with ❤️ by

![Alt text](brandwhite.png?raw=true "Title")

## CLI Tools

``` powershell
yarn add global react-native
```

## Extra Packages

- rxjs: Reactive Extensions Library for JavaScript
- react-native-vector-icons: Icons pack for React Native
- @react-native-async-storage/async-storage: Async storage like localStorage
- @react-navigation/drawer: Drawer navigation

### Change to blank template

``` bash
$ git clone https://github.com/victor7w7r/036react
$ cd natively
$ git checkout blank
```

### If you have errors, please clean and build

``` bash
$ cd android
$ ./gradleW clean build
```

### Run and Develop (Consider using yarn)

``` bash
$ git clone https://github.com/victor7w7r/natively
$ cd natively
$ yarn install
$ yarn start #Run Metro server
$ yarn dev #Run develop in a virtual o physical device
```
