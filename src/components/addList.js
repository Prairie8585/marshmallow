import React, { Component } from 'react';

class addList extends Component {
	constructor(props){
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event){
		event.preventDefault();
		this.props.onAdd(this.nameInput.value, this.priceInput.value);
		this.nameInput.value = '';
		this.priceInput.value = '';
	}

	render() {
		return (
				<div className="row">
					<div className="card">
						<ul className="list-group list-group-flush">

							<li className="list-group-item">
								<form onSubmit={this.onSubmit}>
									<div className="form-group">
										<input placeholder="Name" className="form-control" ref={nameInput => this.nameInput = nameInput}/>
										<input placeholder="Price" className="form-control" ref={priceInput => this.priceInput = priceInput}/>
										<button className="btn btn-success">Add</button>
									</div>
								</form>
							</li>

						</ul>
					</div>
				</div>
		);
	}
}

export default addList;
