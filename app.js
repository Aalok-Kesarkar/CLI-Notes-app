const myNotes = require('./notes.js')
const validator = require('validator') //NPM package to validate string input from user
const chalk = require('chalk') //to color the console output
const yargs = require('yargs')
const { demandOption, argv } = require('yargs')
// fs.writeFileSync('notes.txt', 'Today I started my NodeJS tutorial on Udemy')
// fs.appendFileSync('notes.txt', '\nthis is appended text with appendFileSync function')
// console.log(utils)
// console.log(myNotes())
yargs.version('1.0.0')

//ADD===========================
yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: 'Add title to note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        myNotes.addNote(argv.title, argv.body)
    }
})

//DELETE========================
yargs.command({
    command: 'delete',
    describe: 'Delete an added note',
    builder: {
        title: {
            describe: 'To delete an note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        if (argv.title === '') {
            console.log(chalk.bgBlue.black('Please enter an valid name...'))
        } else {
            myNotes.deleteNote(argv.title)
        }
    }
})

//LIST==========================
yargs.command({
    command: 'list',
    describe: 'List the titles of all saved notes...',
    handler: () => {
        myNotes.listNotes()
    }
})

//READ==========================
yargs.command({
    command: 'read',
    describe: 'To read an existing note',
    builder:{
        title:{
            describe: 'Title of note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        myNotes.readNote(argv.title)
    }
})

yargs.parse()




// console.log(yargs.argv)
// console.log(process.argv)
// console.log(validator.isEmail('alok@gmail.co.in'))
// console.log(validator.isURL('http://google.com'))
// console.log(chalk.bold.green('Success!'))
// console.log(myNotes())