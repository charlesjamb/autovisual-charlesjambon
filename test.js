const fileUploaded = "marquis.van.de.velde.docx";
const fileInDirectory = ["test.pdf", "helloworld.docx", "marquis.van.de.velde.docx"]

function addBeforeExtension(string, toAdd)  {
	const re = /(?:\.([^.]+))?$/;
	let extension = re.exec(string)[0];

	let newString = string.split(extension)
												.concat(toAdd)
												.concat(extension)
												.join('');
	console.log(newString);
};



addBeforeExtension(fileUploaded, '(1)');