import { MatchData } from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    output(report: string): void
}
export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const analyzeResult = this.analyzer.run(matches);
        this.outputTarget.output(analyzeResult);
    }
}