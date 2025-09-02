/**
 * displayTitle
 * @param void
 * @returns void
 * Just display some string in the main HTML page title
 */
const displayTitle = () => {
    const titleSlot = document.querySelector('h1')
    titleSlot.innerText = 'Todolist'
}

/**
 * Self callable function
 */
(() => {
    displayTitle()
})()

