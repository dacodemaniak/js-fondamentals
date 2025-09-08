import { Collection } from "../core/collection"
import { TaskModel } from "./task-model"
import { TaskService } from "./task.service"

export class TaskCollection extends Collection {
    #service = null

    constructor() {
        super()
        this.collection = []
        this.#populate()
        this.#service = new TaskService()
    }

    /**
     * @override
     * @param TaskModel item 
     * @returns Collection
     * @throws Error if param is not a TaskModel
     */
    add(item) {
        if (item instanceof TaskModel) {
            this.collection.push(item)
            this.#service.add(item)
            return this
        }
        throw new Error(`Item is not a TaskModel`)
    }

    /**
     * @override
     * @param {TaskModel} item 
     * @returns Collection
     * @throws Error if param is not a TaskModel
     * @throws Error if param was not found
     */
    update(item) {
        if (item instanceof TaskModel) {
            const itemIndex = this.collection.findIndex((obj) => obj.id === item.id)
            
            if (itemIndex !== -1) {
                this.collection.splice(
                    itemIndex,
                    1,
                    item
                )
                return this
            } else {
                throw new Error(`Item was not found`)
            }
        }
        throw new Error(`Item is not a TaskModel`)
    }

    remove(item) {
        if (item instanceof TaskModel) {
            const itemIndex = this.collection.findIndex((obj) => obj.id === item.id)
            
            if (itemIndex !== -1) {
                this.collection.splice(
                    itemIndex,
                    1
                )
                return this
            } else {
                throw new Error(`Item was not found`)
            }
        }
        throw new Error(`Item is not a TaskModel`)
    }

    serializeAndPush(rawData) {
        const model = new TaskModel()

        model.id = this.#getNextId()
        model.title = rawData.title
        model.content = rawData.content
        model.beginAt = new Date(rawData.beginAt)
        model.endAt = new Date(rawData.endAt)
        
        this.add(model)

        const rawDatas = this.collection.map((task) => {
            const deserialize = {
                id: task.id,
                title: task.title,
                content: task.content,
                beginAt: task.beginAt,
                endAt: task.endAt
            }
            return deserialize
        })
        localStorage.setItem('__TASKS__', JSON.stringify(rawDatas))
    }

    #getNextId() {
        if (this.collection.length > 0) {
            return [... this.collection]
                .sort((t1, t2) => t2.id - t1.id)[0].id
        }

        return 1
    }

    async #populate() {
        let rawData = localStorage.getItem('__TASKS__')

        if (!rawData) {
            // Consume endpoint
            rawData = await this.#service.getAll()
        }

        if (rawData) {
            // Deserialize data with a map function
            this.collection = JSON.parse(rawData)
                .map((item) => {
                    const model = new TaskModel()
                    model.id = item.id
                    model.title = item.title
                    model.content = item.content
                    model.beginAt = new Date(item.beginAt)
                    model.endAt = new Date(item.endAt)

                    return model
                })
        }
    }
}