import { TemplateHandler } from "../core/template-handler"
import $ from 'jquery'

export class TaskFormHandler {
    #controls = new Map([
        ['title', {
            required: true,
            validation:  this.#requiredField('title'),
            errors: ['Le titre ne peut pas être vide']
        }],
        [
            'content', {
                required: true,
                validation:  this.#requiredField('title'),
                errors: ['Le titre ne peut pas être vide']
            }
        ],
        [
            'beginAt', {
                required: true,
                validation:  this.#requiredField('title'),
                errors: ['La date de début ne peut pas être vide']
            }
        ],
        [
            'endAt', {
                required: true,
                validation:  this.#requiredField('title'),
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

    #requiredField (controlName) {
        return (controlName) => {
            const selector = `input[name="${controlName}"]`
            const field = $(selector)
            const value = field.val().trim()

            if (value === '') {
                // Get the next error div
                const errorPlaceholder = selector.parent('div').children('error')
                errorPlaceholder.text(this.#controls.get(controlName).errors[0])
                errorPlaceholder.removeClass('no-display')
            }
        }
    }
}