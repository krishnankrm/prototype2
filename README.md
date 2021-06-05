
1.) Run the file app.js using the command
>> Node app.js
	Server will start in port 9001.
2.) Open the mongodb compass, connect to localhost and default port and create a db with the name “Forms” and collection “forms” and “login”.
3.) Add records to the db login, in the structure as below
    { "username":"test",
      "password":"test",
      "firstname":"krishnan"
    }
4.) In your api manager(Postman), Run the api http://localhost:9001/login and post the login credentials in the form given below
    {"username":"test",
      "password":"test",
    }
    It will ask for a authorization key( use eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI4MDEzMzcsImV4cCI6MTYyMzQwNjEzN30.PaC1LsXX4qNVgZhGh-X5qjXl3GA0BYbjkLxJvJKIpDU)
    A new token key will be generated and returned as a responce with the login credentials. Copy that key for further access.

5) Post in this api http://localhost:9001/form/savedetails the form deails in the form (use the new generated token)
 {  "firstname": "Krishnan",
    "lastname": "K",
    "middlename": "RM",
    "address": "23,C2, Ganapathy 1st, Avvai Nagar, Thiruvanmiyur, Chennai",
    "email": "krm.krish@gmail.com",
    "phone": "9884000157",
    "height": "71",
    "weight": "82",
 }
 It will return a responce of the saved details with an unique object id. Save the object id in case you want to delete the document.
 
6)Delete a record from the forms using the api - localhost:9001/form/delete-details/60b9fc5600d1000c9408cf53 in delete method. 
Replace 60b9fc5600d1000c9408cf53 with the object id of the file you want to delete. Add the authorization key. 

It will return statement that 1 record is deleted.
 
