class DesktopAgent {
  // apps
  open(name, context) {
    const promise1 = new Promise(function(resolve, reject) {
      resolve(null);
    });
    return promise1;
  }

  // context
  broadcast(context) {
    return null;
  }
  addIntentListener(intent, handler) {
    return {
      unsubscribe: function() {}
    };
  }
  addContextListener(handler) {
    return {
      unsubscribe: function() {}
    };
  }

  // intents
  findIntent(intent, context) {
    const promise1 = new Promise(function(resolve, reject) {
      let appIntent = {
        intent: {},
        apps: []
      };
      resolve(appIntent);
    });
    return promise1;
    // return null;
  }
  findIntentsByContext(context) {
    const promise1 = new Promise(function(resolve, reject) {
      let appIntent = {
        intent: {},
        apps: []
      };
      let appIntents = [appIntent];
      resolve(appIntents);
    });
    return promise1;
  }
  raiseIntent(intent, context, target) {

    const promise1 = new Promise(function(resolve, reject) {
      let intentResolution = {
        source: '',
        version: ''
      };
      resolve(intentResolution);
    });
    return promise1;
  }

  // channels
  getOrCreateChannel(channelId) {
    return null;
  }
  getSystemChannels() {
    return null;
  }
  joinChannel(channelId) {
    return null;
  }
  getCurrentChannel() {
    return null;
  }
  leaveCurrentChannel() {
    return null;
  }
}

if (!window.fdc3) {
  window.fdc3 = {}
}
window.fdc3.desktopAgent = new DesktopAgent();