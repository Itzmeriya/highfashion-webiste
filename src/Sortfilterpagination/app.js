import React, { useState, Fragment } from 'react'
import AddItemForm from '../Forms/addItemform'
import EditItemForm from '../Forms/editItemform'
//import ItemTable from './components/ItemTable'
import { Table } from '../Tables/Table'
import '../Tables/ItemTable.css'


const App = () => {


  const columns = [
    { accessor: 'id', label: 'Id' },
    { accessor: 'name', label: 'Item Name' },
    { accessor: 'description', label: 'Description', },
    { accessor: 'price', label: 'Price' },
    { accessor: 'quantity', label: 'Quantity' },
    { accessor: 'date', label: 'Received Date' },
    
  ]

	// Data
	const ItemData = [
		{ id: 1, name: 'Saree', description: 'Semi-Silk' , price:2499 , quantity :5 ,date:'12/02/2020'},
		{ id: 2, name: 'Churidhar', description: 'Silk' , price:1099 , quantity :9 ,date:'11/09/2021'},
		{ id: 3, name: 'Jeens', description: 'Jeans' , price:699 , quantity :7 ,date:'20/08/2021'},
        { id: 4, name: 'T-shirt', description: 'Baniyan' , price:350 , quantity :4 ,date:'03/07/2020'},
        { id: 5, name: 'Tops', description: 'Cotton' , price:450 , quantity :3 ,date:'05/06/2021'},
        { id: 6, name: 'Skirt', description: 'Shiffon' , price:395 , quantity :8 ,date:'18/05/2020'},
	]

	const initialFormState = { id: '', name: '', description: '' , price:null, quantity:null, date:''}

	// Setting state
	const [ items, setItems ] = useState(ItemData)
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

		setCurrentItem({id:item.id, name: item.name, description: item.description,price:item.price,quantity:item.quantity,date:item.date })
	}

	return (
		<div className="container">
			<h1>High Fashions </h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>EDIT ITEM</h2>
							<EditItemForm
								editing={editing}
								setEditing={setEditing}
								currentItem={currentItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>ADD ITEM</h2>
							<AddItemForm addItem={addItem} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>VIEW ITEMS</h2>
          <Table rows={items} columns={columns} editRow={editRow} deleteItem={deleteItem} />
				</div>
			</div>
		</div>
	)
}

export default App