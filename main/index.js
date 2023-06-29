const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
//const {Circle, Triangle, Square} = require("./lib/shapes")
const Circle = require("./lib/circle")
const Triangle = require("./lib/triangle")
const Square = require("./lib/square")
const shapes = require("./lib/shapes")


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
    name: 'shape_color',
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
      console.log(data)
      if(data.shape == "Triangle"){
        let shape = new Triangle(questions.shape_color, questions.text, questions.shape)
        fs.writeFileSync('logo.svg', shape.render());
      }
      else if(questions.shape == "Square"){
        let shape = new Square(questions.shape_color, questions.text, questions.shape)
        fs.writeFileSync('logo.svg', shape.render());
    }
      else {
        let shape = new Circle(questions.shape_color, questions.text, questions.shape)
        fs.writeFileSync('logo.svg',`${Circle.render()}`)
      };
    })
}
   





init();