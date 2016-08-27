import React from 'react';
import ReactMarkdown from 'react-markdown';
import README from '../../../README.md';
import LICENSE from '../../../LICENSE.md';

export default (App) => class Header extends React.Component {
	render() {
		return (
			<section>
				<h1>About This Example Application</h1>
				<p>
					Check it out on Github:&nbsp;
					<a href="https://github.com/Swivelgames/FluxExampleApp">
						https://github.com/Swivelgames/FluxExampleApp
					</a>
				</p>
				<ReactMarkdown source={README} />
				<h2>LICENSE</h2>
				<ReactMarkdown source={LICENSE} />
			</section>
		)
	}
}
