import '../js/StartJasmine';

describe("FDC3", function() {
  // * FDC3 Tests
  it("is defined", function() {
    expect(window.fdc3).toBeDefined();
  });
});

describe("Desktop Agent", function() {
  // * Setup
  let desktopAgent;
  beforeEach(function () {
    desktopAgent = window.fdc3.desktopAgent;
  });

  // * Desktop Agent Tests
  it("is defined", function() {
    expect(desktopAgent).toBeDefined();
  });

  // * App Method Tests
  describe("Apps", function() {
    describe("open()", function() {
      it("is defined", function() {
        expect(desktopAgent.open).toBeDefined();
      });
      it("returns a promise with no value", function() {
        return desktopAgent.open("App").then(function(result) {
          let value = result.resolve();
          expect(value).toBeUndefined();
        });
      });
    });
  });

  // * Context Method Tests
  describe("Context", function() {
    describe("broadcast()", function() {
      it("is defined", function() {
        expect(desktopAgent.broadcast).toBeDefined();
      });
      it("should not return a value", function() {
        let context = {};
        let result = desktopAgent.broadcast(context);
        expect(result).toBeUndefined();
      })
    });
    describe("addIntentListener()", function() {
      it("is defined", function() {
        expect(desktopAgent.addIntentListener).toBeDefined();
      });
      it("returns a Listener object", function() {
        let intent = "StartChat";
        let context = {};
        let unsubscribe = function() {};
        let listener = {
          unsubscribe
        }
        let handler = function(context) {};
        let result = desktopAgent.addIntentListener(intent, handler(context));
        expect(result).toBe(listener);
      });
    });

    describe("addContextListener()", function() {
      it("is defined", function() {
        expect(desktopAgent.addContextListener).toBeDefined();
      });
      it("returns a Listener object", function() {
        let intent = "StartChat";
        let context = {};
        let unsubscribe = function() {};
        let listener = {
          unsubscribe
        }
        let handler = function(context) {};
        let result = desktopAgent.addContextListener(handler(context));
        expect(result).toBe(listener);
      });
    });
  });

  // * Intent Method Tests
  describe("Intents", function() {
    describe("findIntent()", function() {
      it("is defined", function() {
        expect(desktopAgent.findIntent).toBeDefined();
      });
      it("returns an AppIntent object", function() {
        return desktopAgent.findIntent("StartChat").then(function(result) {
          let value = result.resolve();
          expect(value).toBeDefined();
          expect(value.intent).toBeDefined();
          expect(value.apps).toBeDefined();
        });
      });
    });

    describe("findIntentsByContext()", function() {
      it("is defined", function() {
        expect(desktopAgent.findIntentsByContext).toBeDefined();
      });
      it("returns an array of AppIntent objects", function() {
        return desktopAgent.findIntent("StartChat").then(function(result) {
          let value = result.resolve();
          expect(value).toBeDefined();
          value.forEach(val => {
            expect(val.intent).toBeDefined();
            expect(val.apps).toBeDefined();
          });
        });
      });
    });

    describe("raiseIntent()", function() {
      it("is defined", function() {
        expect(desktopAgent.raiseIntent).toBeDefined();
      });
      it("returns an IntentResolution object", function() {
        let context = {}
        return desktopAgent.raiseIntent("StartChat", context).then(function(result) {
          let value = result.resolve();
          expect(value).toBeDefined();
          expect(value.source).toBeDefined();
          expect(value.version).toBeDefined();
        });
      });
    });
  });

  // * Channel Method Tests
  describe("Channels", function() {
    describe("getOrCreateChannel()", function() {
      it("is defined", function() {
        expect(desktopAgent.getOrCreateChannel).toBeDefined();
      });
    });

    describe("getSystemChannels()", function() {
      it("is defined", function() {
        expect(desktopAgent.getSystemChannels).toBeDefined();
      });
    });

    describe("joinChannel()", function() {
      it("is defined", function() {
        expect(desktopAgent.joinChannel).toBeDefined();
      });
    });

    describe("getCurrentChannel()", function() {
      it("is defined", function() {
        expect(desktopAgent.getCurrentChannel).toBeDefined();
      });
    });

    describe("leaveCurrentChannel()", function() {
      it("is defined", function() {
        expect(desktopAgent.leaveCurrentChannel).toBeDefined();
      });
    });
  });
});
