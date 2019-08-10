import { MatchData } from "./MatchData";
import { Analyzer } from "./Summary";
import { MatchResult } from "./MatchResult";

export class WinsAnalysis implements Analyzer{
    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        let win = 0;
        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
                win++;
            } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
                win++;
            }
        }
        return `${this.teamName} wins ${win} games`;
    }
}