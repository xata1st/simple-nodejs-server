                Project Settings


1. For correct project work you should install:
    A. Git (you can download it by link - http://git-scm.com/downloads)
        if you are working from ericpol network than you should change git config (git config --global url."https://".insteadOf git://);
        the details you can read on this link - (http://stackoverflow.com/questions/4891527/git-protocol-blocked-by-company-how-can-i-get-around-that)
        Git should be installed globally, i.e. accessed through console.
        
    B. nodejs (you can download it by link - https://nodejs.org/download/)
    
    C. npm (node packet manager should be installed with nodejs)
    
    D. mongodb (you can download it by link - https://www.mongodb.org/downloads)
        the set data path for mongodb with command "C:\mongodb\bin\mongod.exe --dbpath d:\test\mongodb\data" or you can help additional help
        by this link - "http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/"
        
2. After installing you should go in command line in the project root folder and install all dependencies from package.json file
    A. Just type "npm install" in command line
    
3. Run a server
    A. Just type "node server.js"
    
    
    
    
    
    than you can access application in browser by "http://localhost:4711/index.html",
    application does nothing, it only gives us entry point to a server,
    so you can check all REST API in the console,
    all request are written with use of jquery and placed in "site/js/getData"

                
                Project CI
                
1. After providing changes in package.json user should execute command "npm update" in the root folder of a project.