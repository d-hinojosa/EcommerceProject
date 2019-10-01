import React from 'react';
import {A} from 'hookrouter';

function Navbar() {

    
    return(
        <div class="topnav">
            <div class="topnav-right">
                <a className="navbar-brand" href="#">
                <img src="http://downloadicons.net/sites/default/files/gold-ring-icon-29764.png" width="35" height="35"
                className="d-inline-block align-top" alt="ringslogo"/>
                WONDERLUST</a>
                <A className="active" href="/">Home</A>
                <a href="/Products">Products</a>
                <a href="/Contact">Contact Us</a>
            <span class="social">
                <a href="twitter"><i className="fab fa-twitter"></i></a>
                <a href="fb"><i className="fab fa-facebook-f"></i></a>
                <a href="insta"><i className="fab fa-instagram"></i></a>
            </span>
            </div>
        </div>
    )
}
export default Navbar;