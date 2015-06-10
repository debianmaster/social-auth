var request = require('request');
var socialGoogle = function (client_id,client_secret,redirect_uri) {
    this.config={client_id : client_id,client_secret : client_secret,redirect_uri : redirect_uri};
    this.baseURL="https://www.googleapis.com/oauth2/v3/token";
};
socialGoogle.prototype.getRefreshTokenFromCode = function (code,cb) {
    var cf = this.config;
    cf["grant_type"]="authorization_code";
    cf["code"]=code;
    request.post(this.baseURL, {form:cf},function(err,httpResponse,body){
       cb(err,body);
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
module.exports.google = socialGoogle;