parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SknX":[function(require,module,exports) {
var t="575637518531-u9qgbb71tufm100c14lr5orev4qnvvji.apps.googleusercontent.com",n="AIzaSyBRBKmn7S0rzGHcoXashE7_-_0J5Tj-E0A",e=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],i="https://www.googleapis.com/auth/drive.file",o=document.getElementById("authorize_button"),c=document.getElementById("signout_button");function a(){gapi.client.init({apiKey:n,clientId:t,discoveryDocs:e,scope:i}).then(function(){gapi.auth2.getAuthInstance().isSignedIn.listen(s),s(gapi.auth2.getAuthInstance().isSignedIn.get()),o.onclick=u,c.onclick=l},function(t){g(JSON.stringify(t,null,2))})}function s(t){t?(o.style.display="none",c.style.display="block"):(o.style.display="block",c.style.display="none")}function u(t){gapi.auth2.getAuthInstance().signIn()}function l(t){gapi.auth2.getAuthInstance().signOut()}function g(t){var n=document.getElementById("content"),e=document.createTextNode(t+"\n");n.appendChild(e)}gapi.load("client:auth2",a);
},{}]},{},["SknX"], null)
//# sourceMappingURL=/connect.5cbd43b2.js.map