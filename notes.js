const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

//===========ADD a new note==========================================
const addNote = (title, body) => {
    let myNotes = loadNote()
    const checkDuplicateNote = myNotes.find((eachNoteInArray) => eachNoteInArray.title === title)
    debugger
    if (!checkDuplicateNote) {
        myNotes.push({
            title: title,
            body: body
        })
        saveNotes(myNotes)
        console.log(chalk.green('New note ' + chalk.underline.bold(title) + ' added successfully!'))
    } else {
        console.log(chalk.red('Note title ' + chalk.underline.bold(title) + ' is already taken, try different...'))
    }
}

//===========LIST saved notes========================================
const listNotes = () => {
    const loadNotes = loadNote()
    let srNo = 1
    if (loadNotes.length === 0) {
        console.log(chalk.red.bold.inverse('No notes are available'))
    }
    else {
        console.log(chalk.green.inverse('Your notes are listed below'))
        console.log(chalk.yellow(('Total'), loadNotes.length, ('notes available')), '\n')
        loadNotes.forEach(note => {
            console.log(srNo, '. ', note.title)
            srNo += 1
        });
    }
}

//===========DELETE a existing note==================================
const deleteNote = (title) => {
    let notesInArray = loadNote()
    let noteToKeep = notesInArray.filter((single_note_from_array) => single_note_from_array.title !== title)
    if (notesInArray.length === noteToKeep.length) {
        console.log('No note found with title: ' + chalk.italic.red((title)))
    } else {
        saveNotes(noteToKeep)
        console.log(chalk.green('Deleted note: ' + chalk.italic(title)))
    }
}

//===========READ a specific note ===================================
const readNote = (title) => {
    const loadNotes = loadNote()
    const specificNote = loadNotes.find((eachNoteInArray) => eachNoteInArray.title === title)
    if (specificNote) {
        console.log(chalk.green('Note you wanted found!!!'))
        console.log(chalk.underline('Title:'), specificNote.title)
        console.log(chalk.underline('Content:'), specificNote.body)
    }
    else {
        console.log(chalk.red('No note with title', chalk.underline(title), 'found'))
    }
}

//============SAVE changed notes array to JSON file=======================
const saveNotes = (myNotes) => {
    const to_be_saved = JSON.stringify(myNotes)
    fs.writeFileSync('note_storage.json', to_be_saved)
}

//============LOAD notes from JSON file in an array=======================
const loadNote = () => {
    try {
        const bufferData = fs.readFileSync('note_storage.json')
        const dataJSON = bufferData.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
}

//============EXPORT function to app.js===================================
module.exports = {
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    readNote: readNote
}