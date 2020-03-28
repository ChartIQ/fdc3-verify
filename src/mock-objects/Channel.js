class Channel {
  // * Properties
  id = ''
  type = '';
  displayMetadata = {name: undefined, color: undefined, glyph: undefined};

  // * Methods
  broadcast(context) {
    return null;
  }

  getCurrentContext(contextType) {
    return null;
  }

  addContextListener(contextType, handler) {
    return null;
  }
}

if (!window.fdc3) {
  window.fdc3 = {}
}
window.fdc3.channel = new Channel();