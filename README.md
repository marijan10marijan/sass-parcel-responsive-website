# sass-parcel-responsive-website

#### To start project you need install Parcel(build tool).
#### Easiest way to install Parcel is using npm(node packet menager).
#### Install Parcel into your app using npm:  --> npm install --save-dev parcel


## What is Parcel?
### The zero configuration build tool for the web. Parcel includes a development server out of the box and when you make a change, 
### Parcel automatically updates your code in the browser – no page reload necessary!
### Packet json configuration for Parcel to work.
package.json:
{
  "name": "my-project",
  "source": "src/index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
    },
  "devDependencies": {
    "parcel": "latest"
  }
}

### Now you can run npm build to build your project for production and npm start to start the development server.
