var letter = prompt('Enter a letter:');

for (i = 0; i < 10; i++) {
  letter = letter + letter;
  document.write(letter + '<br>');
}
