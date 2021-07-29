# FinDaBeer

Find your Beer Application Backend

## Prerequisites

You will need to have NodeJS, Express, Sequelize, Mysql and Npm installed locally on your machine.

## Technologies

Backend : NodeJS, Express, Sequelize and Mysql.

## Installation

Clone this repo. 

## DATABASE

Create new MySQL connection with your selected login : "Hostname" / "Username" / "Password"
Import new Database with the "model" file in deliverables.
Import Data with the "dump" file in deliverables.

## BACKEND

From within the project folder, create an .env file, enter the following lines and complete with your login (MySQL connexion) :

DB_USERNAME='YourUsername'<br/>
DB_PASSWORD='YourPassword'<br/>
DB_DATABASE='groupomania'<br/>
DB_HOST='YourHostname'

Then run "npm install". 

You can then run the server with "node server" or "nodemon server". The server should run on localhost with default port 3000. If the server runs on another port for any reason, this is printed to the console when the server starts, e.g. Listening on port 3001.

## ENJOY ^^