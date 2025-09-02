import { TemplateHandler } from "../core/template-handler"

export class TasksToDom {
    #templateHandler = null
    #taskCollection = null

    constructor(taskCollection) {
        this.#taskCollection = taskCollection
        this.#templateHandler = new TemplateHandler('card-template')
    }

    build() {
        const template = this.#templateHandler.clone()

        this.#taskCollection.collection.forEach((item) => {
            template.querySelector('.card')
                .setAttribute('id', 'id_' + item.id)

            template.querySelector('.card-checkbox')
                .setAttribute('id', 'checkbox_' + item.id)

            template.querySelector('.card-title')
                .innerHTML = `<h2>${item.title}</h2>`

            template.querySelector('.card-content')
                .innerHTML = `<p>${item.content}</p>`

            // Greffer le contenu à un noeud existant
            document.getElementById('task-dock')
                .appendChild(template)
        })
    }
}