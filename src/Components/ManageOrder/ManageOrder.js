import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { RiDeleteBin5Fill } from "react-icons/ri";
const ManageOrder = () => {
    const [ordered, setOrderd] = useState([]);
    

    useEffect(() => {
         fetch("http://localhost:4000/allorderd")
           .then((res) => res.json())
           .then((data) => setOrderd(data));
        
    },[])
    
    
     const handleDelete = (id) => {
       const confirmDelete = window.confirm(
         "Are you sure to delete this menu??"
       );
       if (confirmDelete) {
         fetch(`http://localhost:4000/allorderd${id}`, {
           method: "DELETE",
         })
           .then((res) => res.json())
           .then((data) => {
             if (data.deletedCount > 0) {
               alert("Deleted Successfully");
               const presentMenu = ordered.filter((book) => book._id !== id);
               setOrderd(presentMenu);
             }
           });
         
       }
     };

    return (
      <div className="text-white container ">
        <h2 className="text-success fw-bold m-2">
          ALL Order : {ordered.length}
          
            </h2>
            

        {ordered.map(book => 
          <div className="table-responsive">
            
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
                  <td>{book._id}</td>
                  <td>{book.itemName}</td>
                  <td>{book.userName}</td>
                  <td>{book.phoneNumber}</td>
                  <td>{book.address}</td>
                  <td>{book.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(book._id)}
                    >
                      <RiDeleteBin5Fill />
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
    
};
export default ManageOrder;