# Introduction to Modern Web Technologies

### Topics
- Node.JS
- NPM
- Markdown
- webpack
- babel
- es6


#### Recommended TODOs / Command Helpers for the Session / tweaks for pc
* clear command line using ``` cls ```
* Create directory ``` md ```
* Delete directory ``` rd ```
* Change directory ``` cd ```
* Create file using touch ``` touch filename.ext ```
* if you are using vsc use ``` CTRL + backticks or tilde(`) ``` to open terminal (add shift if you have CMDER)
* install touch-cli ``` npm i -g touch-cli ```
* add npm folder in your environment path 
    1. Run or Go to : ``` %USERPROFILE%\AppData\Roaming\npm ```.
    2. Copy the Path
    3. Click winkey and type `variables`
![Edit Variables](capture_editvariables.PNG)
    4. Add the copied path earlier to the PATH environment variable: 
![add path](capture_addpath.PNG)
    5. Add VSC code (wcs) path to the path as well so you can run ``` code . ``` to open VSC.

# Node.JS

## What is [node.js](https://nodejs.org/en/) ?


#### NodeJS in a nutshell: 
* created by Ryan Dah by taking chromes v8 engine (fastest engine available) and embedded it inside a C++.
* Trivia: Microsoft Edge uses Chakra, Firefox uses spidermonkey, and chrome uses V8.
* is a framework for writing server-side JavaScript applications. It is built on top of the V8 JavaScript runtime and uses an event-driven, non-blocking I/O model that makes it perfect for data-intensive, real-time applications.
* uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
* Browsers provide different objects for us to carry out certain task using JavaScript. With Node, we have objects that allow us to manipulate the file system by creating and deleting folders, query databases directly, and create web servers to serve data. Both Chrome and Node contain the V8 engine, but provide different run time environments that give us access to different objects/tools to leverage different functions.
* Documentation : [NodeJS Docs](https://nodejs.org/en/docs/)

#### Benefits (from https://www.mindinventory.com/blog/pros-and-cons-of-node-js-web-app-development/)
* Node.js offers an Easy Scalability
* Easy to Learn
* Node.js is used as a Single Programming Language
* The Benefit of Fullstack JS
* Known for Offering High Performance
* The Support of Large and Active Community
* The Advantage of Caching
* Offers the Freedom to Develop Apps
* Getting Support for Commonly Used Tools
* Handles the Requests Simultaneously
* Node.js is Highly Extensible

#### NPM  - Node Package Manager
* largest package manager available
* manages automated dependency and package management
* uses package.json file to manage your  project dependencies
* you may specify what versions your project depends upon to prevent updates from breaking your project
* you can create your own package and share it to the world for them to use it.

#### NPM command lines
```
npm -v // show npm version
npm install npm -g // updates NPM to the latest version
npm help // access npm help
npm install // will install all dependencies
npm install --dev // will install all dev-dependencies
npm install <package name> // install package locally
npm install <package name> --save // install package locally and add the package to project dependencies
npm install <package name> --save-dev // install package locally and add the package to project dev-dependencies

```
#### Node and NPM samples

checking versions
```node
    node -v or node --version
```

Trying Node.JS in your command line
``` 
    node

    or 

    node myjsfile
```
Getting Started with NPM: 
1. Create your directory and change directory into it ``` md myproject && cd myproject ```
2. Tells npm to manage the folder / project directory by running: ``` npm init ```
3. Verify if package.json was created in your project directory 
4. Tip: you may also run ``` npm init --y ``` to questions and npm will have the default values

Installing Package: 
