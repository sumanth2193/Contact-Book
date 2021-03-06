import React from 'react';
import {Link} from 'react-router-dom';
const Header = () =>{
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link className="navbar-brand" to="/">
                <i className="fa fa-users fa-lg"></i> Contact Book
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                        <Link className="nav-link" to="/"> <i className="fa fa-table"></i> Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/newcustomer"> <i className="fa fa-user-plus"></i> Add Contact</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

const logout = () =>{
    localStorage.clear();
    window.location.reload();
}

export default Header;