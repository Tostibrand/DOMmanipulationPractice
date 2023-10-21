let btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
    alert(event.type + `Clicked!`); // click
});

addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded.');
});

addEventListener('load', (event) => {
    console.log('The page is fully loaded.');
});

addEventListener('beforeunload', (event) => {
    // show the confirmation dialog
    event.preventDefault();
    // Google Chrome requires returnValue to be set.
    event.returnValue = '';
});

addEventListener('unload', (event) => {
    // send analytic data
});