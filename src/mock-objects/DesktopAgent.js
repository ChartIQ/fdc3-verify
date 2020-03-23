class DesktopAgent {
  // apps
  open(name, context) {
    return null;
  }

  // context
  broadcast(context) {
    return null;
  }
  addIntentListener(intent, handler) {
  }
  addContextListener(handler) {
  }

  // intents
  findIntent(intent, context) {
    return null;
  }
  findIntentsByContext(context) {
    return null;
  }
  raiseIntent(intent, context, target) {
    return null;
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