import * as vscode from 'vscode'

import { disable, enable } from './handlers/toggle';
import onFileChange from './handlers/fileChange';

type DisposableCallback = (context: vscode.ExtensionContext) => void;

const availableCommandImplementations: { [key: string]: vscode.Disposable | DisposableCallback } = {
    "enable": enable,
    "disable": disable,
    'onFileChange': onFileChange
};

export const declareInterface = (context: vscode.ExtensionContext): vscode.Disposable[] => {
    return Object
        .entries(availableCommandImplementations)
        .map(([commandName, callback]) => {
            if (callback instanceof vscode.Disposable) {
                return callback;
            }
            return vscode.commands.registerCommand(
                `nugget.${commandName}`,
                () => callback(context)
            );
        });
};
