import React, { useState, useEffect } from 'react'
import '../Tables/ItemTable.css'
const EditItemForm = props => {
  const [ item, setItem ] = useState(props.currentItem)

  useEffect(
    () => {
      setItem(props.currentItem)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setItem({ ...item, [name]: value })
  }

  return (
    <form className='addform'
      onSubmit={event => {
        event.preventDefault()

        props.updateItem(item.id, item)
      }}
    >       
            
            <label>Itemname</label>
			      <input type="text" name="name" value={item.name} onChange={handleInputChange} />
			      <label>Description</label>
			      <input type="text" name="desrciption" value={item.description} onChange={handleInputChange} />
            <label>Price</label>
            <input type="text" name="price" value={item.price} onChange={handleInputChange} />
            <label>Quantity</label>
            <input type="text" name="quantity" value={item.quantity} onChange={handleInputChange} />
            <label>Stock received Date</label>
            <input type="text" name="date" value={item.date} onChange={handleInputChange} />
			<button className='button-edit'>Update item</button>
    <button className='button-delete' onClick={() => props.setEditing(false)}>
        Cancel
    </button>
    </form>
  )
}

export default EditItemForm