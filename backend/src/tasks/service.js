const repository = require('./repository')
class Service {


    getAll() {
        return repository.getAll()
    }

    add (task) {
        return repository.add(task)
    }

    remove (id) {
        return repository.remove(id)
    }
}

module.exports = new Service()