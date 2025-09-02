import { TaskCollection } from "./tasks/task-collection"
import { TasksToDom } from "./tasks/tasks-to-dom"

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

    // Instancie un objet de collecte des tâches
    const taskRepository = new TaskCollection()
    new TasksToDom(taskRepository)
        .build()
})()

