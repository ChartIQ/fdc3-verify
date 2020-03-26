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
    });
  });

  // * Context Method Tests
  describe("Context", function() {
    describe("broadcast()", function() {
      it("is defined", function() {
        expect(desktopAgent.broadcast).toBeDefined();
      });
    });
    describe("addIntentListener()", function() {
      it("is defined", function() {
        expect(desktopAgent.addIntentListener).toBeDefined();
      });
    });

    describe("addContextListener()", function() {
      it("is defined", function() {
        expect(desktopAgent.addContextListener).toBeDefined();
      });
    });
  });

  // * Intent Method Tests
  describe("Intents", function() {
    describe("findIntent()", function() {
      it("is defined", function() {
        expect(desktopAgent.findIntent).toBeDefined();
      });
    });

    describe("findIntentsByContext()", function() {
      it("is defined", function() {
        expect(desktopAgent.findIntentsByContext).toBeDefined();
      });
    });

    describe("raiseIntent()", function() {
      it("is defined", function() {
        expect(desktopAgent.raiseIntent).toBeDefined();
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
