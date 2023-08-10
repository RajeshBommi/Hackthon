import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import ViewItemsByCategory from './ViewItemsByCategory'

const ViewCatagory = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId,setSelectedCategoryId] = useState([]);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        axios.get('/api/categories') // we had a proxy in the package.json
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    const viewItemHandler=(categoryId)=>{
        setSelectedCategoryId(categoryId);
      }
      const deleteCategoryHandler = (categoryId) => {
        setSelectedCategoryId(categoryId);
        setShowModal(true);
      }
      const confirmDeleteHandler = () => {
        // Handle deletion logic here
        // After successful deletion, close the modal and reset the selectedCategoryId
        setShowModal(false);
        setSelectedCategoryId(null);
      }
      const closeModal = () => {
        setShowModal(false);
        setSelectedCategoryId(null);
      }
    

    return (
        <div>
            <div className="container mt-5">
                <h3 className='text-center'>All Categories</h3>
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td><button
                    onClick={() => viewItemHandler(category.id)}
                    className="btn btn-primary mr-2"
                  >
                  View Items
                  </button>
                  </td>

                   <td>
                  <button
                    onClick={() => deleteCategoryHandler(category.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>

              </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedCategoryId && <ViewItemsByCategory categoryId={selectedCategoryId} />}

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this category?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}
export default ViewCatagory
