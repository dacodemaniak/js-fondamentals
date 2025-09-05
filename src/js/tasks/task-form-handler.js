import { TemplateHandler } from "../core/template-handler"
import $ from 'jquery'

export class TaskFormHandler {
    #controls = new Map([
        ['title', {
            required: true,
            validation:  this.#requiredField(),
            errors: ['Le titre ne peut pas être vide']
        }],
        [
            'content', {
                required: true,
                validation:  this.#requiredField(),
                errors: ['Le titre ne peut pas être vide']
            }
        ],
        [
            'beginAt', {
                required: true,
                validation:  this.#requiredField(),
                errors: ['La date de début ne peut pas être vide']
            }
        ],
        [
            'endAt', {
                required: true,
                validation:  this.#requiredField(),
                errors: [
                    'La date de fin ne peut pas être vide',
                    'La date de fin ne peut pas être antérieure à la date de début'
                ]
            }
        ]
    ])

    #templateHandler = new TemplateHandler('form-template')

    constructor() {}

    get templateHandler() {
        return this.#templateHandler
    }

    focusHandler() {
        // Délégation d'événements pour les éléments dynamiques
        $(document).on('focus', 'form input, form textarea', function(event) {
            
            const $element = $(this)
            // Place animation on focused element
            $element.addClass('got-focus')
            setTimeout(() => {
                $element.removeClass('got-focus')
            }, 700)

            // Remove error message if necessary
            const errorPlaceholder = $element.parent('div').children('error')
            if (!errorPlaceholder.hasClass('no-display')) {
                console.log(`Need to add the no-display class`)
                errorPlaceholder.addClass('no-display')
            }
        })
    }


    blurHandler() {
        // Délégation d'événements pour les éléments dynamiques
        const controls = this.#controls
        $(document).on('blur', 'form input, form textarea', function(event) {
            const element = $(this)
            const controlName = element.attr('name')
            const validationFunction = controls.get(controlName).validation
            validationFunction(controlName)
        })
    }

    #requiredField () {
        return (control) => {
            const selector = `input[name="${control}"]`
            console.log(`Gather value from ${selector}`)
            const field = $(selector)
            const value = field.val().trim()

            if (value === '') {
                // Get the next error div
                const errorPlaceholder = $(selector).parent('div').children('error')
                errorPlaceholder.text(this.#controls.get(control).errors[0])
                errorPlaceholder.removeClass('no-display')
            }
        }
    }
}