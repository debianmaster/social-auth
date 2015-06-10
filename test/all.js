var Social = require('../index.js');
var social=new Social("25145FAKEclt.googleusercontent.com","dptK5wGFAKE2zS4RwU8O","http://localhost/callback");

//This test module is not yet complete
exports['test get refresh token'] = function(assert, done) {
    social.getRefreshTokenFromCode("1/co0mLVRWaGDxyXM_FAKE_OrJDtdun6zK6XiATCKT",function(err,data){
        console.log(err,data);
        assert.equal(err,null);
        done();
    })
}

exports['test get access token from refresh token'] = function(assert, done) {
    social.getAccessTokenFromRefreshToken("1/co0mLVRWaGDxyXM_FAKE_jnjZIgOrJDtdun6zK6XiATCKT",function(err,data){
        console.log(err,data);
        assert.equal(err,null);
        done();
    })
}

exports['test validate token'] = function(assert, done) {
    social.isValidToken("ya29.jgHwRWsInQ_RxBBx0W8tB3qyiRVKx-nev6sw_FAKE_GRGwA_JMqDGVrFdfpnOuackTUPg",function(err,data){
        console.log(err,data);
        assert.equal(err,null);
        done();
    });
}

if (module == require.main) require('test').run(exports)