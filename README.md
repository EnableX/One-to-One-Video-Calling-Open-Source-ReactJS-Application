# One to One Video Calling Application using ReactJS and EnableX Toolkit for Web 

This is a sample one to one video calling client application in ReactJS that allows developers to implement video calling capabilities in their websites. The application runs on the web browsers (referred as client end point) and utilizes EnableX Web SDK to conduct an RTC session with its peers through EnableX Video Services. 

The client application performs the following tasks to facilitate an RTC session: 

* Get token from the application server 
* Connect to the room using the token 
* Publish audio/video streams in the room 
* Subscribe to remote audio/video streams in the room 
* Listen to any session related events

This sample client application also demonstrates the following features:

* Mute/Unmute video 
* Mute/Unmute audio 
* Session Recording 
* Chat 
* Screen share 
* Disconnect



## 1 Get Started

### 1.1 Pre-Requisites

#### 1.1.1 App Id and App Key

* Create a free account on EnableX  [https://portal.enablex.io/cpaas/trial-sign-up/] 
* Create your Project
* Get the App ID and App Key generated against the Project


#### 1.1.2 Requirement

* Check your browser compatibility with EnableX [https://developer.enablex.io/video/browser-compatibility-of-enablex-video/]
* Download latest copy of Web SDK (EnxRtc.js) [https://developer.enablex.io/wp-content/uploads/EnxRtc.js.v1.9.3.zip?ver=1.9.3] and replace client/js/EnxRtc.js 
* Install all project modules. Run `npm install` 
* Install the project package dependencies. Run `yarn install` 


#### 1.1.3 SSL Certificate 

Use a valid SSL Certificate for your Domain and use it to configure your Web Service to make your domain accessible on HTTPS. 


#### 1.1.4 Sample Application Server

While this GitHub repository provides sample client code, you require an application server to provision video room on EnableX server. Use any of the Repository listed below to setup your application server: 

* Laravel [https://github.com/EnableX/WebRTC-Open-Source-One-To-One-Video-Chat-Application-in-Laravel]
* PHP     [https://github.com/EnableX/One-to-One-Video-Calling-Open-Source-PHP-Application]
* Nodejs  [https://github.com/EnableX/One-to-One-Video-Chat-Sample-Web-Application]
* Python  [https://github.com/EnableX/WebRTC-Python-Open-Source-Application-for-1-to-1-video-chat]
* C#  [https://github.com/EnableX/One-to-One-Video-Calling-C-Sharp-Application]
  
Clone or download repository of your choice and configure the server as per the instructions given in the respective README document.  

To directly try the sample code without having to configure an application server, you can also use the EnableX test server as explained in section 2. However, it is recommended to configure your own application server to build a video calling web app. 


### 1.2 Build Application  

* Run `npm start`. 
* Run the app in the development mode.  Run `yarn start`. This loads the application on https://your-domain:3000 and allows you to check for errors on the console. 
* Launch the test runner in the interactive watch mode. Run `yarn test`. Refer to the **Testing Guide**  [https://facebook.github.io/create-react-app/docs/running-tests] for more information. 
* Build the application. Run `yarn build`. The application is now ready for deployment. Refer to the **Deployment Guide** [https://facebook.github.io/create-react-app/docs/deployment] for more information. 
* If you are not satisfied with the build tool and configuration choices, you can eject at any time.  Run `yarn eject`.  

This command removes the single build dependency from your project. Instead, it 	copies all the configuration files and the transitive dependencies (Webpack, Babel, 	ESLint, etc) right into your project so you have full control over them. All the commands except eject shall continue to work but they shall point to the copied scripts so you can tweak them. At this point, you’re on your own. 

You don’t ever have to use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, 	we understand that this tool wouldn’t be useful if you cannot customize it when  you are ready for it. 

Also, note that eject is a one-way operation that cannot be undone.  


### 1.3 Test 

* Open the web browser and go to https://your-domain-name:4443/ to load the application.  
* If you don't have a Room ID, then create by clicking on the “Create Room” button. The Room ID will get prefilled in the form. 
* Save the Room ID and share it with others along with the URL to join the Same Room.  
* Enter your Name and choose your role, either as a Moderator or a Participant 
* Allow access to the microphone when prompted. 
* You are now in a video call with others, who have joined the same room. 

Note: This sample application creates a virtual room with limited Participants and 1 Moderator for demonstration purposes. 



## 2 Testing Environment

As mentioned in section 1.1.4 above, you have an option to run your client application on **EnableX pre-configured environment** [https://try.enablex.io/] instead of setting up your own application server.  

This allows you to quickly test the performance of EnableX audio calls before getting into the development of your application.  

As the EnableX test server has been configured for demonstration purpose only, it only allows to: 

* Conduct a single session with a duration lesser than 10 minutes. 
* Host a multiparty call with less than 3 participants. 

Refer to the **Demo App Server** [https://developer.enablex.io/video/sample-code/#demo-app-server] for more information.   

Once you have successfully tested your application on the test server, you can set up your application server as explained in section 1.1.4 above. 



## 3 Learn more about Client API

The client APIs are called from the EnableX Web SDK (EnxRtc.js) which runs on the client browser. The client APIs are used to communicate with the EnableX video services and monitor the client-side state of the RTC session.  

The client APIs are typically used to: 

* Connect to the desired room using the token received from the application server 
* Manage local audio and video 
* Handle room and stream related events initiated by the user 

The client APIs handle four major entities: 

* **EnableX Room:** It handles room/session related events like connection, local stream publication, and remote stream subscription. 
* **EnableX Stream:** It identifies audio/video/data stream published by the user. 
* **Events:** It represents the events related to the room and the stream. 
* **Player:** It represents the customizable UI element used to render the audio/video stream in the DOM. 

In addition to the features demonstrated in this sample program, the SDK has many helpful APIs available for the developers to utilize like: 

* File sharing 
* Streaming 
* Annotation 
* Canvas 

And many more such exciting features. 

Read **Web Toolkit Documentation** [https://www.enablex.io/developer/video-api/client-api/web-toolkit/]  for more details.  

**Download Web Toolkit** [https://www.enablex.io/developer/video/downloads/] to get the latest version of Web SDK. 



## 4 Support

EnableX provides a library of Documentations, How-to Guides, and Sample Codes to help software developers, interested in embedding RTC in their applications. 

Refer to the **Complete Developer’s Guide** [https://developer.enablex.io/] for more details. 

You may also write to us for additional support at support@enablex.io. 
