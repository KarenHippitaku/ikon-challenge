//Welcome to the module
module.exports = (givenPath, ids) => { //With this line, you can export the whole thing from the beginning
	'use strict';
	return new Promise ((resolve) => {
		const fs = require('fs'); //The file system module
		const path = require('path'); //The path module provides utilities for working with file and directory paths *Windows-style paths* :(
		const rl = require('readline'); //To read line by line
		const cwd = process.cwd(); //Returns the directory of the process, Current Working Directory
		
		let taskCollection = []; //A bunch of tasks 
		let parsedTasks = []; //Let´s count! One task, two tasks, thrrrrrree tasks
		
		const readFile = (givenPath) => {
			return new Promise ((resolve, reject) => {
				fs.readFile(givenPath, 'utf8', (err, file) => {
					if (err) {
						reject(err);
						console.error('¡Algo salió mal! ¿Seguro que era ahí? (⊙﹏⊙)');
					} else {
						let readableData = data.toString(); //without this line, we'll get buffer data with numbers
						resolve(file);
						console.log(readableData);
					}
// 					return err ? reject(err) : resolve(file); //It can also responde this way, but I want to use the if else for now
				})
			})
			const getOperations = (inFile) => {
				inFile = inFile.split('\n');
				inFile.forEach(element => {
					const regExTask = /[\D+(?=\d)+(,)+(?=\d)+\D]*/g; //I am not sure if this RegExp works   
					if (element.matchAll(regExTask) !== null) {
						let taskLine = element.matchAll(regExTask);
						taskCollection.push(taskLine);
					} else {
						let resource = element;
					}
				})
			}
		}
	})
}
