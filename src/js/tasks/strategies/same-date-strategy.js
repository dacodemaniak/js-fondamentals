import { DateStrategy } from "./date-strategy";

export class SameDateStrategy extends DateStrategy {
    transform() {
        const dateParts = [
            ('0' + this.task.beginAt.getDate()).slice(-2),
            ('0' + (this.task.beginAt.getMonth() + 1)).slice(-2),
            this.task.beginAt.getFullYear()
        ]

        const beginHourParts = [
            ('0' + this.task.beginAt.getHours()).slice(-2),
            ('0' + this.task.beginAt.getMinutes()).slice(-2)
        ]

        const endHourParts = [
            ('0' + this.task.endAt.getHours()).slice(-2),
            ('0' + this.task.endAt.getMinutes()).slice(-2)
        ]

        return `${dateParts.join('/')} ${beginHourParts.join(':')} ${endHourParts.join(':')}`
    }
}