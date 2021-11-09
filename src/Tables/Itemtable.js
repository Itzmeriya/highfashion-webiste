import React from 'react'
import './ItemTable.css'
const ItemTable = props => (
  <table className="Table">
    <thead>
      <tr className="row">
        <th>ItemName</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Stock Received Date</th>
      </tr>
    </thead>
    <tbody className="Table-body">
      {props.items.length > 0 ? (
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.itemname}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.stockreceivedDate}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(item)
                }}
                className="button-edit"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteItem(item.id)}
                className="button-delete"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No items</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ItemTable;