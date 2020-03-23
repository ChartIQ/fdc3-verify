describe("FDC3", function() {
  it("is defined", function() {
    expect(window.fdc3).toBeDefined();
  });
});

describe("Desktop Agent", function() {
  let desktopAgent;

  beforeEach(function () {
    desktopAgent = window.fdc3.desktopAgent;
  });

  it("is defined", function() {
    expect(desktopAgent).toBeDefined();
  });

  describe("Open", function() {
    it("is defined", function() {
      expect(desktopAgent.open).toBeDefined();
    });
  });

  describe("Find Intent", function() {
    it("is defined", function() {
      expect(desktopAgent.findIntent).toBeDefined();
    });
  });

  describe("Find Intents By Context", function() {
    it("is defined", function() {
      expect(desktopAgent.findIntentsByContext).toBeDefined();
    });
  });

  describe("Broadcast", function() {
    it("is defined", function() {
      expect(desktopAgent.broadcast).toBeDefined();
    });
  });

  describe("Raise Intent", function() {
    it("is defined", function() {
      expect(desktopAgent.raiseIntent).toBeDefined();
    });
  });

  describe("Add Intent Listener", function() {
    it("is defined", function() {
      expect(desktopAgent.addIntentListener).toBeDefined();
    });
  });

  describe("Add Context Listener", function() {
    it("is defined", function() {
      expect(desktopAgent.addContextListener).toBeDefined();
    });
  });
});
