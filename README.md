# PowerBI-embedToken
Use this Microsoft Flow (Power Automate) script to generate an Embed Token

We are building a React Application that is centered on embedded Power BI Reports. We may eventually open source the app, but the difficult part has been embedding reports "easily". I am using the powerbi-report-component React NPM package and even retrieving an embed token for a one-time use is cumbersome. So I built a Microsoft Flow to handle the HTTP requests. The app is being hosted in Google Firebase.

To implement this approach:
1. Copy code to respective app.js and pbi-embed.js locations
2. Import the json file into Microsoft Flow, generating a POST URL
3. Set .env variables as needed
4. Style and serve!

This allows you to store your client secret, username, and password in Flow not your app.
