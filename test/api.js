'use strict';
global.window = {};
var local = {};
global.localStorage = {
    getItem: function getItem(name){
        return local[name];
    },
    setItem: function setItem(name, val){
        local[name] = val;
    },
    removeItem: function removeItem(name){
        delete local[name];
    }
};
function XMLHttpRequest(){
    this.requestHeaders = {};
    this.responseHeaders = {};
}

XMLHttpRequest.prototype.open = function open(method,url){
    this.method = method;
    this.url = url;
};

XMLHttpRequest.prototype.send = function send(){
    this.readyState = 4;
    this.responseText = '[]';
    this.status = 200;
    this.responseHeaders['X-Poll-Interval'] = '60';
    if(this.onreadystatechange){
        setTimeout(this.onreadystatechange,250);
    }
};

XMLHttpRequest.prototype.setRequestHeader = function setRequestHeader(name,val){
    this.requestHeaders[name] = val;
};

XMLHttpRequest.prototype.getHeader = function getHeader(name){
    return this.responseHeaders[name];
};

global.XMLHttpRequest = XMLHttpRequest;
