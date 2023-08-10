// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// //import { FaShoppingCart } from 'react-icons/fa';
// import { useState } from 'react';

// const UserNavbar = () => {
//     const [showMenu, setShowMenu] = useState(false);
//     const [showDropdown, setShowDropdown] = useState(false);

//     const navigate = useNavigate();
//     const handleViewMenu=()=>{
//     navigate('/viewMyCart/');
//     }

//     const handleLogin=()=>{
//         navigate('/login');
//     }

//     const handleMenuClick = () => {
//         setShowMenu(!showMenu);
//     };

//     const handleDropdownClick = () => {
//         setShowDropdown(!showDropdown);
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">
//                     Product Catalog
//                 </Link>
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     onClick={handleMenuClick}
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
//                     </ul>
//                     <form className="d-flex">
//                         <Logout/>
//                         <button className="btn btn-outline-warning my-2 my-sm-0 mx-3" onClick={()=>{handleViewMenu()}}>View Cart</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default UserNavbar;