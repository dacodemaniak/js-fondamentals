import $ from 'jquery'
import { TaskFormHandler } from '../tasks/task-form-handler'

export class OpenModal {
    #button = null

    #outerCss = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'hsla(192, 70%, 73%, .6)'
    }

    #form = null

    constructor(buttonRegistry) {
        this.#button = buttonRegistry.getButton('plus')
        this.#placeEventListener()
        this.#form = new TaskFormHandler()
    }

    #placeEventListener () {
        this.#button.addEventListener(
            'click',
            (event) => {
                this.#buildModal()
            } 
        )
    }

    #buildModal() {
        const outerModal = $('<div>', {id: 'outer-modal'}) // Outer modal is created in DOM memory
        
        const modalHeader = $('<div>', {
            id: 'modal-header',
            css: {
                'height': '3em',
                'display': 'flex',
                'justify-content': 'space-between',
                'background': 'hsl(200, 95%, 34%)',
                'border-bottom': 'solid 1px hsl(200, 95%, 0%)'
            }
        })

        // Back button + handler
        const backButton = $('<div>', {
            css: {
                'display': 'flex',
                'height': '2em',
                'width': '2em',
                'margin-left': '1em'
            }
        })

        // Attach event to backButton
        backButton.on(
            'click',
            (event) => outerModal.remove()
        )

        const backIcon = $('<i>', {
            class: 'icon-arrow-left',
            css: {
                'line-height': '2em',
                'vertical-align': 'middle',
                'color': '#fff'
            }
        })
        backButton.append(backIcon)

        // Check button + handler
        const checkButton = $('<div>', {
            css: {
                'display': 'flex',
                'height': '2em',
                'width': '2em',
                'margin-left': '1em'
            }
        })

        // Attach event to backButton
        checkButton.on(
            'click',
            this.#form.onSubmit(outerModal)
        )

        const checkIcon = $('<i>', {
            class: 'icon-checkmark',
            css: {
                'line-height': '2em',
                'vertical-align': 'middle',
                'color': '#fff',
                'justify-content': 'flex-end'
            }
        })
        checkButton.append(checkIcon)

        modalHeader.append(backButton)
        modalHeader.append(checkButton)

        modalHeader.appendTo(outerModal)

        // Design outer modal
        for (const attribute in this.#outerCss) {
            outerModal.css(attribute, this.#outerCss[attribute])
        }

        const innerModal = $('<div>', {
            id: 'inner-modal',
            css: {
                'position': 'absolute',
                'top': '2.5em',
                'height': '100vh',
                'padding': '1em'
            }
        })
        innerModal.append(this.#form.templateHandler.clone())
        outerModal.append(innerModal)

        $('body').append(outerModal)

        // Place les handlers
        this.#form.focusHandler()
        this.#form.blurHandler()

    }
}