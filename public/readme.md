## Postman Assignment


### SETUP
1. Place this code into any directory on your system.
2. sudo npm i (You'll need sudo for bcrypt)
3. npm start

**Note**

Bcrypt may have separate installation instructions for you system.

### Tools used
1. Node.js.
2. Mongoose.
3. Bunyan, for logging.
4. Postman for mocking requests.
5. Passportjs for Auth

Database is hosted at mlabs.

### Regarding the tasks done.
I've done the basic task of login and registering a user completely.
Other then that, I did two points in extended functionality i.e to follow/unfollow a user and to create, read and delete a tweet.

#### Reason for not attempting the complete assignment.

I've my internal practicals going on in college and at home I prepare for interviews and give some interviews that are already scheduled.
This whole college, job hunt and companies' assignments leaves a very little time for my own. So, I've tried to attempt it as much as I can.

Whatever I have done, I have tried to wrap and refactor all the code in a easy-to-understand-and-scale manner.

For the points I didn't do in assignment, I've done such stuff before (have done two internships in social-media themed startups) and I have knowledge to accomplish those tasks.

### Regarding code explanation

All the files are commented as needed and variables names are explanatory.

### Instructions for Routes

**Note**

All the routes that starts with `/user' are protected and needs a user to be logged in before using them. Other than that, all routes are public.


1. For /register

METHOD - POST with 'Content-type': 'application/x-www-form-urlencoded'. 

PARAMS - 

    username @String
    password @String
    password2 @String // For confirm password


2.For /login
  
  METHOD - POST with 'Content-type': 'application/x-www-form-urlencoded'. 
  
  PARAMS - 
    
    username @String
    password @String
    
    
3.For /user/follow (Protected Route)

METHOD - POST with 'Content-type': 'application/x-www-form-urlencoded'. 

PARAMS - 

    userToFollow @String (username of the person to follow)


4.For /user/unfollow (Protected Route)
   
   METHOD - POST with 'Content-type': 'application/x-www-form-urlencoded'. 
   
   PARAMS - 
   
       userToUnFollow @String (username of the person to unfollow)

5.For /user (Protected Route) | (to get the user info so it's easy to check the following and followers count)
   
   METHOD - GET 
   
6.For /user/tweet (Create a Tweet) | (Protected Route)
  
  METHOD - POST with 'Content-type': 'application/x-www-form-urlencoded'. 
     
     PARAMS - 
     
         content @String (the content of the tweet. Must be > 10 characters)
   
   Returns the newly created Tweet, if successful.

7.For /user/tweet (Removes a Tweet) | (Protected Route)
  
  METHOD - Delete with 'Content-type': 'application/x-www-form-urlencoded'. 
     
     PARAMS - 
     
         tweetId @String (the ObjectId of the tweet. Must be of type mongoose.ObjectId)
         
8.For /tweet/:tweetId (Read a Tweet)

  Method: GET with tweetId in URL
  
    PARAMs -
        tweetId @ String(the ObjectId of the tweet. Must be of type mongoose.ObjectId)
        
  Example GET request to /tweet/5cb85b846ee3894eed07a6fe
  
9. For /tweet (Get all tweets)
   
   Method: GET
   
   This endpoint is just to get all the tweets so one can easily get the tweet Ids to try it on other routes.