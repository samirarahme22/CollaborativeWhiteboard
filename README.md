Collaborative Whiteboard Documentation

Table of Contents:

1.	Introduction
2.	Project Structure
3.	Technologies Used
4.	Installation
5.	Usage
6.	API Reference

Introduction:

Collaborative Whiteboard is an interactive web application that allows users to draw and collaborate on a shared whiteboard in real-time. This documentation provides an overview of the project structure, technologies used, installation instructions, and usage guidelines.

Project Structure:

-server: Contains the server-side code for handling real-time communication and canvas data sharing.
   -node_modules: Node.js dependencies are stored here.
   -package-lock.json: A JSON file that contains information about project dependencies.
   -server.js: The main server file responsible for setting up the WebSocket server and handling client connections.
-ui: Contains the front-end code for the web application.
   -whiteboard-collab: The root directory for the React application.
     -node_modules: Node.js dependencies for the front-end.
     -public: Static files and HTML templates.
     -src: Source code for the React application.
       -components: React components used in the application.
         -board: Contains components related to the whiteboard.
           -Board.jsx: Component responsible for drawing and sharing canvas data.
         -container: Contains components related to the user interface and settings.
           -Container.jsx: Component for user interface and settings.
       -App.js: The main React component for rendering the application

Technologies Used:

-Node.js: Backend server environment.
-Express.js: Framework for building the server.
-Socket.io: Library for real-time communication.
-React: Front-end library for building user interfaces.

Installation:

-Clone the repository to your local machine.
-Open a terminal and navigate to the server directory.
-Run npm install to install the server dependencies.
-Navigate to the ui/whiteboard-collab directory.
-Run npm install to install the front-end dependencies.
-Start the server by running node server.js in the server directory.
-Start the React application by running npm start in the ui/whiteboard-collab directory.

Usage:

-Access the Collaborative Whiteboard application in your web browser.
-Use the color picker to select a brush color.
-Choose a brush size from the dropdown menu.
-Click the "Eraser" button to toggle eraser mode.
-Click and drag on the whiteboard to draw or erase.
-Use the "Clear All" button to clear the entire whiteboard.

API Reference:

The server communicates with clients using WebSocket connections through Socket.io. Refer to the server code in server.js for API implementation details.

