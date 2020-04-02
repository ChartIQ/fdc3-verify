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
          expect(result).toBeFalsy();
        });
      });

      it("returns an error if no app was found", function() {
        return desktopAgent.open().then(result => {
          fail("Promise should not be resolved on error");
        }, reason => {
          let expected = "AppNotFound";
          expect(reason).toEqual(expected);
        });
      })

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
        expect(result).toBeFalsy();
      })
    });
    describe("addIntentListener()", function() {
      it("is defined", function() {
        expect(desktopAgent.addIntentListener).toBeDefined();
      });
      it("returns a Listener object", function() {
        let intent = "StartChat";
        let context = {};
        let handler = function(context) {};
        let result = desktopAgent.addIntentListener(intent, handler(context));
        expect(result).toBeDefined();
        expect(result.unsubscribe).toBeDefined();

      });
    });

    describe("addContextListener()", function() {
      it("is defined", function() {
        expect(desktopAgent.addContextListener).toBeDefined();
      });
      it("returns a Listener object", function() {
        let context = {};
        let unsubscribe = function() {};
        let handler = function(context) {};
        let result = desktopAgent.addContextListener(handler(context));
        expect(result).toBeDefined();
        expect(result.unsubscribe).toBeDefined();
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
          expect(result).toBeDefined();
          expect(result.intent).toBeDefined();
          expect(result.apps).toBeDefined();
        });
      });
    });

    describe("findIntentsByContext()", function() {
      it("is defined", function() {
        expect(desktopAgent.findIntentsByContext).toBeDefined();
      });
      it("returns an array of AppIntent objects", function() {
        let context = {};
        return desktopAgent.findIntentsByContext(context).then(function(result) {
          expect(result).toBeDefined();
          result.forEach(val => {
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
        let context = {};
        return desktopAgent.raiseIntent("StartChat", context).then(function(result) {
          expect(result).toBeDefined();
          expect(result.source).toBeDefined();
          expect(result.version).toBeDefined();
        });
      });

      it("returns an error if app was not found", function() {
        let error = desktopAgent.raiseIntent();
        return error.then(val => {}, reason => {
          let expected = {
            source: null,
            version: ''
          };
          expect(reason).toEqual(expected);
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
