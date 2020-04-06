class DesktopAgent {
  // apps
  open(name, context) {
    if (!name) {
      const appNotFoundPromise = new Promise(function(resolve, reject) {
        reject("AppNotFound");
      });
      return appNotFoundPromise;
    }
    const success = new Promise(function(resolve, reject) {
      resolve();
    });
    return success;
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
    if (!intent) {
      const noIntent = new Promise(function(resolve, reject) {
        reject("NoAppsFound");
      })
      return noIntent;
    }
    const success = new Promise(function(resolve, reject) {
      let appIntent = {
        intent: {},
        apps: []
      };
      resolve(appIntent);
    });
    return success;
  }
  findIntentsByContext(context) {
    if (!context) {
      const noContext = new Promise(function(resolve, reject) {
        reject("NoAppsFound");
      })
      return noContext;
    }
    const success = new Promise(function(resolve, reject) {
      let appIntent = {
        intent: {},
        apps: []
      };
      let appIntents = [appIntent];
      resolve(appIntents);
    });
    return success;
  }
  raiseIntent(intent, context, target) {

    if (!intent) {
      const failedIntentResolution = new Promise(function(resolve, reject) {
        let intentResolution = {
          source: null,
          version: ''
        }
        reject(intentResolution);
      });
      return failedIntentResolution;
    } 
    
    else {
      const success = new Promise(function(resolve, reject) {
        let intentResolution = {
          source: '',
          version: ''
        };
        resolve(intentResolution);
      });
      return success;

    }

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