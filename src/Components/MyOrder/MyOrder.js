import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form, Table, } from 'react-bootstrap';

import { RiDeleteBin5Fill } from "react-icons/ri";
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [ordered, setOrdered] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:4000/allorderd/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
        // .then(data=>console.log(data))
    }, [])
    
    const handleDelete = id => {
        const confirmDelete = window.confirm('Are you sure to delete this menu??')
        if (confirmDelete) {
            fetch(`http://localhost:4000/allorderd/${id}`, {
                method:'DELETE'  
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                    
                        alert('Deleted Successfully')
                        const presentMenu = ordered.filter(
                          (book) => book._id !== id
                        );
                        setOrdered(presentMenu)
                }
            })
        }
    }

    return (
      <div>
        <h2>My Order: {myOrder.length}!</h2>
        <h2>{user.email}</h2>

        {myOrder.map(book => 
   
            <Table key={book._id} className="bg-dark text-light mx-auto mt-3">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>User Namee</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Quantity</th>
                  <th>Delete Item</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{book.itemName}</td>
                  <td>{book.userName}</td>
                  <td>{book.phoneNumber}</td>
                  <td>{book.address}</td>
                  <td>{book.quantity}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(book._id)}>
                      <RiDeleteBin5Fill />
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>

          
        )}
      </div>
    );
};

export default MyOrder;