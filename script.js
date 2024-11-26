// Select DOM Elements
const keyContainer = document.getElementById('key-container');
const keyElement = document.getElementById('key');
const keyCodeElement = document.getElementById('keyCode');
const asciiElement = document.getElementById('ascii');
const typeElement = document.getElementById('type');

// Function to adjust box size dynamically
function adjustBoxSize(box, content) {
  if (content.length > 8) {
    box.classList.add('resized');
  } else {
    box.classList.remove('resized');
  }
}

// Function to determine the type of key
function getKeyType(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) return 'Uppercase Letter';
  if (keyCode >= 97 && keyCode <= 122) return 'Lowercase Letter';
  if (keyCode >= 48 && keyCode <= 57) return 'Number';
  return 'Special Character / Other';
}

// Event Listener for Key Press
window.addEventListener('keydown', (event) => {
  const key = event.key === ' ' ? 'Space' : event.key;
  const keyCode = event.keyCode || event.which; // KeyCode
  const asciiValue = key.charCodeAt(0); // ASCII Value
  const keyType = getKeyType(asciiValue); // Determine key type

  // Update content
  keyElement.textContent = key;
  keyCodeElement.textContent = keyCode;
  asciiElement.textContent = asciiValue;
  typeElement.textContent = keyType;

  // Adjust size dynamically
  adjustBoxSize(keyElement.parentElement, key);
  adjustBoxSize(keyCodeElement.parentElement, keyCode.toString());
  adjustBoxSize(asciiElement.parentElement, asciiValue.toString());
  adjustBoxSize(typeElement.parentElement, keyType);

  // Show container if hidden
  keyContainer.classList.remove('hidden');
});
