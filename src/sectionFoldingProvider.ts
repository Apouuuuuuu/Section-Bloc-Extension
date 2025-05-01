import * as vscode from 'vscode';

export class SectionFoldingProvider implements vscode.FoldingRangeProvider {
  provideFoldingRanges(
    document: vscode.TextDocument,
    _context: vscode.FoldingContext,
    _token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.FoldingRange[]> {
    const ranges: vscode.FoldingRange[] = [];
    const startStack: { line: number; label: string }[] = [];

    for (let i = 0; i < document.lineCount; i++) {
      const rawLine = document.lineAt(i).text.trim();

      const line = rawLine
        .replace(/^\/\//, '')    // //
        .replace(/^#/, '')       // #
        .replace(/^\/\*/, '')    // /*
        .replace(/\*\/$/, '')    // */
        .replace(/^<!--/, '')    // <!--
        .replace(/-->$/, '')     // -->
        .trim();

      // Detection start
      const sectionMatch = line.match(/^@section:\s*(.+)$/i);
      if (sectionMatch) {
        startStack.push({ line: i, label: sectionMatch[1] });
        continue;
      }

      // Detection end
      const endMatch = /^@endsection\b/i.test(line);
      if (endMatch && startStack.length > 0) {
        const start = startStack.pop()!;
        const end = i;
        ranges.push(new vscode.FoldingRange(start.line, end, vscode.FoldingRangeKind.Region));
      }
    }

    return ranges;
  }
}
