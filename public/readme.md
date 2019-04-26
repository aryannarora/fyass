## Fyle Assignment

**Note**
This is the first time I've used Postgres and if there are somethings that feels far from optimal, I'd like to hear it in feedback.

### SETUP
You can not run this locally because I've used Heroku postgres and to connect apps outside of heroku, we need SSL.

### Time spent into coding this
I started at 12:45 PM and did work till 3:25 PM. 
I first setup postgres in heroku and dumped the data using the sql file provided in given repository.
Then I started coding.
This time frame also includes a 15 minutes lunch break.

### Tools used
1. Node.js.
2. node-postgres.
3. Bunyan, for logging.
4. Postman for mocking requests.

Database is hosted at heroku using heroku:pg.

### Regarding code explanation

All the files are commented as needed and variables names are explanatory.

### Instructions for Routes


1. For /:ifsc

METHOD - GET

PARAMS - 

    ifsc @String

2.For /:bank/:city
  
  METHOD - GET
  
  PARAMS - 
    
    bank @String
    city @String