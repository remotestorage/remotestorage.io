/**
 * sockethub-client 0.1
 *
 * © 2013 Niklas E. Cathor (https://github.com/nilclass)
 * © 2013 Nick Jennings (https://github.com/silverbucket)
 *
 * sockethub-client is dual-licensed under either the MIT License or GPLv3 (at your choice).
 * See the files LICENSE-MIT and LICENSE-GPL for details.
 *
 * The latest version of sockethub-client can be found here:
 *   git://github.com/sockethub/sockethub-client.git
 *
 * For more information about sockethub visit http://sockethub.org/.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */

/**
 * almond 0.1.4 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * This file is part of sockethub-client.
 *
 * © 2013 Niklas E. Cathor (https://github.com/nilclass)
 * © 2013 Nick Jennings (https://github.com/silverbucket)
 *
 * sockethub-client is dual-licensed under either the MIT License or GPLv3 (at your choice).
 * See the files LICENSE-MIT and LICENSE-GPL for details.
 *
 * The latest version of sockethub-client can be found here:
 *   git://github.com/sockethub/sockethub-client.git
 *
 * For more information about sockethub visit http://sockethub.org/.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */


(function(e,t){typeof define=="function"&&define.amd?define(t):e.SockethubClient=t()})(this,function(){var e,t,n;return function(r){function c(e,t){var n,r,i,s,o,u,f,l,c,h,p=t&&t.split("/"),d=a.map,v=d&&d["*"]||{};if(e&&e.charAt(0)==="."&&t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(l=0;l<e.length;l+=1){h=e[l];if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))break;l>0&&(e.splice(l-1,2),l-=2)}}e=e.join("/")}if((p||v)&&d){n=e.split("/");for(l=n.length;l>0;l-=1){r=n.slice(0,l).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=l;break}}}if(s)break;!u&&v&&v[r]&&(u=v[r],f=l)}!s&&u&&(s=u,o=f),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function h(e,t){return function(){return s.apply(r,l.call(arguments,0).concat([e,t]))}}function p(e){return function(t){return c(t,e)}}function d(e){return function(t){o[e]=t}}function v(e){if(u.hasOwnProperty(e)){var t=u[e];delete u[e],f[e]=!0,i.apply(r,t)}if(!o.hasOwnProperty(e))throw new Error("No "+e);return o[e]}function m(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=c(e.slice(0,i),t),e=e.slice(i+1),r=v(n),r&&r.normalize?e=r.normalize(e,p(t)):e=c(e,t)):e=c(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function g(e){return function(){return a&&a.config&&a.config[e]||{}}}var i,s,o={},u={},a={},f={},l=[].slice;i=function(e,t,n,i){var s,a,l,c,p,y=[],b;i=i||e;if(typeof n=="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(p=0;p<t.length;p+=1){c=m(t[p],i),a=c.f;if(a==="require")y[p]=h(e);else if(a==="exports")y[p]=o[e]={},b=!0;else if(a==="module")s=y[p]={id:e,uri:"",exports:o[e],config:g(e)};else if(o.hasOwnProperty(a)||u.hasOwnProperty(a))y[p]=v(a);else if(c.p)c.p.load(c.n,h(i,!0),d(a),{}),y[p]=o[a];else if(!f[a])throw new Error(e+" missing "+a)}l=n.apply(o[e],y);if(e)if(s&&s.exports!==r&&s.exports!==o[e])o[e]=s.exports;else if(l!==r||!b)o[e]=l}else e&&(o[e]=n)},e=t=s=function(e,t,n,o,u){return typeof e=="string"?v(m(e,t).f):(e.splice||(a=e,t.splice?(e=t,t=n,n=null):e=r),t=t||function(){},typeof n=="function"&&(n=o,o=u),o?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},15),s)},s.config=function(e){return a=e,s},n=function(e,t,n){t.splice||(n=t,t=[]),u[e]=[e,t,n]},n.amd={jQuery:!0}}(),n("vendor/almond",function(){}),n("sockethub/extend",[],function(){function e(t){var n=Array.prototype.slice.call(arguments,1);return n.forEach(function(n){for(var r in n)typeof n[r]=="object"&&typeof t[r]=="object"?e(t[r],n[r]):t[r]=n[r]}),t}return e}),function(){function e(t){function o(e){if(i){var t;if(e.fulfilled)try{t=[e.fulfilled.apply(null,s)]}catch(n){e.promise.reject(n);return}else t=s;t[0]&&typeof t[0].then=="function"?t[0].then(e.promise.fulfill,e.promise.reject):e.promise.fulfill.apply(null,t)}else if(e.rejected){var r;try{r=e.rejected.apply(null,s)}catch(n){e.promise.reject(n);return}r&&typeof r.then=="function"?r.then(e.promise.fulfill,e.promise.reject):e.promise.fulfill(r)}else e.promise.reject.apply(null,s)}function u(e,t){if(s){console.log("WARNING: Can't resolve promise, already resolved!");return}i=e,s=Array.prototype.slice.call(t),setTimeout(function(){var e=r.length;e===0&&!i;for(var t=0;t<e;t++)o(r[t]);r=undefined},0)}var n;typeof t=="function"&&setTimeout(function(){try{t(n)}catch(e){n.reject(e)}},0);var r=[],i,s;return n={then:function(t,n){var i={fulfilled:typeof t=="function"?t:undefined,rejected:typeof n=="function"?n:undefined,promise:e()};return s?setTimeout(function(){o(i)},0):r.push(i),i.promise},fulfill:function(){return u(!0,arguments),this},reject:function(){return u(!1,arguments),this}},n}typeof module!="undefined"?module.exports=e:typeof n=="function"?n("vendor/promising",[],function(){return e}):typeof window!="undefined"&&(window.promising=e)}(),n("sockethub/event_handling",[],function(){var e={on:function(e,t){this._validateEvent(e),this._handlers[e].push(t)},_emit:function(e){this._validateEvent(e);var t=Array.prototype.slice.call(arguments,1);this._handlers[e].forEach(function(e){e.apply(this,t)})},_validateEvent:function(e){if(!(e in this._handlers))throw"Unknown event: "+e},_delegateEvent:function(e,t){t.on(e,function(t){this._emit(e,t)}.bind(this))},_addEvent:function(e){this._handlers[e]=[]}};return function(t){var n=Array.prototype.slice.call(arguments,1);for(var r in e)t[r]=e[r];t._handlers={},n.forEach(function(e){t._addEvent(e)})}}),n("sockethub/client",["./extend","../vendor/promising","./event_handling"],function(e,t,n){var r=function(e,t){this.jsonClient=e,this.options=t,this._ridPromises={},n(this,"connected","disconnected","failed","message","unexpected-response","reconnecting","reconnected"),e.on("message",this._processIncoming.bind(this)),this._delegateEvent("connected",e),this._delegateEvent("disconnected",e),this._delegateEvent("failed",e),this._delegateEvent("reconnecting",e),this._delegateEvent("reconnected",e),this.__defineGetter__("connected",function(){return this.jsonClient.connected})};return r.prototype={declareVerb:function(t,n,r,i){this[t]=function(){var i=Array.prototype.slice.call(arguments),s=e({},r,{verb:t});n.forEach(function(e,t){var n=i[t],r=this._getDeepAttr(s,e);if(typeof r=="undefined"&&typeof n=="undefined")throw new Error("Expected a value for parameter "+e+", but got undefined!");this._setDeepAttr(s,e,n)}.bind(this));var o=i[n.length];return typeof o=="object"&&e(s,o),this.sendObject(s)},i&&(this[t]=i(this[t].bind(this)))},declareEvent:function(e){this._addEvent(e)},disconnect:function(){this.jsonClient.disconnect()},_ridCounter:0,sendObject:function(n){var r=t(),i=++this._ridCounter;return this._ridPromises[i]=r,n=e(n,{rid:i}),console.log("SEND",n),this.jsonClient.send(n),r},_getDeepAttr:function(e,t,n){var r=n||t.split("."),i=e[r.shift()];return r.length?this._getDeepAttr(i,undefined,r):i},_setDeepAttr:function(e,t,n,r){var i=r||t.split(".");i.length>1?this._setDeepAttr(e[i.shift()],undefined,n,i):e[i[0]]=n},_processIncoming:function(e){console.log(e.verb==="confirm"?"CONFIRM":"RECEIVE",e);var t=e.rid;if(typeof t!="undefined"){var n=this._ridPromises[t];if(n){if(e.verb==="confirm"){if(e.status)return;n.reject(e)}else"status"in e?n[e.status?"fulfill":"reject"](e):n.fulfill(e);delete this._ridPromises[t]}else this._emit("unexpected-response",e)}else this._emit("message",e)}},r}),n("sockethub/json_client",["./event_handling"],function(e){var t=function(t,n,r){this.uri=t,this.protocol=n,this.reconnect=r||!1,e(this,"message","connected","reconnecting","reconnected","disconnected","failed"),this.wsConnect()};return t.prototype={wsConnect:function(){this.socket=null,delete this.socket;var e=new WebSocket(this.uri,this.protocol);this.socket=e,this._listen()},send:function(e){this.socket.send(JSON.stringify(e))},disconnect:function(){this.socket.close()},_listen:function(){this.socket.onmessage=this._processMessageEvent.bind(this),this.connected=!1;var e=this;this.socket.onopen=function(){this.connected=!0,this.reconnecting?(this._emit("reconnected"),this.reconnecting=!1):this._emit("connected")}.bind(this),this.socket.onclose=function(){this.connected&&!this.reconnect?(console.log("sockethub-client disconnected, not reconnecting..."),this._emit("disconnected"),this.connected=!1):this.connected&&this.reconnect?(this._emit("reconnecting"),this.connected=!1,this.reconnecting=!0,console.log("sockethub-client disconnected, attempting reconnect..."),this.wsConnect()):this.reconnecting&&!this.connected?setTimeout(function(){console.log("sockethub-client attempting reconnect after 5s"),e.wsConnect()},5e3):this._emit("failed")}.bind(this)},_processMessageEvent:function(e){this._emit("message",JSON.parse(e.data))}},t}),n("sockethub/connect",["./extend","./json_client","./client"],function(e,t,n){var r=10550,i="/sockethub",s="sockethub",o=function(o,u){var a;typeof u!="object"&&(u={reconnect:!0}),typeof o=="string"&&!o.match(/wss?\:\/\//)&&(o={host:o});if(typeof o=="string")a=o;else{if(typeof o!="object")throw"SockethubClient.connect expects a URI, specified via a String or Object.";e(u,o);if(!u.host)throw"Required 'host' option not present";u.port||(u.port=r),u.path||(u.path=i),u.reconnect=typeof u.reconnect=="boolean"?u.reconnect:!0,a=(u.ssl?"wss":"ws")+"://"+u.host+":"+u.port+u.path}return new n(new t(a,s,u.reconnect),u)};return o}),n("sockethub/remoteStorage",[],function(){function t(t){t.defineModule("sockethub",e),t.access.claim("sockethub","rw");var n=t.getBearerToken();if(typeof n=="string"&&n.length>0){this.options.register||(this.options.register={});var r={};t.access.scopes.forEach(function(e){r[e]=t.access.get(e)});var i=t.getStorageInfo();i.type=String(i.type),this.options.register.remoteStorage={storageInfo:i,bearerToken:n,scope:r}}}var e=function(e,t){return e.declareType("config",{description:"sockethub config file",type:"object",properties:{host:{type:"string",description:"the hostname to connect to",format:"uri",required:!0},port:{type:"number",description:"the port number to connect to",required:!0},secret:{type:"string",description:"the secret to identify yourself with the sockethub server",required:!0}}}),{exports:{getConfig:function(){return e.getObject("config.json")},writeConfig:function(t){return e.storeObject("config","config.json",t)}}}};return t}),n("verbs/core",[],function(){var e=function(e){function t(){console.log("options passed to connect:",e.options),e.options.register&&(console.log("automatic registration!"),e.register(e.options.register))}e.declareVerb("ping",[],{platform:"dispatcher"},function(e){return function(t){return typeof t!="object"&&(t={}),typeof t.timestamp!="number"&&(t.timestamp=(new Date).getTime()),e(t).then(function(e){return e.offset=(new Date).getTime()-t.timestamp,e})}}),e.declareVerb("register",["object"],{platform:"dispatcher"},function(t){return function(){return e.registered&&(console.log("WARNING: already registered!"),console.trace()),t.apply(this,arguments).then(function(t){e.registered=t.status;if(!t.status)throw setTimeout(function(){e._emit("registration-failed",t)},0),"registration failed: "+t.message;return setTimeout(function(){e._emit("registered")},0),t})}}),e.registered=!1,e.declareEvent("registered"),e.declareEvent("registration-failed"),e.on("connected",t),e.on("reconnected",t),e.on("disconnected",function(){delete e.registered}),e.declareVerb("set",["target.platform","object"],{platform:"dispatcher",target:{}})};return e}),n("sockethub-client",["sockethub/client","sockethub/connect","sockethub/remoteStorage","verbs/core"],function(e,t,n,r){return e.connect=function(){var e=t.apply(this,arguments);return r(e),e},e.prototype.connectStorage=n,e}),t("sockethub-client")});
/**
 * guppy-irc
 *
 * © 2013 Nick Jennings - nick@silverbucket.net
 *
 * guppy-irc is licensed under the AGPLv3.
 * See the LICENSE file for details.
 *
 * The latest version of sockethub can be found here:
 *   git://github.com/silverbucket/guppy-irc.git
 *
 * For more information about sockethub visit:
 *   http://github.com/silverbucket/guppy-irc
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */

(function (window, undefined) {
  var app = 'guppy-irc';
  var document = window.document;
  var SockethubClient = window.SockethubClient;
  var instances = {}; // guppy-irc object instances

  if ((typeof SockethubClient === 'undefined') ||
      (typeof SockethubClient.connect === 'undefined')) {
    console.error(app + ' ERROR: SockethubClient object not found, be sure to include sockethub-client.js before guppy-irc.js.');
    return false;
  }

  /**
   * Function: md5
   * PRIVATE
   *
   * Generates an md5 hash of given string
   *
   * Parameters:
   *
   *   str - string to generate md5 hash of
   *
   * Returns:
   *
   *   md5hash'd string
   */
  var md5 = function(str) {
    //
    // http://www.myersdaily.org/joseph/javascript/md5.js
    //
    function md5cycle(x, k) {
      var a = x[0], b = x[1], c = x[2], d = x[3];

      a = ff(a, b, c, d, k[0], 7, -680876936);
      d = ff(d, a, b, c, k[1], 12, -389564586);
      c = ff(c, d, a, b, k[2], 17,  606105819);
      b = ff(b, c, d, a, k[3], 22, -1044525330);
      a = ff(a, b, c, d, k[4], 7, -176418897);
      d = ff(d, a, b, c, k[5], 12,  1200080426);
      c = ff(c, d, a, b, k[6], 17, -1473231341);
      b = ff(b, c, d, a, k[7], 22, -45705983);
      a = ff(a, b, c, d, k[8], 7,  1770035416);
      d = ff(d, a, b, c, k[9], 12, -1958414417);
      c = ff(c, d, a, b, k[10], 17, -42063);
      b = ff(b, c, d, a, k[11], 22, -1990404162);
      a = ff(a, b, c, d, k[12], 7,  1804603682);
      d = ff(d, a, b, c, k[13], 12, -40341101);
      c = ff(c, d, a, b, k[14], 17, -1502002290);
      b = ff(b, c, d, a, k[15], 22,  1236535329);

      a = gg(a, b, c, d, k[1], 5, -165796510);
      d = gg(d, a, b, c, k[6], 9, -1069501632);
      c = gg(c, d, a, b, k[11], 14,  643717713);
      b = gg(b, c, d, a, k[0], 20, -373897302);
      a = gg(a, b, c, d, k[5], 5, -701558691);
      d = gg(d, a, b, c, k[10], 9,  38016083);
      c = gg(c, d, a, b, k[15], 14, -660478335);
      b = gg(b, c, d, a, k[4], 20, -405537848);
      a = gg(a, b, c, d, k[9], 5,  568446438);
      d = gg(d, a, b, c, k[14], 9, -1019803690);
      c = gg(c, d, a, b, k[3], 14, -187363961);
      b = gg(b, c, d, a, k[8], 20,  1163531501);
      a = gg(a, b, c, d, k[13], 5, -1444681467);
      d = gg(d, a, b, c, k[2], 9, -51403784);
      c = gg(c, d, a, b, k[7], 14,  1735328473);
      b = gg(b, c, d, a, k[12], 20, -1926607734);

      a = hh(a, b, c, d, k[5], 4, -378558);
      d = hh(d, a, b, c, k[8], 11, -2022574463);
      c = hh(c, d, a, b, k[11], 16,  1839030562);
      b = hh(b, c, d, a, k[14], 23, -35309556);
      a = hh(a, b, c, d, k[1], 4, -1530992060);
      d = hh(d, a, b, c, k[4], 11,  1272893353);
      c = hh(c, d, a, b, k[7], 16, -155497632);
      b = hh(b, c, d, a, k[10], 23, -1094730640);
      a = hh(a, b, c, d, k[13], 4,  681279174);
      d = hh(d, a, b, c, k[0], 11, -358537222);
      c = hh(c, d, a, b, k[3], 16, -722521979);
      b = hh(b, c, d, a, k[6], 23,  76029189);
      a = hh(a, b, c, d, k[9], 4, -640364487);
      d = hh(d, a, b, c, k[12], 11, -421815835);
      c = hh(c, d, a, b, k[15], 16,  530742520);
      b = hh(b, c, d, a, k[2], 23, -995338651);

      a = ii(a, b, c, d, k[0], 6, -198630844);
      d = ii(d, a, b, c, k[7], 10,  1126891415);
      c = ii(c, d, a, b, k[14], 15, -1416354905);
      b = ii(b, c, d, a, k[5], 21, -57434055);
      a = ii(a, b, c, d, k[12], 6,  1700485571);
      d = ii(d, a, b, c, k[3], 10, -1894986606);
      c = ii(c, d, a, b, k[10], 15, -1051523);
      b = ii(b, c, d, a, k[1], 21, -2054922799);
      a = ii(a, b, c, d, k[8], 6,  1873313359);
      d = ii(d, a, b, c, k[15], 10, -30611744);
      c = ii(c, d, a, b, k[6], 15, -1560198380);
      b = ii(b, c, d, a, k[13], 21,  1309151649);
      a = ii(a, b, c, d, k[4], 6, -145523070);
      d = ii(d, a, b, c, k[11], 10, -1120210379);
      c = ii(c, d, a, b, k[2], 15,  718787259);
      b = ii(b, c, d, a, k[9], 21, -343485551);

      x[0] = add32(a, x[0]);
      x[1] = add32(b, x[1]);
      x[2] = add32(c, x[2]);
      x[3] = add32(d, x[3]);
    }

    function cmn(q, a, b, x, s, t) {
      a = add32(add32(a, q), add32(x, t));
      return add32((a << s) | (a >>> (32 - s)), b);
    }

    function ff(a, b, c, d, x, s, t) {
      return cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
      return cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
      return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
      return cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    function md51(s) {
      txt = '';
      var n = s.length,
          state = [1732584193, -271733879, -1732584194, 271733878], i;
      for (i=64; i<=s.length; i+=64) {
        md5cycle(state, md5blk(s.substring(i-64, i)));
      }
      s = s.substring(i-64);
      var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
      for (i=0; i<s.length; i++)
        tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
      tail[i>>2] |= 0x80 << ((i%4) << 3);
      if (i > 55) {
        md5cycle(state, tail);
        for (i=0; i<16; i++) tail[i] = 0;
      }
      tail[14] = n*8;
      md5cycle(state, tail);
      return state;
    }

    function md5blk(s) {
      var md5blks = [], i;
      for (i=0; i<64; i+=4) {
        md5blks[i>>2] = s.charCodeAt(i) +
                       (s.charCodeAt(i+1) << 8) +
                       (s.charCodeAt(i+2) << 16) +
                       (s.charCodeAt(i+3) << 24);
      }
      return md5blks;
    }

    var hex_chr = '0123456789abcdef'.split('');

    function rhex(n)
    {
      var s='', j=0;
      for(; j<4; j++)
        s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] +
             hex_chr[(n >> (j * 8)) & 0x0F];
      return s;
    }

    function hex(x) {
      for (var i=0; i<x.length; i++)
        x[i] = rhex(x[i]);
      return x.join('');
    }

    function md5(s) {
      return hex(md51(s));
    }

    function add32(a, b) {
      return (a + b) & 0xFFFFFFFF;
    }

    if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
      function add32(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
      }
    }

    return md5(str);
  };

  /**
   * Function: getSockethubClient
   * PRIVATE
   *
   * Gets the sockethub configuration from the attributes attached to the
   * passed in element. If there is no existing connection for this `uid` it
   * will attempt to connect and if successful, it is added it to the
   * connection lookup.
   *
   * Parameters:
   *
   *   cfg  - Guppy instances config.sockethub object
   *   cb   - function to callback with the connected sockethub client, or if
   *          there are any errors.
   *
   * Returns:
   *
   *   sockethub client object, or error message.
   *   cb(err, client);
   */
  var sockethubClients = {}; // index of sockethub client connection objects
  function getSockethubClient (sockethub, cb) {
    var log_id = app + ':' + sockethub.uid;
    var alreadyConnected = false; // if the registered event fires after a
                                  // reconnected, we don't want to call the cb()

    //
    // TODO
    // emit a message when events happen to the sockethub client so that
    // guppy instances can behave accordingly
    //
    if (sockethubClients[sockethub.uid]) {
      cb(null, sockethubClients[sockethub.uid]);
    } else {
      // no existing sockethub connection, so let's connect!
      var sockethubClient = SockethubClient.connect(sockethub.connectString, {
                              register: {
                                secret: sockethub.secret
                              }, reconnect: true
                            });

      sockethubClient.on('registered', function () {
        // connected and registered to sockethub
        if (!alreadyConnected) {
          sockethubClients[sockethub.uid] = sockethubClient;
          alreadyConnected = true;
          cb(null, sockethubClients[sockethub.uid]);
        }
      });

      sockethubClient.on('failed', function (err) {
        if (!err) { err = ''; }
        cb('connection to sockethub failed. ' + err);
      });

      sockethubClient.on('disconnected', function () {
        console.log(log_id + ' Sockethub disconnected');
      });
    }
  }

  /**
   * Function: getGuppyConfig
   * PRIVATE
   *
   * Compiles the Guppy config paramaters from the passed in DOM element.
   *
   * Parameters:
   *
   *
   *   e  - dom element containing guppy configuration attributes
   *
   * Returns:
   *
   *   config object
   */
  function getGuppyConfig(e, cfg) {
    if (typeof cfg !== 'object') {
      cfg = {};
    }
    cfg.id = cfg.id || e.id || 'UndefinedID';
    cfg.title = cfg.title || e.getAttribute('data-title');
    cfg.width = cfg.width || e.getAttribute('data-width');
    cfg.height = cfg.height || e.getAttribute('data-height');
    cfg.server = cfg.server || e.getAttribute('data-server') || 'irc.freenode.net';
    cfg.channel = cfg.channel || e.getAttribute('data-channel') || '#sockethub';
    cfg.nick = cfg.nick || e.getAttribute('data-nick') || 'guppy_user';
    cfg.renderWidget = cfg.renderWidget || e.getAttribute('data-render-widget');
    cfg.enableNickChange = cfg.enableNickChange || e.getAttribute('data-enable-nick-change');
    cfg.enableNickChangeButton = cfg.enableNickChangeButton || e.getAttribute('data-enable-nick-change-button');
    cfg.enableMessageButton = cfg.enableMessageButton || e.getAttribute('data-enable-message-button');
    cfg.enableHistory = cfg.enableHistory || e.getAttribute('data-enable-history');
    cfg.enableUserList= cfg.enableUserList || e.getAttribute('data-enable-user-list');
    cfg.displayName = cfg.displayName || e.getAttribute('data-display-name') || 'Guppy User';
    cfg.password = cfg.password || e.getAttribute('data-password');
    cfg.autoconnect = cfg.autoconnect || e.getAttribute('data-autoconnect');


    //
    // check for preset IDs for components
    //
    cfg.definedElements = {};
    cfg.definedElements.infoContainer =  document.getElementById(cfg.id + '-info');
    cfg.definedElements.userListContainer =  document.getElementById(cfg.id + '-user-list-container');
    cfg.definedElements.controlsContainer =  document.getElementById(cfg.id + '-controls');
    cfg.definedElements.messageInput =  document.getElementById(cfg.id + '-message-input');
    cfg.definedElements.messageSubmitButton =  document.getElementById(cfg.id + '-message-submit-button');
    cfg.definedElements.messagesContainer=  document.getElementById(cfg.id + '-messages-container');
    cfg.definedElements.nickChangeInput =  document.getElementById(cfg.id + '-nick-change-input');
    cfg.definedElements.nickChangeSubmitButton =  document.getElementById(cfg.id + '-nick-change-submit-button');

    //
    // set boolean flags
    //
    cfg.renderWidget  = (cfg.renderWidget === 'false') ? false : true;
    cfg.autoconnect = (cfg.autoconnect === 'true') ? true : false;
    cfg.enableNickChange = (cfg.enableNickChange === 'false') ? false : true;
    cfg.enableNickChangeButton = (cfg.enableNickChangeButton === 'false') ? false : true;
    cfg.enableMessageButton = (cfg.enableMessageButton === 'false') ? false : true;
    cfg.enableHistory = (cfg.enableHistory === 'false') ? false : true;
    cfg.enableUserList = (cfg.enableUserList === 'false') ? false : true;

    if ((typeof cfg.password === 'string') && (cfg.password === '')) {
      cfg.password = undefined;
    }

    // sockethub config
    cfg.sockethub = (typeof cfg.sockethub === 'object') ? cfg.sockethub : {};
    cfg.sockethub.host = cfg.sockethub.host || e.getAttribute('data-sockethub-host');
    cfg.sockethub.port = cfg.sockethub.port || e.getAttribute('data-sockethub-port');
    cfg.sockethub.tls = cfg.sockethub.tls || e.getAttribute('data-sockethub-tls');
    cfg.sockethub.path = cfg.sockethub.path || e.getAttribute('data-sockethub-path');
    cfg.sockethub.secret = cfg.sockethub.secret || e.getAttribute('data-sockethub-secret');
    if (cfg.sockethub.tls === 'true') {
      cfg.sockethub.tls = true;
      cfg.sockethub.connectString = 'wss://';
    } else {
      cfg.sockethub.tls = false;
      cfg.sockethub.connectString = 'ws://';
    }
    cfg.sockethub.connectString = cfg.sockethub.connectString +
                                  cfg.sockethub.host + ':' +
                                  cfg.sockethub.port + cfg.sockethub.path;
    cfg.sockethub.uid = cfg.sockethub.connectString + cfg.sockethub.secret;

    return cfg;
  }

  /**
   * Function: generateUniqueNick
   * PRIVATE
   *
   * Checks localStorage for an existing UID number, then generates the SID
   * based on a hash of the UID + sockethub host (so you don't try to connect
   * with the same session but different host).
   *
   * Finally it trims the SID down to fit alongside the nick
   * (IRC has a 16char limit)
   *
   * Parameters:
   *
   *   cfg - Guppy instances cfg object
   *   key - string indicating this specific app+widget
   *
   * Returns:
   *
   *   UniqueNick string
   */
  function generateUniqueNick(cfg, key) {
    key = key + '-uid';
    var uid = window.localStorage.getItem(key);
    if (!uid) {
      // generate random number
      uid = Math.floor((Math.random() * 99999) + 10000);
      window.localStorage.setItem(key, uid);
    }

    var sid = md5(uid + cfg.sockethub.uid);
    var idSpace =  16 - cfg.nick.length;
    var u_nick = cfg.nick + sid.substr(sid.length - idSpace);

    return u_nick;
  }

  /**
   * Contructor: Guppy
   * PRIVATE
   *
   * Creates a guppy object complete with sockethub client, and handles all
   * user interface and message passing.
   *
   * Parameters:
   *
   *   e - a single guppy-irc DOM element, containing settings as attributes
   *
   * Returns:
   *
   *   Guppy instance
   */
  var Guppy = function (e, cfg) {
    var self = this;
    self.setState('initializing');
    self.config = getGuppyConfig(e, cfg);
    self.id = self.config.id;
    self.log_id = app + '#' + self.id;
    self.DOMElements = {};
    self.DOMElements.original = e;

    // make sure each user is unique
    self.config.nick = self.getNick() || generateUniqueNick(self.config, self.log_id);

    console.log('NEW GUPPY ' + self.id + ' nick: ' + self.config.nick + ' :', self.config);

    //
    // after we've connected to sockethub, initIRC handles the credentials and
    // registering of the sockethub irc platform.
    function initIRC(err, sc) {
      // got sockethub client object (sc)
      if (err) {
        self.setError(err);
        return;
      } else {
        self.sockethubClient = sc;
      }

      function joinRooms() {
        // set our credentials for the sockethub platform
        // (does not activate the IRC session, just stores the data)
        self.actor = {
          address: self.config.nick,
          name: self.config.displayName
        };

        sc.sendObject({
          platform: 'irc',
          verb: 'set',
          actor: self.actor,
          object: {
            objectType: 'credentials',
            nick: self.config.nick,
            password: self.config.password,
            server: self.config.server,
          }
        }).then(function () {
          // successful set credentials
          console.log(self.log_id + ' set credentials!');
          return sc.sendObject({
            verb: 'join',
            platform: 'irc',
            actor: self.actor,
            target: [{ address: self.config.channel }]
          });
        }).then(function () {
          console.log(self.log_id + ' connected to ' + self.config.channel);
          self.displaySystemMessage('status', 'connected to ' + self.config.server);
                                              //' on channel ' + self.config.channel);
          self.setState('connected');

          return sc.sendObject({
            verb: 'observe',
            platform: 'irc',
            actor: self.actor,
            target: [{
              address: self.config.channel
            }],
            object: {
              objectType: 'attendance'
            }
          });
        }, function (err) {
          // error setting credentials
          self.setError(err.message, 'Sockethub Error: ' + err);
        });
      }
      joinRooms();

      sc.on('message', function (m) {
        if (m.platform !== 'irc') {
          console.log("SC received object for unkown platform: ", m);
          return;
        } else if ((typeof m.status === 'boolean') && (!m.status)) {
          console.log("SC received error: ", m);
          self.displaySystemMessage('error', m.message);
          return;
        }

        switch (m.verb) {
          case 'send':
            //console.log("SC received message: ", m);
            self.displayMessage(m);
            break;
          case 'join':
            if (m.actor.address) {
              self.displaySystemMessage('status', m.actor.address + ' has joined ' + m.target[0].address);
            }
            self.populateUserList(null, [m.actor.address]);
            break;
          case 'leave':
            self.displaySystemMessage('status', m.actor.address + ' has left ' + m.target[0].address);
            self.populateUserList(null, [m.actor.address]);
            break;
          case 'update':
            switch (m.object.objectType) {
              case 'topic':
                self.displaySystemMessage('status', m.actor.address + ' has set the topic of ' + m.target[0].address + ' to: ' + m.object.topic);
                break;
              case 'address':
                if (m.actor.address === self.config.nick) {
                  self.setNick(m.target[0].address);
                }
                self.populateUserList([m.actor.address], [m.target[0].address]);
                self.displaySystemMessage('status', m.actor.address + ' is now known as ' + m.target[0].address);
                break;
              default:
                console.log('SC unknown update received: ', m);
            }
            break;
          case 'observe':
            switch (m.object.objectType) {
              case 'attendance':
                //self.displaySystemMessage('status', 'users: ' + m.object.members.join(', '));
                self.populateUserList(null, m.object.members);
                break;
              default:
                console.log('SC unknown observe received: ', m);
            }
            break;
          default:
            console.log("SC received unkown message: ", m);
        }
      });

      sc.on('reconnecting', function () {
        self.displaySystemMessage('error', 'disconnected from sockethub... attempting to reconnect.');
      });

      sc.on('reconnected', function () {
        self.displaySystemMessage('status', 'reconnected to sockethub.');
        joinRooms();
      });

    }

    //
    // decide if we connect to IRC now, or later.
    if (self.config.autoconnect) {
      getSockethubClient(self.config.sockethub, initIRC);
    } else {
      // TODO: wait for 'connect' signal
      // .. then ...
      // getSockethubClient(e, initIRC);
    }

    //
    // do all the ugly DOM stuff.
    self.buildWidget();

    self.displaySystemMessage('status', 'connecting to ' + self.config.server + ' ...', true);


    /******************
    / REGISTER EVENTS
    *******************/
    //
    // listen for input submition text
    function onInput(event) {
      event.which = event.which || event.keyCode;
      if ((event.which === 13) ||
         (event.type === 'click')) {
        //console.log('got enter!!', event);
        // send message
        self.DOMElements.messageInput.disabled = true;
        var text = self.DOMElements.messageInput.value;
        self.DOMElements.messageInput.value = '';
        self.sendMessage(text);
        self.DOMElements.messageInput.disabled = false;
      }
    }
    self.DOMElements.messageInput.addEventListener('keyup', onInput);
    self.DOMElements.messageSubmit.addEventListener('click', onInput);

    //
    // listen for nickchange submition
    function onNickChange(event) {
      event.which = event.which || event.keyCode;
      if ((event.which === 13) ||
         (event.type === 'click')) {
        //console.log('got enter!!', event);
        if (nick === self.actor.address) {
          // nothing to change
          return;
        }
        // send message
        self.DOMElements.nickChangeInput.disabled = true;
        var nick = self.DOMElements.nickChangeInput.value;
        self.changeNick(nick);
        self.DOMElements.nickChangeInput.disabled = false;
      }
    }
    if ((this.config.enableNickChange) &&
        (self.DOMElements.nickChangeInput) &&
        (self.DOMElements.nickChangeSubmit)) {
      self.DOMElements.nickChangeInput.addEventListener('keyup', onNickChange);
      self.DOMElements.nickChangeSubmit.addEventListener('click', onNickChange);
    }

    return this;
  };

  /**
   * Function: getNick
   *
   * retreives previously used nickname from localStorage
   *
   * Returns:
   *
   *   string
   */
  Guppy.prototype.getNick = function () {
    var key = self.log_id + '-nick';
    var nick = window.localStorage.getItem(key);
    return nick;
  };

  /**
   * Function: setNick
   *
   * stores specified nickname to localstorage
   *
   * Parameters:
   *
   *   nick - nickname
   *
   */
  Guppy.prototype.setNick = function (nick) {
    var key = self.log_id + '-nick';
    if (nick) {
      this.actor.address = nick;
      this.config.nick = nick;
      window.localStorage.setItem(key, nick);
    }
  };

  /**
   * Function: writeToMessageContainer
   *
   * Takes a <p> element and appends it to the messageContainer div, keeping
   * in mind things like autoscroll behavior.
   *
   * Parameters:
   *
   *   ml - <p> element (message line)
   *   systemMessage - boolean indicating if this is a system message or not
   *   jumpToBottom - boolean to force the focus back to bottom (default: false)
   *
   */
  Guppy.prototype.writeToMessageContainer = function (ml, systemMessage, jumpToBottom) {
    //
    // only autoscroll if the user is not scrolling up in the history, because
    // that would be irritating, wouldn't it?
    //
    // Subtract height of window from scrollHeight, and if the result doesn't
    // match with scrollTop, then we know the user is viewing the buffer.
    var autoScroll = true;
    if ((!jumpToBottom) &&
        (this.DOMElements.messagesContainer.scrollTop !== (this.DOMElements.messagesContainer.scrollHeight - this.config.height))) {
      autoScroll = false;
    }
    this.DOMElements.messagesContainer.appendChild(ml);
    if (autoScroll) {
      this.DOMElements.messagesContainer.scrollTop = this.DOMElements.messagesContainer.scrollHeight;
    }

    if ((this.config.enableHistory) && (!systemMessage)) {
      // store output to localStorage for page refreshes
      console.log(this.log_id + ' storing to history buffer ', ml);
      var key = this.log_id + '-messages-container';
      window.localStorage.setItem(key, this.DOMElements.messagesContainer.innerHTML);
    }
  };

  /**
   * Function: displaySystemMessage
   *
   * Displays a Guppy system message to the message area
   *
   * Parameters:
   *
   *   type - 'error', 'status'
   *   text - text string to display
   *   jumpToBottom - boolean to force the focus back to bottom (default: false)
   *
   */
  Guppy.prototype.displaySystemMessage = function (type, text, jumpToBottom) {
    var messageLine = document.createElement('p');
    if (type === 'error') {
      messageLine.className = 'guppy-irc-error-line guppy-irc-' + this.config.id + '-error-line';
      messageLine.innerHTML = 'ERROR: ' + text;
      console.error('ERROR: ' + text);
    } else {
      messageLine.className = 'guppy-irc-status-line guppy-irc-' + this.config.id + '-status-line';
      messageLine.innerHTML = text;
    }
    this.writeToMessageContainer(messageLine, true, jumpToBottom);
  };

  /**
   * Function: displayMessage
   *
   * Builds a message line with a sockethub activity streams object, and then
   * adds it to the message container div.
   *
   * Parameters:
   *
   *   obj - sockethub activity stream object of verb 'send' and platform 'irc'.
   *         ( tip: this function only uses the obj.actor.address,
   *                obj.actor.name, and obj.object.text properties )
   *   jumpToBottom - boolean to force the focus back to bottom (default: false)
   *
   */
  Guppy.prototype.displayMessage = function (obj, jumpToBottom) {
    // check if my nick is mentioned
    var toMeClassEnding = '-to-me';
    isToMe = false;
    if ((typeof obj.object.text === 'string') && (obj.object.text.search(this.config.nick) >= 0)) {
      isToMe = true;
    }

    var nick = document.createElement('span');
    nick.className = 'guppy-irc-message-nick guppy-irc-' + this.config.id + '-message-nick';
    if (isToMe) { // if this message has my nick, we add some more classes
      nick.className += ' guppy-irc-message-nick' + toMeClassEnding +
                        ' guppy-irc-' + this.config.id + '-message-nick' + toMeClassEnding;
    }
    nick.innerHTML = obj.actor.address;

    var decorator = document.createElement('span');
    decorator.className = 'guppy-irc-message-nick-decorator guppy-irc-' + this.config.id  + '-message-nick-decorator';
    if (isToMe) { // if this message has my nick, we add some more classes
      decorator.className += ' guppy-irc-message-nick-decorator' + toMeClassEnding +
                             ' guppy-irc-' + this.config.id + '-message-nick-decorator' + toMeClassEnding;
    }
    decorator.innerHTML = ":";

    var text = document.createElement('span');
    text.className = 'guppy-irc-message-text guppy-irc-' + this.config.id  + '-message-text';
    if (isToMe) { // if this message has my nick, we add some more classes
      text.className += ' guppy-irc-message-text' + toMeClassEnding +
                        ' guppy-irc-' + this.config.id + '-message-text' + toMeClassEnding;
    }
    text.innerHTML = obj.object.text;

    var messageLine = document.createElement('p');
    messageLine.className = 'guppy-irc-message-line guppy-irc-' + this.config.id + '-message-line';
    if (isToMe) { // if this message has my nick, we add some more classes
      messageLine.className += ' guppy-irc-message-line' + toMeClassEnding +
                               ' guppy-irc-' + this.config.id + '-message-line' + toMeClassEnding;
    }
    messageLine.innerHTML = nick.outerHTML + decorator.outerHTML + text.outerHTML;
    this.writeToMessageContainer(messageLine, false, jumpToBottom);
  };

  /**
   * Function: sendMessage
   *
   * Sends a message to Sockethub's IRC platform, and displays it in the textarea
   * console when successful.
   *
   * Parameters:
   *
   *   message - text string of message to send (just text string, no meta data)
   *
   */
  Guppy.prototype.sendMessage = function (message) {
    var self = this;
    if (!message) {
      return false;
    }
    var obj = {
      verb: 'send',
      platform: 'irc',
      actor: self.actor,
      target: [{
        address: self.config.channel
      }],
      object: {
        text: message
      }
    };

    message = message.replace(/^\s+|\s+$/g, "");

    console.log('sendMessage called: ', obj);
    if (!self.sockethubClient) {
      self.displaySystemMessage('error', 'cannot send message, not connected to sockethub');
      return;
    }
    self.sockethubClient.sendObject(obj).then(function () {
      // completed
      // add name to message output
      self.displayMessage({
        actor: {
          address: self.actor.address,
          name: self.actor.name
        },
        object: {
          text: message
        }
      });
    }, function (err) {
      // error
      self.setError(err.message, err);
    });
  };

  /**
   * Function: changeNick
   *
   * Sends a message to Sockethub's IRC platform to change users nick.
   *
   * Parameters:
   *
   *   nick - text string of nickname to change to.
   *
   */
  Guppy.prototype.changeNick = function (nick) {
    var self = this;
    if (!nick) {
      return false;
    }
    self.DOMElements.messageInput.disabled = true;

    var obj = {
      verb: 'update',
      platform: 'irc',
      actor: self.actor,
      target: [{
        address: nick
      }],
      object: {
        objectType: 'address'
      }
    };

    console.log('changeNick called: ', obj);
    self.sockethubClient.sendObject(obj).then(function () {
      // completed
      //self.displaySystemMessage('status', self.actor.address + ' changed nick to ' + nick);
      console.log('changeNick return as success: ', obj);
      console.log('SELF: ', self);
      self.setNick(nick);
      self.DOMElements.messageInput.disabled = false;
    }, function (err) {
      console.log('changeNick return as error: ', err);
      // error
      self.setError(err.message, err);
      self.DOMElements.messageInput.disabled = false;
    });
  };

  /**
   * Function: setError
   *
   * Handles logging the error and setting the objects state.
   *
   * Parameters:
   *
   *   err - error message
   *   obj - option error object, if applicable
   *
   */
  Guppy.prototype.setError = function (err, obj) {
    if (typeof obj === 'object') {
      console.log(this.log_id + ' ERROR: ' + err, obj);
    } else {
      console.log(this.log_id + ' ERROR: ' + err);
    }

    this.errMsg = err;
    this.setState('error');
    this.displaySystemMessage('error', err);
  };

  /**
   * Function: setState
   *
   * Handles setting and emitting the objects state.
   *
   * Parameters:
   *
   *   state - string describing state. valid strings:
   *           'initializing', 'error', 'connected', 'disconnected'
   *
   */
  Guppy.prototype.setState = function (state) {
    // TODO: switch to emitters
    this.state = state;
  };

  var userList = [];
  Guppy.prototype.populateUserList = function (rem, add) {
    if (!this.config.enableUserList) {
      return false;
    }
    var i = 0,
        j = 0,
        u = userList;

    rem = (rem) ? rem : [];
    add = (add) ? add : [];

    console.log('rem: ', rem);
    console.log('add: ', add);
    // remove
    for (i = 0, len = rem.length; i < len; i = i + 1) {
      u = u.filter(function (item) {
        return item !== rem[i];
      });
    }

    // add
    for (i = 0, len = add.length; i < len; i = i + 1) {
      var exists = false;
      for (j = 0, jlen = u.length; j < jlen; j = j + 1) {
        if (add[i] === u[j]) {
          exists = true;
        }
      }

      if (!exists) {
        console.log('adding '+add[i]);
        u.push(add[i]);
      }
    }

    userList = u;
    console.log('USER LIST: ', u);
    console.log('USER LIST CONTAINER: ', this.DOMElements.userListContainer.innerHTML);
    this.DOMElements.userListContainer.innerHTML = '';
    for (j = 0, jlen = u.length; j < jlen; j = j + 1) {
      var userListEntry = document.createElement('p');
      userListEntry.className = 'guppy-irc-user-list-entry guppy-irc-' + this.config.id + '-user-list-entry';
      userListEntry.innerHTML = u[j];
      this.DOMElements.userListContainer.appendChild(userListEntry);
    }

  };

  /**
   * Function: buildWidget
   *
   * Handles all of the DOM drawing of elements withing the Guppy widget.
   * messages area, input, send button, connection info, etc.
   *
   */
  Guppy.prototype.buildWidget = function () {
    var e = this.DOMElements.original;

    // encapsulating container
    var container;
    if (this.config.renderWidget) {
      container = document.createElement('div');
      container.className = 'guppy-irc-container guppy-irc-' + this.config.id + '-container';

      // title of widget
      if (this.config.title) {
        var title = document.createElement('h1');
        title.className = 'guppy-irc-title guppy-irc-' + this.config.id + '-title';
        title.innerHTML = this.config.title;
        var titleContainer = document.createElement('div');
        titleContainer.className = 'guppy-irc-title-container guppy-irc-' + this.config.id + '-title-container';
        titleContainer.appendChild(title);
        container.appendChild(titleContainer); // put inside container
      }
    }


    //
    //
    // connection information
    //
    // info container
    //
    // - declare in this scope so we can attach to dom lookup (below)
    var infoContainer, nickChangeInput, nickChangeSubmit, nickChangeInputContainer;
    if (this.config.definedElements.infoContainer) {
      // allow the user to use their own defined locations for components
      infoContainer = this.config.infoContainer;
    } else if (this.config.renderWidget) {
      infoContainer = document.createElement('div');
      infoContainer.className = 'guppy-irc-info-container guppy-irc-info-' + this.config.id + '-container';
    }

    if (this.config.definedElements.nickChangeInput) {
      nickChangeInput = this.config.definedElments.nickChangeInput;
    } else if ((this.config.renderWidget) && (this.config.enableNickChange)) {
      // nick change input
      nickChangeInput = document.createElement('input');
      nickChangeInput.value = this.config.nick;
      nickChangeInput.className = 'guppy-irc-nick-change-input guppy-irc-' + this.config.id + '-nick-change-input';
      nickChangeInputContainer = document.createElement('div');
      nickChangeInputContainer.className = 'guppy-irc-nick-change-input-container guppy-irc-' + this.config.id + '-nick-change-input-container';
      nickChangeInputContainer.appendChild(nickChangeInput);
    }

    if (this.config.definedElements.nickChangeSubmitButton) {
      nickChangeSubmitButton = this.config.definedElments.nickChangeSubmitButton;
    } else if ((this.config.renderWidget) && (this.config.enableNickChange)) {
      // nick change submit button
      nickChangeSubmit = document.createElement('input');
      nickChangeSubmit.className = 'guppy-irc-nick-change-submit-button guppy-irc-' + this.config.id + '-nick-change-submit-button';
      nickChangeSubmit.type = 'submit';
      nickChangeSubmit.name = 'Change';
      nickChangeSubmit.value = 'Change';
      nickChangeSubmit.id = 'guppy-irc-' + this.config.id + '-nick-change-submit-button';
      var nickChangeSubmitContainer = document.createElement('div');
      nickChangeSubmitContainer.className = 'guppy-irc-nick-change-submit-button-container guppy-irc-' + this.config.id + '-nick-change-submit-button-container';
      nickChangeSubmitContainer.appendChild(nickChangeSubmit);

      if (! this.config.enableNickChangeButton) {
        nickChangeInputContainer.style.width = "100%";
        nickChangeInput.style.width = "100%";
        nickChangeSubmit.style.display = 'none';
        nickChangeSubmitContainer.style.display = 'none';
      }

      infoContainer.appendChild(nickChangeInputContainer);
      infoContainer.appendChild(nickChangeSubmitContainer);
    }
    if ((this.config.renderWidget) && (!this.config.definedElements.infoContainer)) {
      container.appendChild(infoContainer);
    }


    //
    //
    // middle container
    //
    var middleContainer;
    if (this.config.renderWidget) {
      middleContainer  = document.createElement('div');
      middleContainer.className = 'guppy-irc-middle-container guppy-irc-' + this.config.id + '-middle-container';
    }

    //
    //
    // message area container
    //
    var messagesContainer;
    if (this.config.definedElements.messagesContainer) {
      messagesContainer = this.config.definedElements.messagesContainer;
    } else if (this.config.renderWidget) {
      messagesContainer = document.createElement('div');
      messagesContainer.className = 'guppy-irc-messages-container guppy-irc-' + this.config.id + '-messages-container';
      if (this.config.width) {
        messagesContainer.style.width = this.config.width + 'px';
      }
      if (this.config.height) {
        messagesContainer.style.height = this.config.height + 'px';
      }
      middleContainer.appendChild(messagesContainer);
    }

    //
    //
    // user list container
    //
    var userListContainer;
    if (this.config.definedElements.userListContainer) {
      // allow the user to use their own defined locations for components
      userListContainer = this.config.userListContainer;
    } else if ((this.config.renderWidget) && (this.config.enableUserList)) {
      //
      // user list
      //
      userListContainer = document.createElement('div');
      userListContainer.className = 'guppy-irc-user-list-container guppy-irc-' + this.config.id + '-user-list-container';

      if (!this.config.definedElements.userListContainer) {
        if (this.config.height) {
          userListContainer.style.height = this.config.height + 'px';
        }
        middleContainer.appendChild(userListContainer);
      }
    }

    //
    if (this.config.renderWidget) {
      container.appendChild(middleContainer);
    }

    //
    //
    // message controls
    //
    // message input
    var messageInput, messageInputContainer;
    if (this.config.definedElements.messageInput) {
      messageInput = this.config.definedElements.messageInput;
    } else {
      messageInput = document.createElement('textarea');
      messageInput.className = 'guppy-irc-message-input guppy-irc-' + this.config.id + '-input';
      messageInputContainer = document.createElement('div');
      messageInputContainer.className = 'guppy-irc-message-input-container guppy-irc-' + this.config.id + '-message-input-container';
      messageInputContainer.appendChild(messageInput);
    }

    // message submit button
    var messageSubmit, messageSubmitContainer;
    if (this.config.definedElements.messageSubmitButton) {
      messageSubmit = this.config.definedElements.messageSubmitButton;
    } else {
      messageSubmit = document.createElement('input');
      messageSubmit.className = 'guppy-irc-message-submit-button guppy-irc-' + this.config.id + '-message-submit-button';
      messageSubmit.type = 'submit';
      messageSubmit.name = 'Send';
      messageSubmit.value = 'Send';
      messageSubmit.id = 'guppy-irc-' + this.config.id + '-message-submit-button';
      messageSubmitContainer = document.createElement('div');
      messageSubmitContainer.className = 'guppy-irc-message-submit-button-container guppy-irc-' + this.config.id + '-message-submit-button-container';

      if (! this.config.enableMessageButton) {
        messageInputContainer.style.width = "100%";
        messageInput.style.width = "100%";
        messageSubmitContainer.style.display = 'none';
      }
      messageSubmitContainer.appendChild(messageSubmit);
    }

    //
    // controls - contain input and submit button
    //
    if (!this.config.definedElements.messageInput) {
      var controlsContainer;
      if (this.config.definedElements.controlsContainer) {
        // allow the user to use their own defined locations for components
        controlsContainer = this.config.controlsContainer;
      } else {
        controlsContainer = document.createElement('div');
      }
      controlsContainer.className = 'guppy-irc-controls-container guppy-irc-' + this.config.id + '-controls-container';
      controlsContainer.appendChild(messageInputContainer);
      controlsContainer.appendChild(messageSubmitContainer);
      if (!this.config.definedElements.controlsContainer) {
        container.appendChild(controlsContainer);
      }
    }

    this.DOMElements.widget = container;
    this.DOMElements.nickChangeInput = nickChangeInput;
    this.DOMElements.nickChangeSubmit = nickChangeSubmit;
    this.DOMElements.messageInput = messageInput;
    this.DOMElements.messageSubmit = messageSubmit;
    this.DOMElements.messagesContainer = messagesContainer;
    this.DOMElements.userListContainer = userListContainer;

    //
    // load history buffer if enabled
    if (this.config.enableHistory) {
      // check for existing history
      var historyContainer = document.createElement('div');
      historyContainer.className = 'guppy-irc-messages-history-container guppy-irc-' + this.config.id + '-messages-history-container';
      var key = this.log_id + '-messages-container';
      var history = window.localStorage.getItem(key);
      if (history) {
        historyContainer.innerHTML = history;
      }
      try {
        historyContainer.firstChild.firstChild.firstChild.firstChild.
                         firstChild.firstChild.firstChild.innerHTML = '';
      } catch (err) {
        // ignore...
      }
      this.DOMElements.historyContainer = historyContainer;

      // we call the method instead of appending directly so the scroll buffer
      // adjusts
      this.writeToMessageContainer(historyContainer, true, true);
    }

    if (this.config.renderWidget) {
      e.parentNode.replaceChild(container, e);
    }
  };

  window.guppyIRC = {
    instances: instances
  };

  function create (elem, cfg) {
    try {
      var guppy = new Guppy(elem, cfg);
      window.guppyIRC.instances[guppy.id] = guppy;
    } catch (e) {
      console.log(app + ' ERROR: ' + e, e.stack);
    }
  }

  window.guppyIRC.create = function (cfg) {
    var stub = {
      getAttribute: function () {
        return '';
      }
    };
    create(stub, cfg);
  };

  var tags = document.getElementsByTagName('guppy-irc');
  // foreach tag we create a separate object instance, this way multiple embeds
  // are supported on the same page.
  for (var i = 0, len = tags.length; i < len; i = i + 1) {
    console.log('Guppy tag: '+i, tags[i]);
    create(tags[i], {});
  }




})(window);



$('.guppy-irc-submit-button').addClass('btn btn-primary');
