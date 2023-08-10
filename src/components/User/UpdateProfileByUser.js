
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import CustomerNavbar from '../Navbars/CustomerNavbar';

function UpdateProfileByUser() {
  const [customer, setCustomer] = useState();
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        if (token) {
          // Decode the JWT token
          const decodedToken = jwt_decode(token);
          const payload = decodedToken;
          const username = payload.sub;
          try {
            const customerData = fetchCustomer.data;
            console.log(customerData);
            setCustomer(customerData);
          } catch (error) {
            console.error('Error fetching Cust using userName:', error);
          }
        }
      } catch (error) {
        console.error('Error while fetching:', error);
      }
    };
    fetchCustomer();
  }, []);

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch('http://localhost:8082/customer/updateCustomer', customer)
      .then(response => {
        // Handle successful response
        console.log('Customer updated:', response.data);
        // Reset form
        setCustomer({
          custName: '',
          custContact: '',
          address: '',
          username: '',
          password: ''
        });
      })
      .catch(error => {
        // Handle error
        console.error('Error saving customer:', error);
      });
      setShowSuccessAlert(true);

      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
  };
  useEffect(() => {
    let timeoutId;
    if (showSuccessAlert) {
      timeoutId = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showSuccessAlert]);


  return (
    <div>
      <CustomerNavbar/>
      {
        !customer ?
          (
            <p>No customer found to update.</p>
          ) :
          (
            <div>
              <h3 className='text-center'>Update Customer</h3>
              {showSuccessAlert && (
                <div className="alert alert-success mx-4" role="alert">
                  <span>updated form submitted successfully.</span>
                  <button type="button" className="btn-close" onClick={() => setShowSuccessAlert(false)} aria-label="Close"></button>
                </div>
              )}
              <form className="container" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="custName" className="form-label">Customer Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="custName"
                    name="custName"
                    value={customer.custName}
                    onChange={(e) => handleInputChange(e, 'custName')}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="custContact" className="form-label">Customer contact No:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="custContact"
                    name="custContact"
                    value={customer.custContact}
                    onChange={(e) => handleInputChange(e, 'custContact')}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">cust Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={customer.address}
                    onChange={(e) => handleInputChange(e, 'address')}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={customer.username}
                    onChange={(e) => handleInputChange(e, 'username')}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={customer.password}
                    onChange={(e) => handleInputChange(e, 'password')}
                  />
                </div>

                <button type="submit" className="btn btn-primary mx-3">Submit</button>
                <button className='btn btn-warning' onClick={() => { navigate('/customer') }}>Back</button>
              </form>
            </div>
          )}
    </div>

  )
}

export default UpdateProfileByUser