// Copyright (c) 2022 Samuel All rights reserved
//
// Created by: Samuel Carlson
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function displayNumbers() {
  	
	// initalize numbers as an empty string
	let numbers = ""
	
	// get the user number
	let userMin = parseInt(document.getElementById('userMin').value)

  // get the user number
  let userMax = parseInt(document.getElementById('userMax').value)	

  // initialize the counter to 0
	let counter = userMin
  
	// use a while loop to display the numbers from 0 up to the user number
	while (counter <= userMax) {
		// build the string of numbers with a line break each time
		numbers = numbers + counter + "<br>"
		// increment the counter
		counter = counter +1
	}
	
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = numbers
}
