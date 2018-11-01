import React, { Component } from 'react';

class Homepage extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<h2>Lists</h2>
				
					<div className="row">
						<div className="card">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Cras justo odio</li>
								<li className="list-group-item">Dapibus ac facilisis in</li>
								<li className="list-group-item">Vestibulum at eros</li>
							</ul>
						</div>
					</div>

			</div>
		);
	}
}
//Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

export default Homepage;
