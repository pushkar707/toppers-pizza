import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../static/img/logo.svg'
// services delivery
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
//
import {useGlobalContext} from '../context'
import Sidebar from './Sidebar';

const Navbar = () => {
    const {handleDrawerOpen} = useGlobalContext()
  return (
    <div>
        <div className='navbar'>
            <div className="left-nav">
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className="menu-icon"
            >
                <MenuIcon />
            </IconButton>
                <img src={logo} alt="" />
            </div>
            <div className="items-nav">
                <p className="menu-category selected">Pizza</p>
                <p className="menu-category">TopperStix</p>
                <p className="menu-category">Wings</p>
                <p className="menu-category">Sides</p>
                <p className="menu-category">Desserts</p>
                <p className="menu-category">Drinks</p>
            </div>
            <div className="right-nav">
                <div className="service">
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
                        <FormControlLabel value="pickup" control={<Radio />} label="Pick Up/Dine-In" />
                    </RadioGroup>
                </FormControl>
                </div>
                <div className="address me-3">
                    <AddLocationAltIcon/>
                    <span className='text'>Select Your Location</span>
                </div>
                {/* <div className="account">
                    <PersonIcon/>
                    <span className="text">My Account</span>
                </div> */}
            </div>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Navbar