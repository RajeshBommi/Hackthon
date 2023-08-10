import React, { useEffect, useState } from 'react'
import axios  from 'axios';

 const ViewItemsByCategory=({categoryId})=>{
    const [products, setProducts] = useState([])
        // Make an Axios GET request to fetch products by category
        useEffect(() => {
            axios.get(`/api/products?category=${categoryId}`)
                .then(response => {
                    setProducts(response.data);
                    console.log(categoryId);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        }, [categoryId]);

  return (
    <div>
        <div className="container mt-5">
                <h3 className='text-center'>Item By Category</h3>
                <table className="table table-bordered">
                {products.length > 0 && (
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                )}
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
      
    </div>
  )
}
export default ViewItemsByCategory

