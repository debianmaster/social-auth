###  Initialize  
```javascript 
var Google = require('social-auth').google;
var client_id="2514_FAKE_52.apps.googleusercontent.com";
var client_secret="dpt_FAKE_4RwU8O";
var callback="http://localhost/callback";
var social=new Google(client_id,client_secret,callback);
```

### Get refresh token from  CODE  
```javascript 
var code="1/co0mLVRWaGDxy_FAKE_JDtdun6zK6XiATCKT";
 social.getRefreshTokenFromCode(code,function(err,data){
 console.log(err,data);
 })
 ```
 
### Get ACCESS_TOKEN from REFRESH_TOKEN  
```javascript 
var refresh_token="1/co0mLVRWaGDxyXMQ_FAKE_rJDtdun6zK6XiATCKT";
social.getAccessTokenFromRefreshToken(refresh_token,function(err,data){
    console.log(err,data);
})
```


### Validate  ACCESS_TOKEN   
```javascript 
var access_token = "ya29._FAKE_-nev6swAPDIWOpZDewUDYGRGwA_JMqDGVrFdfpnOuackTUPg";
social.isValidToken(access_token,function(err,data){
     console.log(err,data);
});
```
