###  Initialize  
```javascript 
var Google = require('social-auth').google;
var social=new Google("2514_FAKE_52.apps.googleusercontent.com","dpt_FAKE_4RwU8O","http://localhost/callback");
```

### Get refresh token from  CODE  
```javascript 
 social.getRefreshTokenFromCode("1/co0mLVRWaGDxy_FAKE_JDtdun6zK6XiATCKT",function(err,data){
 console.log(err,data);
 })
 ```
 
### Get ACCESS_TOKEN from REFRESH_TOKEN  
```javascript 
social.getAccessTokenFromRefreshToken("1/co0mLVRWaGDxyXMQ_FAKE_rJDtdun6zK6XiATCKT",function(err,data){
    console.log(err,data);
})
```


### Validate  ACCESS_TOKEN   
```javascript 
social.isValidToken("ya29._FAKE_-nev6swAPDIWOpZDewUDYGRGwA_JMqDGVrFdfpnOuackTUPg",function(err,data){
     console.log(err,data);
});
```
