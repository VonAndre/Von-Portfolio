const texts = [
  "Administrative Assistant",
  "Frontend Developer",
  "Data Annotator"
];

let index = 0;
let charIndex = 0;
const typingSpan = document.querySelector(".typing");

function type() {
  if (charIndex < texts[index].length) {
    typingSpan.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingSpan.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 300);
  }
}

type();
