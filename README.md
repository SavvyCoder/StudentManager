# Student Manager

## What it does

A very simple Express-Angular-Node application that enables traversal through mock student data with a barebones interface. Built on a enterprise grade client boilerplate ngx-rocket with full test coverage. Looking to add features when I get time (adding a dockerized mongoDB instance).Thanks for stopping by! 

## Getting Started

To get the application running on your machine, clone this repository and type 'npm run first'.
This will install all dependencies, run type-checking, build server files and then start the development server for both the Express Api and Angular client.

I have commited my .env (all it has is the port config) to avoid any initial port conflict errors (could have passed it as a script param but prefer this solution as having a .env boilerplate is nice), feel free to customize to your liking.

## Useful scripts

*Run 'npm run first' to quickly get started*

1. npm run start - this will simulteneously run both client and express server.
2. npm run test - this will intiate and run both testing suites for server and client.
3. npm run watch - this will keep watch of changes to both server and client and rebuilds based on the respective change.
