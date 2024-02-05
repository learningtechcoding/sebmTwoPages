import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png'
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    return (
        <footer className="footer  mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                       <h2 style={{'color':'#ea2e32','font-weight':'700'}}>RambleRewards</h2>
                        <p> © 2024 Ramblebonus.com All Rights Reserved </p>
                    </div>
                    <div className="col-md">
                        <p>RambleRewards is not responsible for misunderstood or incorrect bonuses or promotions. We highly recommend reading and understanding</p>
 <p>the conditions of the bonus before using it. If you need any help understanding a bonus or welcome offer, please contact us on Discord.</p>
                     </div>
                </div>
            </div>
        </footer>
    );
}

export default Navbar;
