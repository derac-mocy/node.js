Major differences between Browser's vanillaJS & node.js
Browser					Node.js
-------					-------
- DOM					- No DOM
- Window				- No Window
- Interactive Apps		- Server side Apps
- No Filesystem			- Filesystem
- Fragmentation			- Versions
- ES6 modules			- commonJS

---------------------------

REPL / CLI  ->  Read, Evaluate, Print, Loop, CLI

---------------------------

Node.js Global variables

// __dirname  -  path to current directory
// __filename -  file name
// require	  -  function to use modules (CommonJS)
// module 	  -  info about current module (file)
// process 	  -  info about env where the program is being executed

--------------------------

Built-in Modules
- OS
- PATH
- FS
- HTTP

--------------------------

Node Package Manager (NPM)

// npm  -> global command, comes with node
// npm --version

Local dependency -> use it only in this particular project
// npm i <packageName>

Global dependency -> use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


// package.json - manifest file (stores important info about project/ package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

--------------------------

