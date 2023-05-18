import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('coding-boring-ah.greeting', () => {
		vscode.window.showInformationMessage('Your family guy funny moments are here!');
	});
	context.subscriptions.push(disposable);

	// Show webview
	let wv = vscode.commands.registerCommand('coding-boring-ah.start', () => {
		// create webview
		const view = vscode.window.createWebviewPanel(
			'funny-moments',
			'Focus Aid', //title
			vscode.ViewColumn.Beside,
			{
				enableScripts: true
			}
		)


		const createInitialView = () => {
			return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Cat Coding</title>
			</head>
			<body>
				<iframe 
					width="400" 
					height="300" 
					src="https://www.youtube.com/embed/T0mxP9_5RPM?autoplay=1&mute=1" 
					title="Family guy" 
					frameborder="0"
					allow="autoplay"
					allowfullscreen>
				</iframe>
				
			</body>
			</html>`;
		}

		view.webview.html = createInitialView();
	});
	context.subscriptions.push(wv);
}

// This method is called when your extension is deactivated
export function deactivate() {}
