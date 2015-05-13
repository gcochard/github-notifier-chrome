'use strict';
var assert = require('assert');
var assertions = {
    setBadgeText: '',
    setBadgeBackgroundColor: '',
    setTitle: '',
    update: '',
    create: ''
};
var chromeMock = {
    browserAction: {
        setBadgeText: function setBadgeText(obj){
            assert(obj.hasOwnProperty('text'));
            assert.equal(assertions.setBadgeText, obj.text);
        },
        setBadgeBackgroundColor: function setBadgeBackgroundColor(obj){
            assert(obj.hasOwnProperty('color'));
            assert.equal(assertions.setBadgeBackgroundColor, obj.color);
        },
        setTitle: function setTitle(obj){
            assert(obj.hasOwnProperty('title'));
            assert.equal(assertions.setTitle, obj.title);
        },
        onClicked: {
            addListener: function addOnClickedListener(fn){
                // no-op
            }
        }
    },
    alarms: {
        create: function create(obj){
            // no-op
        },
        onAlarm: {
            addListener: function addOnAlarmListener(fn){

            }
        }
    },
    runtime: {
        onMessage: {
            addListener: function addOnMessageListener(fn){
                // no-op
            }
        }
    },
    tabs: {
        update: function update(target, tab){
            assert(tab.hasOwnProperty('url'));
            assert.equal(assertions.update.url,tab.url);
        },
        create: function create(tab){
            assert(tab.hasOwnProperty('url'));
            assert.equal(assertions.create.url,tab.url);
        }
    }
};

global.chrome = chromeMock;
