// function findFileName(array, fileName) {
// 	array.forEach(function(item) {
// 		if (item === fileName) {
			
// 		}
// 		else {
// 			return fileName
// 		}
// 	});
// }

const test = "marquis.docx";
const test2 = "marquis.van.de.velde.docx";

function addBeforeExtension(string, toAdd)  {
	const re = /(?:\.([^.]+))?$/;
	let extension = re.exec(string)[0];

	let newString = string.split(extension)
												.concat(toAdd)
												.concat(extension)
												.join('');
	console.log(newString);
}

addBeforeExtension(test2, 'hello');