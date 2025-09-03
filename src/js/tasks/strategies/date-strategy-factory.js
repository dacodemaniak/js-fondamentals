import { DiffDateStrategy } from "./diff-date-strategy";
import { SameDateStrategy } from "./same-date-strategy";

export class DateStrategyFactory {
    getStrategy (task) {
        let strategy = null

        // Compare dates
        if (
            task.beginAt.getFullYear() === task.endAt.getFullYear() &&
            task.beginAt.getMonth() === task.endAt.getMonth() &&
            task.beginAt.getDate() === task.endAt.getDate()
        ) {
            strategy = new SameDateStrategy()
        } else {
            strategy = new DiffDateStrategy()
        }
        strategy.task = task
        return strategy
    }
}