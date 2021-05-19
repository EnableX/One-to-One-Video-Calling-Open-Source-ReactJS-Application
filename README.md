1-to-1 RTC: Sample App ReactJS, EnableX Web Toolkit

The Sample Web App demonstrates the use of APIs for EnableX platform to carry out 1-to-1 RTC (Real Time Communication). The main motivation behind this application is to demonstrate usage of APIs and allow developers to ramp up on app by hosting on their own devices instead of directly using servers.

RTC Applications hosted on EnableX platform run natively on supported set of web browsers without any additional plugin downloads.

This basic 1-to-1 Video Chat Application is developed using ReactJS, HTML, CSS, Bootstrap v4.0.0-alpha.6, JAVA Script, jQuery, EnxRtc (The EnableX Web Toolkit).

> The details of the supported set of web browsers can be found here:
> https://developer.enablex.io/video/browser-compatibility-of-enablex-video/


## 1. Important!

When developing a Client End Point Application, make sure to include the updated EnxRtc.js.


## 2. Trial

Try a quick Video Call: https://try.enablex.io/ 
Sign up for a free trial https://portal.enablex.io/cpaas/trial-sign-up/

## 3 Pre-Requisites

#### 3.1.1 App Id and App Key

* Register with EnableX [https://portal.enablex.io/cpaas/trial-sign-up/] 
* Create your Application
* Get your App ID and App Key
* Clone this Repository `https://github.com/EnableX/One-to-One-Video-Calling-Open-Source-ReactJS-Application.git`


#### 3.1.2 Sample App Server

* You need to have an App server. Get any of the Repositiory listed below to setup your App Server:
  * Laravel [https://github.com/EnableX/Multiparty-Video-Calling-Laravel-Open-Source-Application.git]
  * PHP     [https://github.com/EnableX/Group-Video-Call-Conferencing-Sample-Application-in-PHP.git]
  * Nodejs  [https://github.com/EnableX/Video-Conferencing-Open-Source-Web-Application-Sample.git]
  * Python  [https://github.com/EnableX/Group-Video-Chat-Opensource-Application-in-Python.git]
  
* Clone or download Repository of your choice & follow the steps further
* You need to use App ID and App Key to run this Service.
* Your Vuejs Client End Point needs to connect to this Service to create Virtual Room.
* Follow README file of the cloned Repository to setup the Service.

#### 3.1.3 SSL Certificates

The Application needs to run on https. So, you need to use a valid SSL Certificate for your Domain and point your application to use them. 

However you may use self-signed Certificate to run this application locally. There are many Web Sites to get a Self-Signed Certificate generated for you, Google it. Few among them are:

* https://letsencrypt.org/
* https://www.sslchecker.com/csr/self_signed
* https://www.akadia.com/services/ssh_test_certificate.html  

As you have Certificate or created a Self-Signed Certificate, create a directory "certs" under your Sample Web App Directory. Copy your Certificate files (.key and .crt files)  to this directory. 

## 4. Server API

EnableX Server API is a Rest API service meant to be called from Partners' Application Server to provision video enabled
meeting rooms. API Access is given to each Application through the assigned App ID and App Key. So, the App ID and App Key
are to be used as Username and Password respectively to pass as HTTP Basic Authentication header to access Server API.

For this application, the following Server API calls are used:
* https://developer.enablex.io/video-api/server-api/rooms-route/#create-room - To create room to carry out a video session
* https://developer.enablex.io/video-api/server-api/rooms-route/#create-token - To create Token for the given Room to join a session

To know more about Server API, go to:
https://developer.enablex.io/video-api/server-api/

## 5 Available Scripts

In the project directory, you can run:
### `yarn install`

Install all the package dependencies for the project

### `npm install`

Install all the modules for the project

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## 4 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## 5 Server API

EnableX Server API is a Rest API service meant to be called from Partners' Application Server to provision video enabled
meeting rooms. API Access is given to each Application through the assigned App ID and App Key. So, the App ID and App Key
are to be used as Username and Password respectively to pass as HTTP Basic Authentication header to access Server API.

For this application, the following Server API calls are used:

- https://developer.vcloudx.com/video-api/server-api/rooms-route/#get-rooms - To get list of Rooms
- https://developer.vcloudx.com/video-api/server-api/rooms-route/#get-room-info - To get information of the given Room
- https://developer.vcloudx.com/video-api/server-api/rooms-route/#create-token - To create Token for the given Room

To know more about Server API, go to:
https://developer.vcloudx.com/video-api/server-api/


## 6 Client API

Client End Point Application uses Web Toolkit EnxRtc.js to communicate with EnableX Servers to initiate and manage RTC Communications.

To know more about Client API, go to:
https://developer.enablex.io/video-api/client-api/
