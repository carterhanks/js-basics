/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

//let gitDefinition = 'Git is a program that allows you to track changes (version control) and back up your work remotely from your terminal. It also allows you to push your work up to an online repository with a note of your changes where others can then take and build off of your work if they wish/you allow.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

// let gitHubDefinition = 'GitHub is an online repository in which you can push your work to remotely. It offers a place to back up your work that you can access from anywhere, and you can keep track of changes in your work or share it with others remotely.'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

//let init = {
//  code: 'git add .',
//  description: 'adds files in your folder to the queue',
//  code: 'git commit -m ""',
//  description: 'allows you to commit your folder with a message in preparation for pushing to github repository',
//  code: 'git init',
//  description: 'initializes git in your current directory',
//  code: 'git remote add origin (URL) + git branch -M main',
//  description: 'connects your current git directory to your online github repository',
//  code: 'push -u origin main',
//  description: 'pushes files in your current directory to your online github repository',
//  code: 'git push',
//  description: 'allows you to push your updated files from the current directory to your github account after you have connected to your online repository. You can also do this command to see if your online repository is up to date.'
//}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

// let clone = {
//     code: 'git clone (URL) .',
//     description: 'allows you to clone an online repository to your current directory with its original name.'
// }

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

// let status = {
//     code: 'git status',
//     description: 'Allows you to see multiple things like if you have enabled git in your directory(if your files are being tracked or not), and if files are ready to be pushed or not.'
// }

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

// let add = {
//     code: 'git add .',
//     description: 'Prepares / stages files in your current directory for pushing to your online repository.'
// }

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

// let commit = {
//     code: 'git commit -m ""',
//     description: 'allows you to commit your folder with a message in preparation for pushing to github repository'
// }

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

// let push = {
//     code: 'git push',
//     description: 'allows you to push your updated files from the current directory to your github account after you have connected to your online repository. You can also do this command to see if your online repository is up to date.'
// }