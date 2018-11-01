import React, { Component } from 'react';

class taskItem extends Component {
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
		const {onDelete, taskName} = this.props;
		onDelete(taskName);
	}

	onEdit(){
		this.setState({ isEdit: true });
	}

	onEditSubmit(event){
		event.preventDefault();

		this.props.onEditSubmit(this.nameInput.value, this.contInput.value, this.props.taskName);

		this.setState({ isEdit: false });
	}

	getTasks(){

	}

	render() {
		{/*this.props = this.props.tasks.map(task => {
					return task;
				});*/}


		const {id, taskName} = this.props;
		console.log(id + ", " + taskName + "!");
		console.log(typeof taskName);
		
		
		return (
				<div className="">
				{
					this.state.isEdit
					? (
						<form onSubmit={this.onEditSubmit}>
							<div className="form-group">
								<input placeholder="Name" className="form-control" ref={nameInput => this.nameInput = nameInput} defaultValue={taskName}/>
								<button className="btn btn-success">Save</button>
							</div>
						</form>
					)
					: (
						<div className="row">
							{id} {` | `}
							
							{taskName} {` | `}
							
							{/*{tasks.id}*/}
							{/*{tasks.map( task => {
																	return task.taskName + "; ";
																})} {`  `}*/}

							<button type="button" className="btn btn-primary" onClick={this.onEdit}>Edit</button>
							<button type="button" className="btn btn-danger" onClick={this.onDelete}>Delete</button>
						</div>
					)
				}
					
				</div>
		);
	}
}

export default taskItem;
