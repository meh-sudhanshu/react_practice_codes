import React from "react";

import classes from './navbar.module.css'


const Navbar = ()=>{
    return(
        <nav className={classes.nav}>
            <div className={classes.left}>
                <h2 className={classes.logo_txt}>People Care</h2>
            </div>
            <div className={classes.right}>
                
            </div>
        </nav>
    )
}

export default Navbar