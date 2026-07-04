# RTL Extension Beta

A modern, lightweight, and powerful browser extension to detect and toggle the page layout direction between RTL (Right-to-Left) and LTR (Left-to-Right) on any website.

<div align="center">
  <img src="https://github.com/hamzabellouch/rtl/blob/beta/RTL.png" width="800"/>
</div>

Compatible with all major browsers: **Chrome, Brave, Edge, Opera (Chromium-based)** and **Mozilla Firefox**.



### <a name="Features"></a> ⭐ Features

- **Easy Toggling:** Switch document layout direction between RTL and LTR with a single click.
- **Smart Detection:** Automatically detects the current page direction.
- **Visual Feedback:** Displays status badge on the extension icon.
- **Clean Code:** Lightweight and fast extension with zero performance impact.



### <a name="RepositoryStructure"></a> 📁 Repository Structure

```text

├── chromium/          # Extension build directory for Chrome, Brave, Edge, etc.
│   ├── images/        # Extension icons
│   ├── background.js  # Service worker handling runtime actions
│   ├── manifest.json  # Chromium Manifest V3 configuration
│   ├── rtl-init-check.js # Page script to initialize layout check
│   └── rtl-toggle.js  # Content script to toggle document direction
│
├── firefox/           # Extension build directory for Mozilla Firefox
│   ├── images/        # Extension icons
│   ├── background.js  # Event page handling runtime actions
│   ├── manifest.json  # Firefox Manifest V3 configuration (with Gecko ID)
│   ├── rtl-init-check.js # Page script to initialize layout check
│   └── rtl-toggle.js  # Content script to toggle document direction
│
└── .gitignore         # Prevents tracking of OS metadata, IDE configurations, etc.

```



### <a name="InstallationUsage"></a> ⚙️ Installation & Usage

### <a name="ForChromiumBasedBrowsers"></a> 🌐 For Chromium-Based Browsers (Chrome, Brave, Edge, Opera)

1. Open your Chromium-based browser and navigate to:
   - **Google Chrome / Brave / Opera:** `chrome://extensions/`
   - **Microsoft Edge:** `edge://extensions/`

2. Enable **Developer mode**.

3. Click **Load unpacked**.

4. Select the following directory:

```text
chromium/
├── images/
├── background.js
├── manifest.json
├── rtl-init-check.js
└── rtl-toggle.js
```

5. The extension will be installed and is now ready to use.

### <a name="ForMozillaFirefox"></a> 🦊 For Mozilla Firefox

1. Open **Mozilla Firefox** and navigate to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Select the following file:

```text
firefox/
└── manifest.json
```

4. The extension is now loaded as a temporary add-on.



### <a name="Privacy & Safety"></a> 🛡️ Privacy & Safety

- **Local Processing:** All actions and direction toggles are executed locally in your browser. No data is collected or sent to external servers.
- **Minimal Permissions:** The extension only uses `activeTab` and `scripting` permissions to apply direction changes securely on the active tab when clicked.



> [!WARNING]
> There is always a possibility of error, so we assume no responsibility for any inaccuracies.


### <a name="Copyright©2026"></a> Copyright © 2026

Thank you for engaging with us. For inquiries or collaboration, please contact:  
hamzabellouchcontact@gmail.com

Stay connected and follow us on:  
[Facebook](https://facebook.com/hamzabellouch1) | [Instagram](https://instagram.com/hamzabellouch0) | [Twitter](https://twitter.com/hamzabellouch0) | [Telegram](https://t.me/hammzabellouch) | [LinkedIn](https://www.linkedin.com/in/hamzabellouch)
