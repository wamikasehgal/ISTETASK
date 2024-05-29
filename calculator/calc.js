function addToDisplay(value) 
{
    document.getElementById('display').value += value;
}
// to show on display

function clearDisplay() 
{
    document.getElementById('display').value = '';
}
// clearing 

function calculate() 
{
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}
// done for sq for calculating any expression given

function square() 
{
    var expression = document.getElementById('display').value;
    var squared = eval(expression) ** 2;
    document.getElementById('display').value = squared;
}
// done for sq fror squaring a number
