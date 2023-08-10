import React from 'react'
import './UserHome.css';
//import UserNavbar from '../../Navbars/UserNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function UserHome() {
    const navigate = useNavigate();
  return (
    <div className="admin-home-container vh-100">
      {/* <UserNavbar/> */}
      <Container className="admin-home-content">
        <Row>
          <Col xs={12} md={6} lg={4} className="admin-home-col" onClick={() => navigate("/ViewProfileByUser")}>
            <div>
              VIEW PROFILE
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="admin-home-col" onClick={() => navigate("/UpdateProfileByUser")}>
            <div>
              UPDATE PROFILE
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="admin-home-col" onClick={() => navigate("/viewCatagory")}>
            <div>
            VIEW  CATAGORIES
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="admin-home-col" onClick={() => navigate("/viewMyOrders")}>
            <div>
            VIEW ORDERS
            </div>
          </Col>
         
        </Row>
      </Container>
      
    </div>
  )
}
