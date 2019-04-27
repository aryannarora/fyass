## Fyle Assignment

**Note**
This is the first time I've used Postgres and if there are somethings that feels far from optimal, I'd like to hear it in feedback.
Also, I truncated the .sql file that I found in the repo mentioned in assignment problem.
Link to truncated file https://s3.ap-south-1.amazonaws.com/fyass/indian_banks.sql

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


1. For /branch

METHOD - GET

Query PARAMS - 

    ifsc @String
    
    e.g https://fyass.herokuapp.com/branch?ifsc=ADCC0000070

2.For /bank
  
  METHOD - GET
  
  Query PARAMS - 
    
    bank_name @String
    city @String
    
    e.g https://fyass.herokuapp.com/bank?bank_name=STATE%20BANK%20OF%20INDIA&city=BANGALORE