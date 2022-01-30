# CLI-Notes-app
Command line based very basic notes app developed using JavaScript and NodeJS env

Before starting using the application run 'npm init' command to download dependencies.

>>>>Add an note in your local json file:
      node app.js add --title="My note 1" --body="Text inside note"
      'title' and 'body' arguments are compulsory while adding a new note

>>>>List all notes saved in .json file
      node app.js list

>>>>Show content of an particular note
      node app.js show --title='My note 1'
      'title' field is mandatory
    
>>>>Delete an existing note
      node app.js delete --title='My note 1'
      'title' argument is mandatory while deleting note (name of the note you want to delete should match with note saved)
