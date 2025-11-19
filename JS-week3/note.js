//=========Adding note function=======
const notes = [];

function saveNote(content, id) {
  notes.push({content: content, id: id});
  
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote('Football Match', 3)

console.log(notes); 

//===returning the note by ID call====

function getNote(id) {
  return notes.find(item => item.id ===id)
}
console.log( getNote(1));
console.log( getNote(2));
console.log( getNote(3));

//=====logOutNoteFormat===============


function logOutNotesFormatted(){
  let logOut = "";
  notes.forEach(item =>{
    logOut += `"The note with id: ${item.id}, has the following note text: '${item.content}'. "\n`;
  });
    return logOut
}

console.log(logOutNotesFormatted());



