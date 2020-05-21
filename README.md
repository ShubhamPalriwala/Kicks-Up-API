# Kicks-Up-API

Here, I've created a Backend for an e-commerce website as my Web Dev project for ISOC 2020 by [IEEE-VIT](https://www.ieeevit.org ).

I'd like to thank my Mentor [Ziyan Karmali](https://github.com/ZiyanK ) without whom this might have not been possible.


User Route  | Request Type | Function
------------- | -------------|---------
/users/signup  | Post | Lets you signup as a new user when you enter your name,email and password in json format
/users/login  | Post | Lets you login after you enter your email and password
/users/logout | Post | Logs you out from the current session
/users/logoutall | Post | Logs you out from all the active sessions
/users/me | Get | Returns your profile
/users/me | Patch | Lets you update your details when entered in JSON format
/users/me | Delete | Deletes the current profile permanantly
/users/addtocart | Post | Adds an item to cart when you enter the product ID in JSON format
/users/mycart | Get | Returns all the items in the cart as well as the total Cart Value
/users/deletefromcart | Post | Deletes the specific item from your cart when the product ID is entered inv JSON format
/users/clearcart | Get | Removes all the items from your cart

Product Route | Request Type | Function
------------- | -------------|---------
/products/create | Post | Lets the Authorized Person add a new product to the Website
/products/ | Get | Return all the products. Add query parameters such as brand, gender, colour, sortBy, maxPrice, minPrice to refine your search
/products/:id | Get | Search a specific product by it's ID
/products/:id/update | Patch | Lets the Authorized Person uodate a products parameters
/products/:id/delete | Delete | Lets the Authorized Person remove an existing product from the Website

### For Local Use: ###

Clone this repository and run 'npm install' to grab all the necessary packages\
Configure MongoDB in your system and install a GUI, in my case, Robo 3T or MongoDB Compass

Run the following in a separate command window:\
/Users/Sanjay/mongodb/bin/mongod --dbpath=/Users/Sanjay/mongodb-data\
Make necessory changes to the above command as per your machine

Now in a separate command window run 'npm start' or 'npm run dev'
