export class DateStrategy {
    #task = null

    set task(task) {
        this.#task = task
    }

    get task() {
        if (this.#task) {
            return this.#task
        }
        throw new Error(`Task is null, please set it before to use`)
    }
    transform() {
        throw new Error(`Transform must be implemented in children classes`)
    }
}