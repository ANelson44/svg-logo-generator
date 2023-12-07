const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib.shapes');

class Svg {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Logo Text: Enter up to three (3) characters.',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Logo Text Color: Enter a color keyword or hexadecimal number.',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select which shape you would like for the logo.',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Shape Color: Enter a color keyword or hexidecimal number',
    },
];

function writeToFile(fileName, data) {
    console.log('Writing [' + data + '] to file [' + fileName + ']')
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('logo.svg has been generated!')
    });
}