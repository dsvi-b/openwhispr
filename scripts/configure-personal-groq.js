const path = require("path");
const { app, BrowserWindow } = require("electron");

const userDataPath = path.join(app.getPath("appData"), "OpenWhispr-development");
app.setPath("userData", userDataPath);

const settings = {
  onboardingCompleted: "true",
  authenticationSkipped: "true",
  skipAuth: "true",
  dictationKey: "Super+Shift+F23",
  activationMode: "tap",
  useLocalWhisper: "false",
  allowLocalFallback: "false",
  cloudTranscriptionMode: "byok",
  cloudTranscriptionProvider: "groq",
  cloudTranscriptionModel: "whisper-large-v3",
  transcriptionMode: "providers",
  meetingUseLocalWhisper: "false",
  meetingCloudTranscriptionMode: "byok",
  meetingCloudTranscriptionProvider: "groq",
  meetingCloudTranscriptionModel: "whisper-large-v3",
  meetingTranscriptionMode: "providers",
  uploadUseLocalWhisper: "false",
  uploadCloudTranscriptionMode: "byok",
  uploadCloudTranscriptionProvider: "groq",
  uploadCloudTranscriptionModel: "whisper-large-v3",
  uploadTranscriptionMode: "providers",
  useCleanupModel: "false",
  useDictationAgent: "false",
  autoPasteEnabled: "true",
};

app.whenReady().then(async () => {
  const window = new BrowserWindow({ show: false, webPreferences: { sandbox: true } });
  await window.loadFile(path.join(__dirname, "..", "src", "dist", "index.html"));
  await window.webContents.executeJavaScript(
    `(() => {
      const settings = ${JSON.stringify(settings)};
      for (const [key, value] of Object.entries(settings)) localStorage.setItem(key, value);
      localStorage.removeItem("onboardingSessionV2");
      localStorage.removeItem("onboardingCurrentStep");
      return true;
    })()`
  );
  console.log("OpenWhispr configurado para Groq e tecla Copilot.");
  app.quit();
});

app.on("window-all-closed", () => app.quit());
