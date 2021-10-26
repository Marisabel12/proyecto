import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./NavBar.css";
import SubMenu from "./SubMenu";


const NavBar = ()=>{
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
    return (
    <>
    <h3>Sistema de Gestion de Horarios</h3>
        <IconContext.Provider value={{color: '#fff'}}>
       <div className="navbar">
         <Link to="#" className="menu-bars">
           <FaIcons.FaBars onClick={showSidebar} />
           </Link> 
       </div>
       <nav className={sidebar? 'nav-menu activate ': 'nav-menu'}>
         <nav className="nav-menu-items" >
           
             <Link to="#" className="menu-bars">
             <AiIcons.AiOutlineClose onClick={showSidebar}  />
             </Link>
             
             {SidebarData.map((item, index) =>{
              
              return <SubMenu item={item} key={index} />
            })}
        </nav>
      </nav>
      </IconContext.Provider>  
    </> 
      )
}
export default NavBar;