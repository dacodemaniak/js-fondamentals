export class TaskModel {
    #id = 0
    #title = ''
    #content = ''
    #beginAt = new Date()
    #endAt = new Date()

    set id(id) {
        this.#id = id
    }

    get id() {
        return this.#id
    }

    set title(title) {
        this.#title = title
    }

    get title() {
        return this.#title
    }

    set content(content) {
        this.#content = content
    }

    get content() {
        return this.#content
    }

    set beginAt(date) {
        if (date instanceof Date) {
            this.#beginAt = date
        } else {
            throw new Error(`A date must be given`)
        }
    }

    get beginAt() {
        return this.#beginAt
    }

    set endAt(date) {
        if (date instanceof Date) {
            this.#endAt = date
        } else {
            throw new Error(`A date must be given`)
        }
    }

    get endAt() {
        return this.#endAt
    }
}