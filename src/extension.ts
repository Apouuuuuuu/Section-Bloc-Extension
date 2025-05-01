import * as vscode from 'vscode';
import { SectionFoldingProvider } from './sectionFoldingProvider';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const supportedLanguages = [
    'python',
    'javascript',
    'typescript',
    'html',
    'css',
    'scss',
    'php',
    'cpp',
    'c',
    'java',
    'shellscript',
    'jsonc',
    'xml',
    'yaml',
    'markdown'
  ];

  for (const lang of supportedLanguages) {
    const provider = vscode.languages.registerFoldingRangeProvider(
      { language: lang, scheme: 'file' },
      new SectionFoldingProvider()
    );
    context.subscriptions.push(provider);
  }

  const config = vscode.workspace.getConfiguration('sectionBloc');
  const enableHighlight = config.get<boolean>('enableHighlight', true);
  const backgroundColor = config.get<string>('highlightBackground', '#173f30');
  const foregroundColor = config.get<string>('highlightForeground', '#d0f5d0');

  let sectionDecoration: vscode.TextEditorDecorationType | undefined;

  if (enableHighlight) {
    sectionDecoration = vscode.window.createTextEditorDecorationType({
      isWholeLine: true,
      backgroundColor,
      color: foregroundColor,
      gutterIconPath: vscode.Uri.file(
        path.join(context.extensionPath, 'resources', 'section-icon.svg')
      ),
      gutterIconSize: 'contain',
    });
  }

  const updateDecorations = (editor: vscode.TextEditor | undefined) => {
    if (!editor || !sectionDecoration) return;

    const regEx = /@section:/;
    const decorations: vscode.DecorationOptions[] = [];

    for (let i = 0; i < editor.document.lineCount; i++) {
      const line = editor.document.lineAt(i);
      if (regEx.test(line.text)) {
        decorations.push({ range: line.range });
      }
    }

    editor.setDecorations(sectionDecoration, decorations);
  };

  if (vscode.window.activeTextEditor) {
    updateDecorations(vscode.window.activeTextEditor);
  }

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(updateDecorations),
    vscode.workspace.onDidChangeTextDocument(event => {
      if (
        vscode.window.activeTextEditor &&
        event.document === vscode.window.activeTextEditor.document
      ) {
        updateDecorations(vscode.window.activeTextEditor);
      }
    })
  );

  const insertSectionCommand = vscode.commands.registerCommand('sectionBloc.insertSection', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const sectionName = await vscode.window.showInputBox({
      prompt: 'Section name',
      placeHolder: 'e.g. Initialization'
    });

    if (!sectionName) return;

    const languageId = editor.document.languageId;
    const prefix = getCommentPrefix(languageId);
    const suffix = getCommentSuffix(languageId);

    const snippet = `${prefix} @section: ${sectionName}${suffix}\n$0\n${prefix} @endsection${suffix}`;
    editor.insertSnippet(new vscode.SnippetString(snippet));
  });

  context.subscriptions.push(insertSectionCommand);

  console.log('Section Bloc extension is now active!');
}

function getCommentPrefix(languageId: string): string {
  switch (languageId) {
    case 'python':
    case 'shellscript':
    case 'yaml':
      return '#';
    case 'html':
    case 'xml':
    case 'markdown':
      return '<!--';
    case 'css':
    case 'scss':
    case 'c':
    case 'cpp':
    case 'java':
    case 'php':
      return '/*';
    default:
      return '//';
  }
}

function getCommentSuffix(languageId: string): string {
  switch (languageId) {
    case 'html':
    case 'xml':
    case 'markdown':
      return ' -->';
    case 'css':
    case 'scss':
    case 'c':
    case 'cpp':
    case 'java':
    case 'php':
      return ' */';
    default:
      return '';
  }
}

export function deactivate() {}
