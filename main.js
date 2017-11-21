#! /usr/local/bin/node

const yargs = require('yargs')
const figlet = require('figlet')
const options = ['rock', 'paper', 'scissors']

function rps() {
  const {entry} = yargs.argv
  figlet('rock paper scissors', (err, data) => {
    if(err) {
      console.log('Something went wrong')
      console.dir(err)
      return
    } else {
      console.log(data)
      
      if(!options.includes(entry)) {
        console.log('Please include a --entry= argument with one of the following: rock, paper, scissors')
        return
      }
    
      let computerChoice = options[Math.floor(Math.random() * 3)]
    
      console.log(`You chose ${entry}. Computer chose ${computerChoice}.`)
      if((entry === 'rock' && computerChoice === 'paper') 
      || (entry === 'paper' && computerChoice === 'scissors') 
      || (entry === 'scissors' && computerChoice === 'rock')) {
        console.log('Computer wins!')
      } else if (entry === computerChoice) {
        console.log('You tied.')
      } else {
        console.log('You win!')
      }
    }
  })
}

rps()
