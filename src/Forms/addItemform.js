import React, { useState } from 'react'
import '../Tables/ItemTable.css'
const AddItemForm = props => {
	const initialFormState = {id:'', name: '', description: '',price:'',quantity:'',date:'' }
	const [ item, setItem ] = useState(initialFormState)

	const handleInputChange = event => {
		const {name, value } = event.target

		setItem({ ...item, [name]: value })
	}

	return (
		<form className='addform'
			onSubmit={event => {
				event.preventDefault()
				if (!item.id || !item.name){
					alert("Please fill all the fields");
				 return;
				}

				props.addItem(item)
				setItem(initialFormState)
			}}
		>   
		    <label>Id</label>
			<input type="text" name="id" value={item.id} onChange={handleInputChange} />
			<label>Itemname</label>
			<input type="text" name="name" value={item.name} onChange={handleInputChange} />
			<label>Description</label>
			<input type="text" name="description" value={item.description} onChange={handleInputChange} />
            <label>Price</label>
            <input type="text" name="price" value={item.price} onChange={handleInputChange} />
            <label>Quantity</label>
            <input type="text" name="quantity" value={item.quantity} onChange={handleInputChange} />
            <label>Stock received Date</label>
            <input type="text" name="date" value={item.date} onChange={handleInputChange} />
			<button className='addbutton'>Add new item</button>
		</form>
	)
}

export default AddItemForm