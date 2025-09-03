import { DateStrategyFactory } from "../src/js/tasks/strategies/date-strategy-factory.js"
import { DiffDateStrategy } from "../src/js/tasks/strategies/diff-date-strategy.js"
import { SameDateStrategy } from "../src/js/tasks/strategies/same-date-strategy.js"
import { TaskModel } from "../src/js/tasks/task-model.js"

describe(`Date strategy`, () => {
    it('Should return a SameDateStrategy object', () => {
        const model = new TaskModel()
        model.id = 1
        model.title = "Première tâche"
        model.content = "Contenu de la tâche"
        model.beginAt = new Date('2025-09-01 09:00')
        model.endAt = new Date('2025-09-01 17:00')

        const factory = new DateStrategyFactory()
        const strategy = factory.getStrategy(model)

        expect(strategy).toBeInstanceOf(SameDateStrategy)

    })

    it('Should return a DiffDateStrategy object', () => {
        const model = new TaskModel()
        model.id = 1
        model.title = "Première tâche"
        model.content = "Contenu de la tâche"
        model.beginAt = new Date('2025-09-01 09:00')
        model.endAt = new Date('2025-09-02 17:00')

        const factory = new DateStrategyFactory()
        const strategy = factory.getStrategy(model)

        expect(strategy).toBeInstanceOf(DiffDateStrategy)

    })

    it('Should return a 01/09/2025 09:00 17:00 string', () => {
        const model = new TaskModel()
        model.id = 1
        model.title = "Première tâche"
        model.content = "Contenu de la tâche"
        model.beginAt = new Date('2025-09-01 09:00')
        model.endAt = new Date('2025-09-01 17:00')

        const factory = new DateStrategyFactory()
        const strategy = factory.getStrategy(model)

        const expectedString = '01/09/2025 09:00 17:00'
        expect(strategy.transform()).toBe(expectedString)

    })

   it('Should return a 01/09/2025 09:00 02/09/2025 17:00 string', () => {
        const model = new TaskModel()
        model.id = 1
        model.title = "Première tâche"
        model.content = "Contenu de la tâche"
        model.beginAt = new Date('2025-09-01 09:00')
        model.endAt = new Date('2025-09-02 17:00')

        const factory = new DateStrategyFactory()
        const strategy = factory.getStrategy(model)

        const expectedString = '01/09/2025 09:00 - 02/09/2025 17:00'
        expect(strategy.transform()).toBe(expectedString)
        expect(strategy).toBeInstanceOf(DiffDateStrategy)

    })
})