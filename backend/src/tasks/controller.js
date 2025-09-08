const service = require('./service')

class Controller {
    async getAll(req, res) {
        res.status(200).json(
            service.getAll()
        )
    }

    async add(req, res) {
        const task = req.body

        return res.status(201).json(service.add(task))
    }

    async remove(req, res) {
        service.remove(req.params.id)
        return res.status(204)
    }
}

module.exports = new Controller()