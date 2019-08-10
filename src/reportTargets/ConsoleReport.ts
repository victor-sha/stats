import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget{
    output(report: string) {
        return console.log(report);
    }
}