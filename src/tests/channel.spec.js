import '../js/StartJasmine';

describe("FDC3", function() {
  // * FDC3 Tests
  it("is defined", function() {
    expect(window.fdc3).toBeDefined();
  });
});

describe("Channel", function() {
  // * Setup
  let channel;
  beforeEach(function () {
    channel = window.fdc3.channel;
  });

  // * Channel Tests
  it("is defined", function() {
    expect(channel).toBeDefined();
  });

  // * Property Tests
  describe("Properties", function() {
    describe("id", function() {
      it("is defined", function() {
        expect(channel.id).toBeDefined();
      });
    });
    describe("type", function() {
      it("is defined", function() {
        expect(channel.type).toBeDefined();
      });
    });
    describe("displayMetadata", function() {
      it("is Object or null/undefined", function() {
        const validTypes = ["undefined", 'object'];
        const displayMetadataType = typeof(channel.displayMetadata);
        expect(validTypes.includes(displayMetadataType)).toBeTrue();
      });
    });
  });

  // * Method Tests
  describe("Methods", function() {
    describe("broadcast()", function() {
      it("is defined", function() {
        expect(channel.broadcast).toBeDefined();
      });
    });
    describe("getCurrentContext()", function() {
      it("is defined", function() {
        expect(channel.getCurrentContext).toBeDefined();
      });
    });
    describe("addContextListener()", function() {
      it("is defined", function() {
        expect(channel.addContextListener).toBeDefined();
      });
    });
  });
});
