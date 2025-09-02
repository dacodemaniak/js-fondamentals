import { Collection } from "../core/collection"
import { TaskModel } from "./task-model"

export class TaskCollection extends Collection {
    constructor() {
        super()
        this.collection = []
        this.#populate()
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
            return this
        }
        throw new Error(`Item is not TaskModel`)
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

    #populate() {
        let model

        model = new TaskModel()
        model.id = 1
        model.title = "Première tâche"
        model.content = "Contenu de la tâche"
        model.beginAt = new Date('2025-09-01 09:00')
        model.endAt = new Date('2025-09-01 17:00')

        this.collection.push(model)
    }
}