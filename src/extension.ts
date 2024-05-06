import * as vscode from 'vscode';
import { declareInterface } from './interface';

export function activate(context: vscode.ExtensionContext) {
    const disposables: vscode.Disposable[] = declareInterface(context);
    disposables.forEach((disposable: vscode.Disposable) => context.subscriptions.push(disposable));
    context.globalState.update('nugget.enabled', true);
    vscode.window.showInformationMessage('Nugget is now active!');
}

export function deactivate() {}
