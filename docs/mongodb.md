# 🌍 MongoDB Atlas Setup Guide (Free Tier)

Here’s a step-by-step guide to create a free MongoDB Atlas account, set up a database, create a collection, and make it accessible over the internet (for development/testing).

---

## 🧩 Part 1: Create a Free MongoDB Atlas Account

1. Go to: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click **“Try Free”** or **“Sign up.”**
3. Register using:
   - Your **Google account**, or  
   - **Email + Password** (then verify via email)
4. Once logged in, MongoDB will take you to the **Atlas Dashboard.**

---

## 🧱 Part 2: Create a Free Cluster (Shared Cluster)

1. On the dashboard, click **“Build a Database.”**
2. Under **Free Tier (Shared)** → select **“M0 Sandbox”** (the free cluster).
3. Choose your **Cloud Provider & Region** (for example: AWS / Mumbai or whichever is closest).
4. Click **“Create Deployment.”**
5. It will take a few minutes to provision.

---

## 🗝️ Part 3: Create a Database User (with password)

1. After the cluster is ready, go to:  
   **Security → Database Access** in the left sidebar.
2. Click **“Add New Database User.”**
3. Choose:
   - **Authentication Method:** Password  
   - **Username:** e.g., `studentAdmin`  
   - **Password:** e.g., `StrongPass123!`
4. Under **Database User Privileges:**
   - Select **Read and write to any database** (or restrict as needed).
5. Click **“Add User.”**

---

## 🌐 Part 4: Allow Access from the Internet (IP Whitelist)

1. Go to **Security → Network Access.**
2. Click **“Add IP Address.”**
3. To make it publicly accessible (for development):
   - Click **“Allow Access from Anywhere”** → adds `0.0.0.0/0`
   - ⚠️ *Note: This makes the cluster open to all IPs. Use only for testing, not production.*
4. Click **Confirm.**

---

## 🧰 Part 5: Create Database and Collection (students → records)

### Using MongoDB Atlas UI

1. Go to **Database → Browse Collections.**
2. Click **“Add My Own Data.”**
3. Enter:
   - **Database Name:** `students`
   - **Collection Name:** `records`
4. Click **Create.**

---

✅ You now have a working MongoDB Atlas setup with an accessible database for development!
