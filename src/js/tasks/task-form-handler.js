import { TemplateHandler } from "../core/template-handler"
import { TaskCollection } from "./task-collection"
import { TaskModel } from './task-model'
import $ from 'jquery'
import { TasksToDom } from "./tasks-to-dom"

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
    #collection = new TaskCollection()

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

    onSubmit (modalRef) {
        return () => {
            const rawData = {
                title: '',
                content: '',
                beginAt: new Date(),
                endAt: new Date()
            }
            for (const attribute in rawData) {
                // Get the control
                const controlQuery = `[name="${attribute}"]`
                const control = $(controlQuery)
                if (attribute === 'beginAt' || attribute === 'endAt') {
                    rawData[attribute] = new Date($(control).val())
                } else {
                    rawData[attribute] = $(control).val()
                }
            }
            this.#collection.serializeAndPush(rawData)
            modalRef.remove()

            // Trigger a redraw
            $('#task-dock').children().remove()
            new TasksToDom(new TaskCollection()).build()
        }
    }

    #requiredField () {
        return (control) => {
            const selector = `[name="${control}"]`
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