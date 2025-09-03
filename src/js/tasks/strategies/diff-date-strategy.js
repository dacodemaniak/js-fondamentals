import { DateStrategy } from "./date-strategy";

export class DiffDateStrategy extends DateStrategy {

        transform() {
        const beginAtParts = [
            ('0' + this.task.beginAt.getDate()).slice(-2),
            ('0' + (this.task.beginAt.getMonth() + 1)).slice(-2),
            this.task.beginAt.getFullYear()
        ]

        const endAtParts = [
            ('0' + this.task.endAt.getDate()).slice(-2),
            ('0' + (this.task.endAt.getMonth() + 1)).slice(-2),
            this.task.endAt.getFullYear()
        ]

        const beginHourParts = [
            ('0' + this.task.beginAt.getHours()).slice(-2),
            ('0' + this.task.beginAt.getMinutes()).slice(-2)
        ]

        const endHourParts = [
            ('0' + this.task.endAt.getHours()).slice(-2),
            ('0' + this.task.endAt.getMinutes()).slice(-2)
        ]

        return `${beginAtParts.join('/')} ${beginHourParts.join(':')} - ${endAtParts.join('/')} ${endHourParts.join(':')}`
    }

}