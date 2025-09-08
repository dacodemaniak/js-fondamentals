class Repository {
    tasks = new Map()
    #nextId = 1

    getAll() {
        return Array.from(this.tasks.values)
    }

    add(data) {
        const id = this.#nextId++

        data.id = id

        this.tasks.set(id, data)

        return data
    }

    remove (id) {
        return this.tasks.delete(id)
    }
}

module.exports = new Repository()