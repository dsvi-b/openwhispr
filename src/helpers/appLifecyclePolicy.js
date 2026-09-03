function shouldQuitWhenAllWindowsClosed(platform) {
  // Linux keeps a tray icon for background dictation, just like macOS keeps
  // the app available from its menu bar. Closing the last window must not
  // disable the global hotkey for the rest of the session.
  return platform !== "darwin" && platform !== "linux";
}

module.exports = { shouldQuitWhenAllWindowsClosed };
