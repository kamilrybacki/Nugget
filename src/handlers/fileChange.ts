import * as vscode from 'vscode';

const onFileChange = vscode.workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
    vscode.window.showInformationMessage(`File changed: ${e.document.fileName}`);
});

export default onFileChange;
