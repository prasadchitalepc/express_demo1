# 🧩 How to Install Visual Studio Code and Node.js on Windows

## 🧰 Prerequisites
- A Windows PC (Windows 10 or later recommended)  
- Internet connection  
- Administrator privileges  

---

## ⚙️ Part 1: Install Visual Studio Code

### **Step 1: Download VS Code Installer**
1. Go to the official Visual Studio Code website:  
   👉 [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click **“Download for Windows”** (it detects your system automatically).  
3. Wait for the installer file — `VSCodeSetup-x64-x.x.x.exe` — to download.

---

### **Step 2: Run the Installer**
1. Locate the downloaded file in your **Downloads** folder.  
2. Double-click it to launch the setup.  
3. If Windows asks for permission, click **Yes**.

---

### **Step 3: Accept the License Agreement**
1. Check **“I accept the agreement”**.  
2. Click **Next**.

---

### **Step 4: Choose Installation Location**
1. The default location (e.g., `C:\Program Files\Microsoft VS Code`) works fine.  
2. Click **Next**.

---

### **Step 5: Select Additional Tasks**
It’s recommended to enable these options:
- ✅ **Add to PATH** (so you can run `code` from the terminal)  
- ✅ **Register Code as an editor for supported file types**  
- ✅ **Add “Open with Code” to Windows Explorer context menu**

Click **Next** → **Install**.

---

### **Step 6: Complete Installation**
1. Wait for installation to complete.  
2. Click **Finish** (you can leave “Launch Visual Studio Code” checked to open it).

---

### **Step 7: Verify Installation**
1. Open **Command Prompt** or **PowerShell**.  
2. Type:
   ```bash
   code --version
   ```
3. You should see the installed version number.

---

## ⚙️ Part 2: Install Node.js

### **Step 1: Download Node.js**
1. Visit the official Node.js website:  
   👉 [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long-Term Support)** version for Windows (recommended for most users).

---

### **Step 2: Run the Installer**
1. Locate and double-click the downloaded file — `node-vxx.x.x-x64.msi`.  
2. Follow the setup wizard:
   - Click **Next**.
   - Accept the **license agreement**.
   - Keep the **default installation path**.
   - Ensure **“Add to PATH”** is checked.
   - Click **Next → Install**.

---

### **Step 3: Verify Node.js Installation**
1. Open **Command Prompt** or **PowerShell**.  
2. Type the following commands:
   ```bash
   node -v
   ```
   → This displays the Node.js version.
   ```bash
   npm -v
   ```
   → This displays the npm (Node Package Manager) version.

If both commands return version numbers, installation is successful.

---

## 🧩 Part 3: Set Up VS Code for Node.js Development

1. Launch **VS Code**.  
2. Go to **Extensions** (`Ctrl + Shift + X`).  
3. Search and install:
   - **Node.js Extension Pack**
   - **ESLint**
   - **Prettier**
   - **Debugger for JavaScript**
   - **npm IntelliSense**

4. To test your setup:
   - Create a new file named `app.js`.
   - Add:
     ```js
     console.log("Node.js and VS Code are ready!");
     ```
   - Open **Terminal** in VS Code (`Ctrl + ~`) and run:
     ```bash
     node app.js
     ```
   - You should see the message printed in the terminal.

---

## 🎯 You’re All Set!
You now have:
- **Visual Studio Code** installed and configured  
- **Node.js** and **npm** ready for use  
- A basic environment to start developing JavaScript or full-stack apps
