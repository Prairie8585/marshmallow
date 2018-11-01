import React, { Component } from 'react';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


import Header from './components/header';
import Homepage from './components/homePage';
import Footer from './components/footer';
import Products from './components/products';
import ListItem from './components/listItem';
import AddList from './components/addList';



import './Assets/css/default.min.css';


var newE = true;
if (newE){
	const lists = [
		{
			id: 1,
			name: 'iPad',
			cont: 200,
			tasks: [
								{
									id: 1,
									taskName: 'To do smg',
									isСompleted: false
								},
								{
									id: 2,
									taskName: 'Make money',
									isСompleted: false
								}
			]
		},
		{
			id: 2,
			name: 'Second',
			cont: 200,
			tasks: [
								{
									id: 1,
									taskName: 'Wash the car',
									isСompleted: false
								},
								{
									id: 2,
									taskName: 'Go shopping',
									isСompleted: false
								}
			]
		}
	];
	localStorage.setItem('lists', JSON.stringify(lists));
}

var id;

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			lists: JSON.parse(localStorage.getItem('lists'))
		};

		this.onAdd = this.onAdd.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onEditSubmit = this.onEditSubmit.bind(this);
	}

	componentWillMount(){
		const lists = this.getLists();
		this.setState({lists});
		console.log(lists);
	}

	getLists(){
		return this.state.lists;
	}

	onAdd(name, cont){
		const lists = this.getLists();
		id = JSON.parse(localStorage.getItem('lists')).length + 1;
		cont = parseInt(cont);
		lists.push({
			id,
			name,
			cont
		});

		this.setState({lists});
		localStorage.setItem("lists", JSON.stringify(lists));

		var tour = JSON.parse(localStorage.getItem('lists'))[0]['name'];
		console.log("onAdd: " + tour);

		var items = JSON.parse(localStorage.getItem("lists"));
		for(var i=0; i<items.length; i++) {
				var item = items[i];
				if(item.name == name){
					console.log("We added: " + i + " => " + name);
				}
		}
	}

	onDelete(name){
		const lists = this.getLists();

		const filteredProducts = lists.filter(list => {
			return list.name !== name;
		});
		
		this.setState({lists: filteredProducts});

		{/*for(var i=0; i<lists.length; i++) {
					var item = lists[i];
							if (item.name == name) {
									lists.splice(i, 1);
									console.log("We deleted: " + i + " => " + name);
									break;
							}
				}*/}
		localStorage.setItem("lists", JSON.stringify(filteredProducts));
	}

	onEditSubmit(name, cont, originalName){
		let lists = this.getLists();

		lists = lists.map(list => {
			if (list.name === originalName){
				list.name = name;
				list.cont = cont;
			}
			return list;
		});

		console.log("onEditSubmit: " + name, cont);
		this.setState({ lists });

		{/*var items = JSON.parse(localStorage.getItem("lists"));
				for(var i=0; i<items.length; i++) {
					var item = items[i];
							if (item.name == name) {
									items.splice(i, 1);
									console.log("We deleted: " + i + " => " + name);
									break;
							}
				}*/}
		localStorage.setItem("lists", JSON.stringify(lists));

	}

	render() {
		return (
			<Router>
				<div className="App">
					
						<Header/>
						<div className='container'>
							<div className="row">
							{/*<Route exact path='/' component={Homepage}/>
							<Route exact path='/Products' component={Products}/>*/}
							
							{
								this.state.lists.map(list => {
									return (
										<ListItem
											key={list.name}
											{...list}
											onDelete={this.onDelete}
											onEditSubmit={this.onEditSubmit}
										/>
									);
								})
							}
							<AddList
								onAdd={this.onAdd}
							/>
						</div>
						</div>
						<Footer/>
					
				</div>
			</Router>
		);
	}
}

export default App;
