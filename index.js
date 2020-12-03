const { take } = require('lodash');
const lodash = require('lodash')
const moment = require('moment')
const yargs = require('yargs');
const Task = require('./model/Task')


const args = yargs.argv;
var command = argv._[0];

console.log('Running Command', command);
//data structure
let map = new Map();
if (command === 'addtoList') {
    Task.addtoList(argv.text);
} else {
    console.log('Invalid command.');
}

function addtoList(text){
    Task.set()
}

function editTask(){

}

function viewTask(){

}

function searchTask(){

}

module.exports = {
}
console.log('hello')