import React from 'react'
import UserNavbar from '../../Navbars/UserNavbar';

export default function ViewMyOrders() {
  return (
    <div>
      <UserNavbar/>
      <div className='mx-3'>
      <h3 className="text-center mt-3">Orders List</h3>
      <table className="table table-striped my-4 mx-4">
        <thead>
          <tr>
            <td>
              Order Id
            </td>
            <td>
              Action
            </td>

          </tr>
        </thead>
        {Array.from(orders.entries()).map(([orderId, order]) => (
          <tbody>
            <tr key={orderId}>
              <td>
               {orderId}
              </td>
              <td>
                <button className='btn btn-warning' onClick={() => mockOrders({ key: orderId, value: order })}>Fetch Items</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {
        items.length > 0 && (
          <ul>
            {items.map((item) => (
              <li key={item.itemId}>
                {item.itemId} - {item.itemName}
              </li>
            ))}

          </ul>
        )
      }
    </div>
    </div>
  )
}
