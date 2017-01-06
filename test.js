const fileUploaded = "marquis.van.de.velde.docx";
const filesInDirectory = ["test.pdf", "helloworld.docx", "marquis.van.de.velde.docx", "marquis.van.de.velde(1).docx"]

function addBeforeExtension(string, toAdd)  {
	const findExtension = /(?:\.([^.]+))?$/;
	let extension = findExtension.exec(string)[0];

	let newString = string.split(extension)
												.concat(toAdd)
												.concat(extension)
												.join('');
	return newString
};

function defineFileName(filesNameArray, fileName, count) {

	let counter;
	(count ? counter = count : counter = 0);

	let duplicate = filesNameArray.find(function(item) {
		if (item === fileName) {
			counter++;
			return item
		}
	});

	if (duplicate) {
		let file = addBeforeExtension(fileName, `(${counter})`);
		defineFileName(filesNameArray, file, counter);
	}
	else {
		console.log(fileName);
		return fileName
	}

};

defineFileName(filesInDirectory, fileUploaded);