Install NodeJS 10.x
npm cache clean
npm install (adds local karma based on package.json)
npm install -g karma (adds global karma)
npm install -g phantomjs (adds global phantomjs)

TRY npm install karma@canary (if having troubles running tests using phantomjs)

Start karma in terminal with: karma start karma.conf.js

To run test in Chrome:
Set browsers: ['Chome'] in karma.conf.js
Set CHROME_BIN in environment to point to chrome.exe
e.g. "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
In terminal, type SET
	- ensure CHROME_BIN is there
	- if not, reboot and check again
	- Start karma with: karma start karma.conf.js


Note: If using IntelliJ, can install karma plugin and run tests in IDE window with auto-refresh
