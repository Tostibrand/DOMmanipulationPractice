const list = document.querySelector(`ul`);
const input = document.querySelector(`input`);
const button = document.querySelector(`button`);

button.addEventListener(`click`, () => {
    const myInput = input.value;
    // to clear the input field after `Add item` has been pressed
    input.value = ``

    const newListElement = document.createElement(`li`)
    const newSpan = document.createElement(`span`)
    const newButton = document.createElement(`button`)

    newListElement.appendChild(newSpan);
    newListElement.appendChild(newButton);

    newSpan.textContent = myInput
    // to name the button
    newButton.textContent = `delete`
    
    //to delete the list entry 
    newButton.addEventListener(`click`, () => {
        list.removeChild(newListElement)
        })

    // to add new list element to the list
    list.appendChild(newListElement)

    input.focus({focusVisible: true})


    
})