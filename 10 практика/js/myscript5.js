var textElement = document.getElementById("text");

var originalText = textElement.innerText;

var maxLength = 30;

var truncatedText = truncate(originalText, maxLength);

textElement.innerText = truncatedText;

function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + '…';
    } else {
      return str;
    }
}