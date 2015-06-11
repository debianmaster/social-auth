
var socialDB = require("./index.js").socialDb;

var mongoURL="mongodb://abc.com:27017/test";
var collectionName="users";
socialDB = new socialDB(mongoURL,collectionName);

socialDB.storeAccessToken("aasdfasdfaa234ddasdfbc",{email:"9chakri@gmail.com"},function(err){
    console.log(err);
});
socialDB.storeTokens({code:"aasdfasdfaa234ddasdfbc",access_token:"asdfasdfasdfasdf",refresh_token:"asdfasdfasdfas"},{email:"9chakri@gmail.com"},function(err){
    console.log(err);
});

socialDB.getRefreshTokenFromAccessToken("aasdfasdfaa234ddasdfbc",{email:"9chakri@gmail.com"},function(err,refresh_token){
    console.log(err,refresh_token);
});