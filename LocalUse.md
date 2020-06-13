## For Local Use: ##

* Clone this Github repository and run 'npm install' to grab all the necessary packages required.
* Install and Configure MongoDB on your system
* Now install a GUI, I prefer Robo 3T or MongoDB Compass, if youre not comfortable with the Command Line
* Create a folder to store your database, Ive stored it in `C:/Users/UserName/mongodb-data` directory
* Open two command Line Interfaces:
* In the First CLI:
  * Get in your root directory
  * Run `/Users/UserName/mongodb/bin/mongod --dbpath=/Users/UserName/mongodb-data`
  * This will initiate a Local Database at `127.0.0.1:27017`
  <br/>
 * In the Second CLI:
  * Get in your project directory
  * Run 
    * `npm start` for Normal Use
    * `npm run dev` for Development Use
  * Now you can access the API at `localhost:3000`
  
