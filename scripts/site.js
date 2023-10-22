"use strict";

/**
 * this javascript manages all table generations and updates on the website
 * @author Bianca Rossetti - 2233420
 * 
 */

document.addEventListener("DOMContentLoaded", setup);

/**
 * This function is responsible for generating javascript after the DOM has been loaded
 * @param {Event} event
 */
function setup (event) {

  const form = document.forms[0];
  form.addEventListener("input", tableParams);

}

// your functions
/**
 * This function properly sets the values of input fields into variables 
 * and calls the createTable function once values are retrieved with proper parameters
 * @param {Event} event 
 */
function tableParams(event)
{
  let formElements = event.currentTarget.elements;
  let rows = formElements.rows.value;
  let cols = formElements.cols.value;
  let color1 = formElements.color1.value;
  let color2 = formElements.color2.value;
  createTable(rows, cols, color1, color2);
}

/**
 * This function takes 4 inputs representing the dimensions and colors of the table 
 * and creates the table based on these parameters using a nested loop, generated elements, 
 * and DOM manipulation. It also takes care of creating the checkerboard colors
 * @param {number} rowNum - number of rows the table has to take
 * @param {number} colNum - number of columns the table has to take
 * @param {string} even - color of all even cells
 * @param {string} odd color of all odd cells
 */
function createTable(rowNum, colNum, even, odd)
{
  const tableSection = document.getElementById("tableHere");
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");

  tableSection.replaceChild(table, tableSection.children[0]);
  table.appendChild(tbody);

  for (let rows = 0; rows < rowNum; ++rows)
  {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let curColor = even;

    if (rows%2 !== 0)
    {
      curColor = odd;
    }

    for (let col = 0; col < colNum; ++col)
    {
      let td = document.createElement("td");

      if (curColor === even)
      {
        td.style.backgroundColor = even;
        curColor = odd;
      }
      else
      {
        td.style.backgroundColor = odd;
        curColor = even;
      }

      td.textContent = rows + ", " + col;

      tr.appendChild(td);
    }
  }
}