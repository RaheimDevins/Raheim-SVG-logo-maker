const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const {Circle, Triangle, Square} = require("./lib/shapes")
const shapes = require("./lib/shapes")

class ABV{
  constructor(){
    this.text = ""
    this.shape = ""
  }
  render(){
    return `<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg"/>`
  }
  setText(text,color){
    this.text = `<text x="10" y="10" font-size="30" text-anchor="middle"</text>`
  }
  setShape(shape){
    this.shape = shape.render()
  }
  
}

const questions =[
  {
    type: 'input',
    name: 'text',
    message: 'Please enter 3 Characters?',
  },
  {
    type: 'input',
    name: 'text color',
    message: 'What color would you like your text?',

  },
  {
    type: 'checkbox',
    name: 'shape',
    message: 'What shape would you like?',
    choices: ['Circle', 'Triangle', 'Square'],

  },
  {
    type: 'input',
    name: 'shape color',
    message: 'What color would you like your shape?',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err)
    } else {
      console.log('success')
    }
  })
}


function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      writeToFile('logo.svg', shapes.js(data));
    })
}






init();