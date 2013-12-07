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


    //
    // TODO
    // emit a message when events happen to the sockethub client so that
    // guppy instances can behave accordingly
    //
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
        self.displaySystemMessage('status', 'connected to ' + self.config.server +
                                            ' on channel ' + self.config.channel);
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
    self.displaySystemMessage('status', 'connecting to ' + self.config.server + ' ...');

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
   * Function: displaySystemMessage
   *
   * Displays a Guppy system message to the message area
   *
   * Parameters:
   *
   *   type - 'error', 'status'
   *   text - text string to display
   *
   */
  Guppy.prototype.displaySystemMessage = function (type, text) {
    var messageLine = document.createElement('p');
    if (type === 'error') {
      messageLine.className = 'guppy-irc-error-line guppy-irc-' + this.config.id + '-error-line';
      messageLine.innerHTML = '----: ERROR: ' + text;
    } else {
      messageLine.className = 'guppy-irc-status-line guppy-irc-' + this.config.id + '-status-line';
      messageLine.innerHTML = '----: ' + text;
    }
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
    this.displaySystemMessage('error', errMsg);
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
   * messages area, input, send button, connection info, etc.
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