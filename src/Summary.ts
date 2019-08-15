import { MatchData } from './MatchData';
import { WinsAnalysis } from './WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  output(report: string): void;
}
export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const analyzeResult = this.analyzer.run(matches);
    this.outputTarget.output(analyzeResult);
  }
}
