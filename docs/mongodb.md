Here’s a step-by-step guide to create a free MongoDB Atlas account, set up a database, create a collection, and make it accessible over the internet (for development/testing).

**🧩 Part 1: Create a Free MongoDB Atlas Account**

Go to: https://www.mongodb.com/cloud/atlas

Click “Try Free” or “Sign up.”

Register using:

Your Google account or

Email + Password (then verify via email)

Once logged in, MongoDB will take you to the Atlas Dashboard.

**🧱 Part 2: Create a Free Cluster (Shared Cluster)**

On the dashboard, click “Build a Database.”

Under Free Tier (Shared) → select “M0 Sandbox” (the free cluster).

Choose your Cloud Provider & Region (for example: AWS / Mumbai or whichever is closest).

Click “Create Deployment.”

It will take a few minutes to provision.

**🗝️ Part 3: Create a Database User (with password)**

After the cluster is ready, go to:

Security → Database Access in the left sidebar.

Click “Add New Database User.”

Choose:

Authentication Method: Password

Username: e.g., studentAdmin

Password: e.g., StrongPass123!

Under Database User Privileges:

Select Read and write to any database (or restrict as needed).

Click “Add User.”

**🌐 Part 4: Allow Access from the Internet (IP Whitelist)**

Go to Security → Network Access.

Click “Add IP Address.”

To make it publicly accessible (for development):

Click “Allow Access from Anywhere” → adds 0.0.0.0/0

⚠️ Note: This makes the cluster open to all IPs. Use only for testing, not production.

Click Confirm

**🧰 Part 5: Create Database and Collection (Students → Records)**

You can do this via MongoDB Atlas UI .

Using MongoDB Atlas UI

Go to Database → Browse Collections.

Click “Add My Own Data.”

Enter:

Database Name: students

Collection Name: records

Click Create.
