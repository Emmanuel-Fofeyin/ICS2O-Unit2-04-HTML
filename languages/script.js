// Copyright (c) 2022 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on: march 28 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of triangle.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('hight-of-triangle').value)
  const hight = parseInt(document.getElementById('hight-of-triangle').value)

  // process
  const area = base * hight ÷ 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
