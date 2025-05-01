import * as vscode from 'vscode';
import { SectionFoldingProvider } from './sectionFoldingProvider';

export function activate(context: vscode.ExtensionContext) {
    const supportedLanguages = [
        'python',
        'javascript',
        'typescript',
        'html',
        'css',
        'php',
        'java',
        'shellscript',
        'yaml',
      ];
      
  for (const lang of supportedLanguages) {
    const provider = vscode.languages.registerFoldingRangeProvider(
      { language: lang, scheme: 'file' },
      new SectionFoldingProvider()
    );
    context.subscriptions.push(provider);
  }

  console.log('Section Bloc extension is now active!');
}

export function deactivate() {}
