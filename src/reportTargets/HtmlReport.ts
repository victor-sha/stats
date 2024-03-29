import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  output(report: string): void {
    const html = `
            <div>
                <h1>Analysis Output</h1>
                <p>${report}</p>
            </div>
        `;
    fs.writeFileSync('report.html', html);
  }
}
