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


(function(e,t){typeof define=="function"&&define.amd?define(t):e.SockethubClient=t()})(this,function(){var e,t,n;return function(r){function c(e,t){var n,r,i,s,o,u,f,l,c,h,p=t&&t.split("/"),d=a.map,v=d&&d["*"]||{};if(e&&e.charAt(0)==="."&&t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(l=0;l<e.length;l+=1){h=e[l];if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))break;l>0&&(e.splice(l-1,2),l-=2)}}e=e.join("/")}if((p||v)&&d){n=e.split("/");for(l=n.length;l>0;l-=1){r=n.slice(0,l).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=l;break}}}if(s)break;!u&&v&&v[r]&&(u=v[r],f=l)}!s&&u&&(s=u,o=f),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function h(e,t){return function(){return s.apply(r,l.call(arguments,0).concat([e,t]))}}function p(e){return function(t){return c(t,e)}}function d(e){return function(t){o[e]=t}}function v(e){if(u.hasOwnProperty(e)){var t=u[e];delete u[e],f[e]=!0,i.apply(r,t)}if(!o.hasOwnProperty(e))throw new Error("No "+e);return o[e]}function m(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=c(e.slice(0,i),t),e=e.slice(i+1),r=v(n),r&&r.normalize?e=r.normalize(e,p(t)):e=c(e,t)):e=c(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function g(e){return function(){return a&&a.config&&a.config[e]||{}}}var i,s,o={},u={},a={},f={},l=[].slice;i=function(e,t,n,i){var s,a,l,c,p,y=[],b;i=i||e;if(typeof n=="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(p=0;p<t.length;p+=1){c=m(t[p],i),a=c.f;if(a==="require")y[p]=h(e);else if(a==="exports")y[p]=o[e]={},b=!0;else if(a==="module")s=y[p]={id:e,uri:"",exports:o[e],config:g(e)};else if(o.hasOwnProperty(a)||u.hasOwnProperty(a))y[p]=v(a);else if(c.p)c.p.load(c.n,h(i,!0),d(a),{}),y[p]=o[a];else if(!f[a])throw new Error(e+" missing "+a)}l=n.apply(o[e],y);if(e)if(s&&s.exports!==r&&s.exports!==o[e])o[e]=s.exports;else if(l!==r||!b)o[e]=l}else e&&(o[e]=n)},e=t=s=function(e,t,n,o,u){return typeof e=="string"?v(m(e,t).f):(e.splice||(a=e,t.splice?(e=t,t=n,n=null):e=r),t=t||function(){},typeof n=="function"&&(n=o,o=u),o?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},15),s)},s.config=function(e){return a=e,s},n=function(e,t,n){t.splice||(n=t,t=[]),u[e]=[e,t,n]},n.amd={jQuery:!0}}(),n("vendor/almond",function(){}),n("sockethub/extend",[],function(){function e(t){var n=Array.prototype.slice.call(arguments,1);return n.forEach(function(n){for(var r in n)typeof n[r]=="object"&&typeof t[r]=="object"?e(t[r],n[r]):t[r]=n[r]}),t}return e}),function(){function e(t){function o(e){if(i){var t;if(e.fulfilled)try{t=[e.fulfilled.apply(null,s)]}catch(n){e.promise.reject(n);return}else t=s;t[0]&&typeof t[0].then=="function"?t[0].then(e.promise.fulfill,e.promise.reject):e.promise.fulfill.apply(null,t)}else if(e.rejected){var r;try{r=e.rejected.apply(null,s)}catch(n){e.promise.reject(n);return}r&&typeof r.then=="function"?r.then(e.promise.fulfill,e.promise.reject):e.promise.fulfill(r)}else e.promise.reject.apply(null,s)}function u(e,t){if(s){console.log("WARNING: Can't resolve promise, already resolved!");return}i=e,s=Array.prototype.slice.call(t),setTimeout(function(){var e=r.length;e===0&&!i;for(var t=0;t<e;t++)o(r[t]);r=undefined},0)}var n;typeof t=="function"&&setTimeout(function(){try{t(n)}catch(e){n.reject(e)}},0);var r=[],i,s;return n={then:function(t,n){var i={fulfilled:typeof t=="function"?t:undefined,rejected:typeof n=="function"?n:undefined,promise:e()};return s?setTimeout(function(){o(i)},0):r.push(i),i.promise},fulfill:function(){return u(!0,arguments),this},reject:function(){return u(!1,arguments),this}},n}typeof module!="undefined"?module.exports=e:typeof n=="function"?n("vendor/promising",[],function(){return e}):typeof window!="undefined"&&(window.promising=e)}(),n("sockethub/event_handling",[],function(){var e={on:function(e,t){this._validateEvent(e),this._handlers[e].push(t)},_emit:function(e){this._validateEvent(e);var t=Array.prototype.slice.call(arguments,1);this._handlers[e].forEach(function(e){e.apply(this,t)})},_validateEvent:function(e){if(!(e in this._handlers))throw"Unknown event: "+e},_delegateEvent:function(e,t){t.on(e,function(t){this._emit(e,t)}.bind(this))},_addEvent:function(e){this._handlers[e]=[]}};return function(t){var n=Array.prototype.slice.call(arguments,1);for(var r in e)t[r]=e[r];t._handlers={},n.forEach(function(e){t._addEvent(e)})}}),n("sockethub/client",["./extend","../vendor/promising","./event_handling"],function(e,t,n){var r=function(e,t){this.jsonClient=e,this.options=t,this._ridPromises={},n(this,"connected","disconnected","failed","message","unexpected-response"),e.on("message",this._processIncoming.bind(this)),this._delegateEvent("connected",e),this._delegateEvent("disconnected",e),this._delegateEvent("failed",e),this.__defineGetter__("connected",function(){return this.jsonClient.connected})};return r.prototype={declareVerb:function(t,n,r,i){this[t]=function(){var i=Array.prototype.slice.call(arguments),s=e({},r,{verb:t});n.forEach(function(e,t){var n=i[t],r=this._getDeepAttr(s,e);if(typeof r=="undefined"&&typeof n=="undefined")throw new Error("Expected a value for parameter "+e+", but got undefined!");this._setDeepAttr(s,e,n)}.bind(this));var o=i[n.length];return typeof o=="object"&&e(s,o),this.sendObject(s)},i&&(this[t]=i(this[t].bind(this)))},declareEvent:function(e){this._addEvent(e)},disconnect:function(){this.jsonClient.disconnect()},_ridCounter:0,sendObject:function(n){var r=t(),i=++this._ridCounter;return this._ridPromises[i]=r,n=e(n,{rid:i}),console.log("SEND",n),this.jsonClient.send(n),r},_getDeepAttr:function(e,t,n){var r=n||t.split("."),i=e[r.shift()];return r.length?this._getDeepAttr(i,undefined,r):i},_setDeepAttr:function(e,t,n,r){var i=r||t.split(".");i.length>1?this._setDeepAttr(e[i.shift()],undefined,n,i):e[i[0]]=n},_processIncoming:function(e){console.log(e.verb==="confirm"?"CONFIRM":"RECEIVE",e);var t=e.rid;if(typeof t!="undefined"){var n=this._ridPromises[t];if(n){if(e.verb==="confirm"){if(e.status)return;n.reject(e)}else"status"in e?n[e.status?"fulfill":"reject"](e):n.fulfill(e);delete this._ridPromises[t]}else this._emit("unexpected-response",e)}else this._emit("message",e)}},r}),n("sockethub/json_client",["./event_handling"],function(e){var t=function(t){this.socket=t,e(this,"message","connected","disconnected","failed"),this._listen()};return t.prototype={send:function(e){this.socket.send(JSON.stringify(e))},disconnect:function(){this.socket.close()},_listen:function(){this.socket.onmessage=this._processMessageEvent.bind(this),this.connected=!1,this.socket.onopen=function(){this.connected=!0,this._emit("connected")}.bind(this),this.socket.onclose=function(){this.connected?(this._emit("disconnected"),this.connected=!1):this._emit("failed")}.bind(this)},_processMessageEvent:function(e){this._emit("message",JSON.parse(e.data))}},t}),n("sockethub/connect",["./extend","./json_client","./client"],function(e,t,n){var r=10550,i="/sockethub",s="sockethub",o=function(o,u){var a;typeof u!="object"&&(u={}),typeof o=="string"&&!o.match(/wss?\:\/\//)&&(o={host:o});if(typeof o=="string")a=o;else{if(typeof o!="object")throw"SockethubClient.connect expects a URI, specified via a String or Object.";e(u,o);if(!u.host)throw"Required 'host' option not present";u.port||(u.port=r),u.path||(u.path=i),a=(u.ssl?"wss":"ws")+"://"+u.host+":"+u.port+u.path}return new n(new t(new WebSocket(a,s)),u)};return o}),n("sockethub/remoteStorage",[],function(){function t(t){t.defineModule("sockethub",e),t.access.claim("sockethub","rw");var n=t.getBearerToken();if(typeof n=="string"&&n.length>0){this.options.register||(this.options.register={});var r={};t.access.scopes.forEach(function(e){r[e]=t.access.get(e)});var i=t.getStorageInfo();i.type=String(i.type),this.options.register.remoteStorage={storageInfo:i,bearerToken:n,scope:r}}}var e=function(e,t){return e.declareType("config",{description:"sockethub config file",type:"object",properties:{host:{type:"string",description:"the hostname to connect to",format:"uri",required:!0},port:{type:"number",description:"the port number to connect to",required:!0},secret:{type:"string",description:"the secret to identify yourself with the sockethub server",required:!0}}}),{exports:{getConfig:function(){return e.getObject("config.json")},writeConfig:function(t){return e.storeObject("config","config.json",t)}}}};return t}),n("verbs/core",[],function(){var e=function(e){e.declareVerb("ping",[],{platform:"dispatcher"},function(e){return function(t){return typeof t!="object"&&(t={}),typeof t.timestamp!="number"&&(t.timestamp=(new Date).getTime()),e(t).then(function(e){return e.offset=(new Date).getTime()-t.timestamp,e})}}),e.declareVerb("register",["object"],{platform:"dispatcher"},function(t){return function(){return e.registered&&(console.log("WARNING: already registered!"),console.trace()),t.apply(this,arguments).then(function(t){e.registered=t.status;if(!t.status)throw setTimeout(function(){e._emit("registration-failed",t)},0),"Registration failed: "+t.message;return setTimeout(function(){e._emit("registered")},0),t})}}),e.registered=!1,e.declareEvent("registered"),e.declareEvent("registration-failed"),e.on("connected",function(){console.log("options passed to connect:",e.options),e.options.register&&(console.log("automatic registration!"),e.register(e.options.register))}),e.on("disconnected",function(){delete e.registered}),e.declareVerb("set",["target.platform","object"],{platform:"dispatcher",target:{}})};return e}),n("sockethub-client",["sockethub/client","sockethub/connect","sockethub/remoteStorage","verbs/core"],function(e,t,n,r){return e.connect=function(){var e=t.apply(this,arguments);return r(e),e},e.prototype.connectStorage=n,e}),t("sockethub-client")});
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

  if ((typeof SockethubClient === 'undefined') ||
      (typeof SockethubClient.connect === 'undefined')) {
    console.log(app + ' ERROR: SockethubClient object not found, be sure to include sockethub-client.js before guppy-irc.js.');
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

    if (sockethubClients[sockethub.uid]) {
      cb(null, sockethubClients[sockethub.uid]);
    } else {
      // no existing sockethub connection, so let's connect!
      var sockethubClient = SockethubClient.connect(sockethub.connectString, { register: { secret: sockethub.secret }, reconnect: true });
      sockethubClient.on('registered', function () {
        // connected and registered to sockethub
        sockethubClients[sockethub.uid] = sockethubClient;
        cb(null, sockethubClients[sockethub.uid]);
      });

      sockethubClient.on('failed', function (err) {
        cb('connection to sockethub failed: ' + err);
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
  function getGuppyConfig(e) {
    var cfg = {};
    cfg.id = e.id;
    cfg.title = e.getAttribute('data-title') || 'Guppy IRC Console';
    cfg.width = e.getAttribute('data-width');
    cfg.height = e.getAttribute('data-height');
    cfg.server = e.getAttribute('data-server') || 'irc.freenode.net';
    cfg.channel = e.getAttribute('data-channel') || '#sockethub';
    cfg.nick = e.getAttribute('data-nick') || 'guppy_user';
    cfg.displayName = e.getAttribute('data-display-name') || 'Guppy User';
    cfg.password = e.getAttribute('data-password');
    cfg.autoconnect = e.getAttribute('data-autoconnect');
    if (cfg.autoconnect === 'true') {
      cfg.autoconnect = true;
    } else {
      cfg.autoconnect = false;
    }
    if ((typeof cfg.password === 'string') && (cfg.password === '')) {
      cfg.password = undefined;
    }

    // sockethub config
    cfg.sockethub = {};
    cfg.sockethub.host = e.getAttribute('data-sockethub-host');
    cfg.sockethub.port = e.getAttribute('data-sockethub-port');
    cfg.sockethub.tls = e.getAttribute('data-sockethub-tls');
    cfg.sockethub.path = e.getAttribute('data-sockethub-path');
    cfg.sockethub.secret = e.getAttribute('data-sockethub-secret');
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
    var uid = window.localStorage.getItem(key);
    if (!uid) {
      // generate random number
      uid = Math.floor((Math.random()*99999)+10000);
      window.localStorage.setItem(key, uid);
    }

    var sid = md5(uid+cfg.sockethub.uid);
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
  var instances = []; // guppy-irc object instances
  var Guppy = function (e) {
    var self = this;
    self.setState('initializing');
    self.config = getGuppyConfig(e);
    self.id = self.config.id;
    self.log_id = app + '#' + self.id;
    self.DOMElements = {};
    self.DOMElements.original = e;

    self.config.nick = generateUniqueNick(self.config, self.log_id); // make sure each user is unique

    console.log('NEW GUPPY ' + self.id + ' nick: ' + self.config.nick + ' :', self.config);

    //
    // after we've connected to sockethub, initIRC handles the credentials and
    // registering of the sockethub irc platform.
    function initIRC(err, sc) {
      // got sockethub client object (sc)
      if (err) {
        self.setError(err);
      } else {
        self.sockethubClient = sc;
      }

      // set our credentials for the sockethub platform
      // (does not activate the IRC session, just stores the data)
      var credentialObject = {};
      self.actor = {
        address: self.config.nick,
        name: self.config.displayName
      };
      credentialObject[self.config.nick] = {
        nick: self.config.nick,
        password: self.config.password,
        server: self.config.server,
        channels: [ self.config.channel ],
        actor: self.actor
      };

      sc.set('irc', {
        credentials: credentialObject
      }).then(function () {
        // successful set credentials
        console.log(self.log_id + ' set credentials!');
        return sc.sendObject({
          verb: 'update',
          platform: 'irc',
          actor: self.actor,
          target: []
        });
      }).then(function () {
        console.log(self.log_id + ' connected to ' + self.config.channel);
        self.DOMElements.textarea.value = self.DOMElements.textarea.value + '\n' +
              ' --- connected to ' + self.config.server + ' on channel ' +
                                     self.config.channel + ' --- ';
        self.setState('connected');
      }, function (err) {
        // error setting credentials
        self.setError(err.message, 'Sockethub Error: ' + err);
      });

      sc.on('message', function (obj) {
        if ((obj.platform === 'irc') &&
            (obj.verb === 'send')) {
          self.displayMessage(obj);
        }
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

    //
    // listen for input submition text
    function onEnterHandler(event) {
      event.which = event.which || event.keyCode;
      if (event.which === 13) {
        //console.log('got enter!!', event);
        // send message
        self.DOMElements.input.disabled = true;
        var text = self.DOMElements.input.value;
        self.DOMElements.input.value = '';
        self.sendMessage(text);
        self.DOMElements.input.disabled = false;
      }
    }
    self.DOMElements.input.addEventListener('keyup', onEnterHandler);

    return this;
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
   *
   */
  Guppy.prototype.writeToMessageContainer = function (ml) {
    //
    // only autoscroll if the user is not scrolling up in the history, because
    // that would be irritating, wouldn't it?
    //
    // Subtract height of window from scrollHeight, and if the result doesn't
    // match with scrollTop, then we know the user is viewing the buffer.
    var autoScroll = true;
    if (this.DOMElements.messagesContainer.scrollTop !== (this.DOMElements.messagesContainer.scrollHeight - this.config.height)) {
      autoScroll = false;
    }
    this.DOMElements.messagesContainer.appendChild(ml);
    if (autoScroll) {
      this.DOMElements.messagesContainer.scrollTop = this.DOMElements.messagesContainer.scrollHeight;
    }
  };

  /**
   * Function: displayError
   *
   * Displays a Guppy error message to the message area
   *
   * Parameters:
   *
   *   text - error message
   *
   */
  Guppy.prototype.displayError = function (text) {
    var messageLine = document.createElement('p');
    messageLine.className = 'guppy-irc-error-line guppy-irc-' + this.config.id + '-error-line';
    messageLine.innerHTML = '----: Guppy Error: ' + text;
    this.writeToMessageContainer(messageLine);
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
   *
   */
  Guppy.prototype.displayMessage = function (obj) {
    // check if my nick is mentioned
    var toMeClassEnding = '-to-me';
    isToMe = false;
    if (obj.object.text.search(this.config.nick) >= 0) {
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

    this.writeToMessageContainer(messageLine);
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

    console.log('sendMessage called: ', obj);
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
      console.log(this.log_id + ' ERROR: ' + this.errMsg, obj);
    } else {
      console.log(this.log_id + ' ERROR: ' + this.errMsg);
    }

    this.errMsg = err;
    this.setState('error');
    this.displayError(errMsg);
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

  /**
   * Function: buildWidget
   *
   * Handles all of the DOM drawing of elements withing the Guppy widget.
   * Textarea, input, send button, connection info, etc.
   *
   */
  Guppy.prototype.buildWidget = function () {
    var e = this.DOMElements.original;

    // encapsulating container
    var container = document.createElement('div');
    container.className = 'guppy-irc-container guppy-irc-' + this.config.id + '-container';

    // title of widget
    var title = document.createElement('h1');
    title.className = 'guppy-irc-title guppy-irc-' + this.config.id + '-title';
    title.innerHTML = this.config.title;
    var titleContainer = document.createElement('div');
    titleContainer.className = 'guppy-irc-title-container guppy-irc-' + this.config.id + '-title-container';
    titleContainer.appendChild(title);
    container.appendChild(titleContainer); // put inside container

    // connection information
    var infoContainer = document.createElement('div');
    infoContainer.className = 'guppy-irc-info-container guppy-irc-info-' + this.config.id + '-container';
    container.appendChild(infoContainer);

    // message area
    var messagesContainer = document.createElement('div');
    messagesContainer.className = 'guppy-irc-messages-container guppy-irc-' + this.config.id + '-messages-container';
    messagesContainer.style.width = this.config.width + 'px';
    messagesContainer.style.height = this.config.height + 'px';
    container.appendChild(messagesContainer);

    // input
    var input = document.createElement('input');
    input.className = 'guppy-irc-input guppy-irc-' + this.config.id + '-input';
    var inputContainer = document.createElement('div');
    inputContainer.className = 'guppy-irc-input-container guppy-irc-' + this.config.id + '-input-container';
    inputContainer.appendChild(input);

    // submit button
    var submit = document.createElement('input');
    submit.className = 'guppy-irc-submit-button guppy-irc-' + this.config.id + '-submit-button';
    submit.type = 'submit';
    submit.name = 'Send';
    submit.value = 'Send';
    submit.id = 'guppy-irc-' + this.config.id + '-submit-button';
    var submitContainer = document.createElement('div');
    submitContainer.className = 'guppy-irc-submit-button-container guppy-irc-' + this.config.id + '-submit-button-container';
    submitContainer.appendChild(submit);

    // controls - contain input and submit button
    var controlsContainer = document.createElement('div');
    controlsContainer.className = 'guppy-irc-controls-container guppy-irc-' + this.config.id + '-controls-container';
    controlsContainer.appendChild(inputContainer);
    controlsContainer.appendChild(submitContainer);
    container.appendChild(controlsContainer);

    this.DOMElements.widget = container;
    this.DOMElements.input = input;
    this.DOMElements.submit = submit;
    this.DOMElements.messagesContainer = messagesContainer;

    e.parentNode.replaceChild(container, e);
  };

  var tags = document.getElementsByTagName('guppy-irc');
  console.log('Guppy tags: ' + typeof tags, tags);
  // foreach tag we create a separate object instance, this way multiple embeds
  // are supported on the same page.
  for (var i = 0, len = tags.length; i < len; i = i + 1) {
    try {
      instances.push(new Guppy(tags[i]));
    } catch (e) {
      console.log(app + ' ERROR: ' + e, e.stack);
    }
  }

})(window);



$('.guppy-irc-submit-button').addClass('btn btn-primary');
