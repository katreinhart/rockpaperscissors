const yargs = require('yargs')
const options = ['rock', 'paper', 'scissors']

function rps() {
  const {entry} = yargs.argv

  if(!options.includes(entry)) return

  let rand = Math.floor(Math.random() * 3)
  let computerChoice = options[rand]

  console.log(`You chose ${entry}. Computer chose ${computerChoice}.`)
  if((entry === 'rock' && computerChoice === 'paper') 
  || (entry === 'paper' && computerChoice === 'scissors') 
  || (entry === 'scissors' && computerChoice === 'rock')) {
    console.log('Computer wins!')
  } else {
    console.log('You win!')
  }
}

rps()