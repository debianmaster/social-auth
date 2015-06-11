var request = require('request');
var mongojs = require("mongojs");
var socialGoogle = function (client_id,client_secret,redirect_uri) {
    this.config={client_id : client_id,client_secret : client_secret,redirect_uri : redirect_uri};
    this.baseURL="https://www.googleapis.com/oauth2/v3/token";
};
socialGoogle.prototype.getRefreshTokenFromCode = function (code,cb) {
    var cf = this.config;
    cf["grant_type"]="authorization_code";
    cf["code"]=code;
    request.post(this.baseURL, {form:cf},function(err,httpResponse,body){
        if(err) cb(err);
        var tokens=JSON.parse(body);
        if(tokens['error']!=undefined)
            cb(tokens);
        else cb(null,tokens);
    });
};
socialGoogle.prototype.getAccessTokenFromRefreshToken = function (refresh_token,cb) {
    var cf = this.config;
    delete cf.code;
    cf.refresh_token=refresh_token;;
    cf.grant_type="refresh_token";
    request.post(this.baseURL, {form:cf},function(err,httpResponse,body){
        cb(err,JSON.parse(body));
    });
};
socialGoogle.prototype.isValidToken = function (access_token,cb) {
    request.post(this.baseURL+"info?access_token="+access_token,function(err,httpResponse,body){
        if(err){
           cb(err);
        }
        else{
            var result= JSON.parse(body);
            if(result['error_description']!=undefined)
                cb(result);
            else
                cb(null,result);
        }
    });
};

var socialDb=function(mongoURL,collectioname){
    this.db = mongojs(mongoURL,[collectioname]);
    this.userCollection = collectioname;
}

socialDb.prototype.getRefreshTokenFromAccessToken = function(access_token,query,cb){
    query[access_token]=access_token;
    this.db[this.userCollection].findOne(query,function(err,data){
       if(data==null)
            cb({msg:'Not Found'},{});
       else
           cb(err,data['refresh_token']);
    });
}
socialDb.prototype.storeAccessToken = function(access_token,query,cb){
    this.db[this.userCollection].findAndModify({
        query: query,
        update: { $set: { access_token: access_token } }
    }, function(err, data, lastErrorObject) {
        if(data==null)
            cb({msg:'Not Found'},{});
        else
            cb(err,{msg:'OK'});
    });
}
socialDb.prototype.storeTokens = function(tokens,query,cb){
    this.db[this.userCollection].findAndModify({
        query: query,
        update: { $set: tokens }
    }, function(err, data, lastErrorObject) {
        if(data==null)
            cb({msg:'Not Found'},{});
        else
            cb(err,{msg:'OK'});
    });
}
module.exports.google = socialGoogle;
module.exports.socialDb = socialDb;