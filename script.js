function toCase(text) {
  // write your code here
	function toCase(text) {
  // Check if the input text is empty
  if (text === '') {
    return '-';
  }

  // Convert the text to lowercase and uppercase using toLowerCase() and toUpperCase() methods
  const lowerCaseText = text.toLowerCase();
  const upperCaseText = text.toUpperCase();

  // Join the lowercase and uppercase texts with "-"
  const resultText = lowerCaseText + '-' + upperCaseText;

  return resultText;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
