'use strict';

{
  const firstLetterUppercase = str => {
    let editedString = str.toLowerCase();
    let replacebleLetter = editedString[0];
    let newLetter = editedString[0];
    newLetter = newLetter.toUpperCase();
    editedString = editedString.replace(replacebleLetter, newLetter);
    return editedString;
  };

  console.log(firstLetterUppercase('аБЫрВаЛг'));
}
