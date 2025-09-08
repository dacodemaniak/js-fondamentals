export class TaskService {
    static #api = 'http://localhost:3000/tasks'

    getAll() {
        return fetch(
            TaskService.#api
        )
        .then((response) => response.json())
    }

    add (item) {
        const fetchOptions = {
            method: 'POST',
            body: JSON.stringify(item)
        }

        return fetch(
            TaskService.#api,
            fetchOptions
        ).then((response) => response.json())
    }
}