import * as vscode from 'vscode';

export const disable = (context: vscode.ExtensionContext) => {
    if (context.globalState.get('nugget.enabled')) { 
        context.globalState.update('nugget.enabled', false);
        vscode.window.showInformationMessage('Nugget is now inactive!');
        return;
    }
};

export const enable = (context: vscode.ExtensionContext) => {
    if (context.globalState.get('nugget.enabled')) { return }
    context.globalState.update('nugget.enabled', true);
    vscode.window.showInformationMessage('Nugget is now active!');
};
