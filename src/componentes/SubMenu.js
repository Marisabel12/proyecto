import React, {useState} from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

const SubMenu = ({item})=>{
    const [subnav, setSubnav] = useState();
    const showSubnav = () => setSubnav(!subnav);
    return (
      <>
      
        <Link to={item.path} className="submenu" onClick={item.subNav && showSubnav}>
            <div>
               {item.icon}
               <label className="label">
                   {item.title}
               </label>
            </div>  
            <div>
                {item.subNav && subnav 
                  ? item.iconOpened
                  : item.subNav
                  ? item.iconClosed
                  : null}
            </div>
            </Link>
            {subnav && item.subNav.map((item, index) => {
                return(
                    <Link to={item.path} className="drop" key={index}> 
                    <label className="label">{item.title}</label>
                    </Link>
                )
        })}
    </>
    );   
};
export default SubMenu;