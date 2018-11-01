import React, { Component } from 'react';

import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import TaskItem from './taskItem';


class listItem extends Component {
	constructor(props){
		super(props);

		this.state = {
			isEdit: false
		};

		this.onDelete = this.onDelete.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onEditSubmit = this.onEditSubmit.bind(this);
	}

	onDelete(){
		const {onDelete, name} = this.props;
		onDelete(name);
	}

	onEdit(){
		this.setState({ isEdit: true });
	}

	onEditSubmit(event){
		event.preventDefault();

		this.props.onEditSubmit(this.nameInput.value, this.contInput.value, this.props.name);

		this.setState({ isEdit: false });
	}

	getTasks(){

	}

	render() {
		{/*this.props = this.props.tasks.map(task => {
					return task;
				});*/}


		const {id, name, cont, tasks} = this.props;
		
		
		return (
			<Router>
				<div className="">
				{
					this.state.isEdit
					? (
						<form onSubmit={this.onEditSubmit}>
							<div className="form-group">
								<input placeholder="Name" className="form-control" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
								<input placeholder="Some Content" className="form-control" ref={contInput => this.contInput = contInput} defaultValue={cont}/>
								<button className="btn btn-success">Save</button>
							</div>
						</form>
					)
					: (
						<div className="card">
						<h1>{id} {` | `} {name} {` | `} {cont}</h1>
							<ul className="list-group list-group-flush">

								<li className="list-group-item">
								{/*{tasks.taskName}*/}
									{/*{
																			this.props.tasks.map(({task = []}) => {
																				return (
																					<TaskItem
																						key={task.id}
																						{...task}
																						onDelete={this.onDelete}
																						onEditSubmit={this.onEditSubmit}
																					/>
																				);
																			})
																		}*/}
									

									<button type="button" className="btn btn-primary" onClick={this.onEdit}>Edit</button>
									<button type="button" className="btn btn-danger" onClick={this.onDelete}>Delete</button>
								</li>
							</ul>
						</div>
					)
				}
					
				</div>
			</Router>
		);
	}
}

export default listItem;
