import React, { useState, Fragment } from 'react'
import AddItemForm from './Forms/addItemform'
import EditItemForm from './Forms/editItemform'
import ItemTable from './Tables/Itemtable'
import './App.css'

const App = () => {
	// Data
	const itemsData = [
	{ id: 1, itemname: 'Saree', description: 'Cotton Saree', price:'Rs.1400', quantity:'5' , stockreceivedDate:'20-09-2020'},
    { id: 2, itemname: 'Churidar', description: 'Soft Silk', price:'Rs.2000', quantity:'8' , stockreceivedDate:'10-01-2021'},
    { id: 3, itemname: 'Dothi', description: 'Cotton', price:'Rs.890', quantity:'2' , stockreceivedDate:'12-05-2020'},
    { id: 4, itemname: 'Shirt', description: 'Semi-cotton', price:'Rs.1000', quantity:'6' , stockreceivedDate:'18-11-2021'},
    { id: 5, itemname: 'Jeans', description: 'Cotton Saree', price:'Rs.600', quantity:'10' , stockreceivedDate:'19-03-2020'},
		
	]

	const initialFormState = { id: null, itemname: '', description: '', price:'',quantity:'', stockreceivedDate:''}

	// Setting state
	const [ items, setItems ] = useState(itemsData)
	const [ currentItem, setCurrentItem ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addItem = item => {
		item.id = items.length + 1
		setItems([ ...items, item ])
	}

	const deleteItem = id => {
		setEditing(false)

		setItems(items.filter(item => item.id !== id))
	}

	const updateItem = (id, updatedItem) => {
		setEditing(false)

		setItems(items.map(item => (item.id === id ? updatedItem : item)))
	}

	const editRow = item => {
		setEditing(true)

		setCurrentItem({ id: item.id, itemname: item.itemname, description: item.description, price:item.price, quantity:item.quantity,stockreceivedDate:item.stockreceivedDate })
	}

	return (
		<div className="container">
			<h1>High Fashions App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit item</h2>
							<EditItemForm
								editing={editing}
								setEditing={setEditing}
								currentItem={currentItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Items</h2>
							<AddItemForm addItem={addItem} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Items</h2>
					<ItemTable items={items} editRow={editRow} deleteItem={deleteItem} />
				</div>
			</div>
		</div>
	)
}


export default App;
