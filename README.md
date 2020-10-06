# Login-API

API is deployed on Glitch.

# Activate
To activate the API send get request to https://loginapi.glitch.me/activate

Response:<pre>
"Active"</pre>

# Login
Send Post request to https://loginapi.glitch.me/login appending query to the link.

Example:
<pre>
https://loginapi.glitch.me/login?Email=chir@g.com&Password=123456789
</pre>
Response:

(If Valid):
<pre>
{
    "UserId": "oU35QiJ3w",
    "Email": "chir@g.com",
    "UserName": "Chir1"
}
</pre>
(If Invalid):
<pre>
"Invalid EmailID or Password"
</pre>
# Signup

Send Post request to https://loginapi.glitch.me/signup and sending details (Email,Password,UserName) in form of x-www-form-urlencoded in the body.

Example:
<pre>
URL: https://loginapi.glitch.me/signup
Body(x-www-form-urlencoded):
  Email: chir@g.com
  Password: 123456789
  UserName: Chir1234
</pre>


Response:

(If Exists):
<pre>
{
    "UserId": "oU35QiJ3w",
    "value": "User Already Exists"
}
</pre>
(If Does not Exists)
<pre>
{
    "date": "2020-10-06T16:19:38.453Z",
    "UserId": "oU35QiJ3w",
    "UserName": "Chir123",
    "Email": "chir@g.com",
    "Password": "qwerty"
}
</pre>
