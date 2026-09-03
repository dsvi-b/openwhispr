const test = require("node:test");
const assert = require("node:assert/strict");

const { shouldQuitWhenAllWindowsClosed } = require("../../src/helpers/appLifecyclePolicy");

test("Linux stays available in the tray when its last window closes", () => {
  assert.equal(shouldQuitWhenAllWindowsClosed("linux"), false);
});

test("macOS stays available when its last window closes", () => {
  assert.equal(shouldQuitWhenAllWindowsClosed("darwin"), false);
});

test("Windows preserves the existing quit-on-last-window behavior", () => {
  assert.equal(shouldQuitWhenAllWindowsClosed("win32"), true);
});
