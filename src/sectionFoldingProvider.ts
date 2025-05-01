import * as vscode from 'vscode';

export class SectionFoldingProvider implements vscode.FoldingRangeProvider {
  provideFoldingRanges(
    document: vscode.TextDocument,
    _context: vscode.FoldingContext,
    _token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.FoldingRange[]> {
    const ranges: vscode.FoldingRange[] = [];
    const stack: number[] = [];

    for (let i = 0; i < document.lineCount; i++) {
      const lineText = document.lineAt(i).text.trim();

      // Match les lignes @section et @endsection
      const isSectionStart = /^(\s*#|\s*\/\/)\s*@section\b/.test(lineText);
      const isSectionEnd = /^(\s*#|\s*\/\/)\s*@endsection\b/.test(lineText);

      if (isSectionStart) {
        stack.push(i);
      } else if (isSectionEnd && stack.length > 0) {
        const startLine = stack.pop()!;
        const endLine = i;
        ranges.push(new vscode.FoldingRange(startLine, endLine, vscode.FoldingRangeKind.Region));
      }
    }

    return ranges;
  }
}
