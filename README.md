# Kicks-Up-API

Here, I've created a Backend for an e-commerce website as my Web Dev project for ISOC 2020 by [IEEE-VIT](https://www.ieeevit.org ).

I'd like to thank my Mentor [Ziyan Karmali](https://github.com/ZiyanK ) without whom this might have not been possible.


User Route  | Request Type | Function
------------- | -------------|---------
/users/signup  | Post | Signs you up as a new user
/users/login  | Post | Logs you in after you enter your credentials
/users/logout | Post | Logs you out from the current session
/users/logoutall | Post | Logs you out from all the active sessions
/users/me | Get | Returns your profile
/users/me | Patch | Updates the details you requested
/users/me | Delete | Deletes your profile permanantly
/users/addtocart | Post | Adds an item to yout cart
/users/mycart | Get | Displays all the items in the cart as well as the total Cart Value
/users/deletefromcart | Post | Deletes the specific product from your cart 
/users/clearcart | Get | Removes all the products from your cart

Product Route | Request Type | Function
------------- | -------------|---------
/products/create | Post | Lets the Authorized Person add a new product to the Website
/products/ | Get | Displays all the products. Add query parameters such as brand, gender, colour, sortBy, maxPrice, minPrice to refine your search
/products/:id | Get | Search a specific product by it's ID
/products/:id/update | Patch | Lets the Authorized Person uodate a products parameters
/products/:id | Delete | Lets the Authorized Person remove an existing product from the Website

## Sample Requests and Responses ##
### View them in Postman by clicking [here](https://documenter.getpostman.com/view/11026000/Szzhddp3?version=latest)

### SendGrid API has been used to send: ###
* A Welcome Mail when a User registers
* Mail whenever they update their User Profile
* A GoodBye Mail when they decide to delete their account

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
  
