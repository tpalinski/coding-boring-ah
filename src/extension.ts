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
		
		const familyGuyRepository: String[] = [
			"https://www.youtube.com/embed/HzifH0eYjr0",
			"https://www.youtube.com/embed/T0mxP9_5RPM",
			"https://www.youtube.com/embed/EL4UdaLTVWc",
			"https://www.youtube.com/embed/HZulBIgRLLE"
		]

		const getRandomFamilyGuyEpisode = (): String => {
			let idx = Math.floor(Math.random() * familyGuyRepository.length)
			return familyGuyRepository[idx];
		}

		
		const createInitialView = () => {
			let video = getRandomFamilyGuyEpisode();
			return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Cat Coding</title>
			</head>
			<body>
				<iframe 
					width="560" 
					height="315" 
					src="${video}?autoplay=1&mute=1" 
					title="Family guy" 
					frameborder="0"
					allow="autoplay"
					allowfullscreen
					style="padding-bottom: 50px">
				</iframe>
				<iframe 
					width="560" 
					height="315" 
					src="https://www.youtube.com/embed/ChBg4aowzX8?autoplay=1&mute=1" 
					title="Subway Surfers" 
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
