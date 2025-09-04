export class ButtonRegistry {
    #registry = new Map()

    constructor() {
        this.#setRegistry()
    }

    getButton(key) {
        if (this.#registry.has(key)) {
            return this.#registry.get(key)
        }
        throw new Error(`No button associated to key ${key}`)
    }

    #setRegistry() {
        const children = document.querySelector('.button-bar').children
        for (const child of children) {
            if (child.tagName === 'BUTTON') {
                // Récupère le premier enfant du bouton (icon)
                const icon = child.firstElementChild
                const iconName = icon.classList[0]
                this.#registry.set(
                    iconName.substring(5, iconName.length),
                    child
                )
            }
        }
    }
}