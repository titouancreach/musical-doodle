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
