# musical-doodle

POC a little csrf attack when the nginx server is badly configured. The attacker can make a post request with "credentitials".
The attacker is able to send the victim token from the cookie.

victim:
  - server: localhost
  - GET / return the page to create an account
  - POST /api/login: API to create an account (only set a cookie with a token)
  
attacker:
  - server: localhost:7000
  - GET / return a page that make a post to http:/localhost/malicious with credentials
  
  ## Run: 
   
```
docker-compose up -d
```

Go to localhost, submit the form with a random name
Close the browser tab
Click here: http://localhost:7000
The malicious link should have do malicious things with your previous generated token
