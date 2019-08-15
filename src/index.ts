import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// const csvFileReader = new CsvFileReader('football.csv');
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
