
/*
	This file stores the compiler/interpretor details that are provided to DockerSandbox.sh	by the app.js
	The index is the key field,
	First column contains the compiler/interpretor that will be used for translation
	Second column is optional, it contains the command to invoke the compiled program, it is used only for compilers
	Third column is just the language name for display on console, for verbose error messages

	You can add more languages to this API by simply adding another row in this file along with installing it in your
	Docker VM.

	Author: Osman Ali
	Date: 3 - JUN - 2014
	*Revised on: 30th June 2014 (Added Column number 4 to display the name of languages to console)
*/

exports.compilerArray= [ ["python3","","Python"],
												 ["ruby","","Ruby"],
												 ["\'javac -cp /usercode/\'", "./usercode/javaRunner.sh", "Java"] ];

