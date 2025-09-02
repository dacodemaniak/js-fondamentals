export class TemplateHandler {
    #templateId = ''

    constructor(templateId) {
        this.#templateId = templateId
    }

    clone() {
        const template = document.getElementById(this.#templateId)

        if (!template) {
            throw new Error(`No template was found ${this.#templateId}`)
        }

        return document.importNode(template.content, true)
    }
}