import { Outlet, Link } from "react-router-dom";



const Layout = () => {
    return (
      <>
      <section>
        <div className="topbar"></div>
      <header style={{position:"fixed",marginTop:"0px"}}>
       
       <div style={{backgroundColor:"white",display:"inline-block",marginLeft:"0px",marginRight:"200px"}}><p style={{fontSize:"25",fontWeight:"800",color:"#3F3D56",fontFamily:"poppins",lineHeight:"37.5px"}}>POSSA</p></div>
       <div id="horiznav"style={{display:"inline-block"}}>
         <ul className="horiznav" style={{backgroundColor:"white"}}>
           
           <li>
             <Link style={{color:"#3F3D56",textDecoration:"none",fontWeight:"600"}} to="./Homepage">Home</Link>
           </li>
           <li>
             <Link style={{color:"#3F3D56",textDecoration:"none",fontWeight:"600"}} to="./Academics">Academics</Link>
           </li>
           <li>
             <Link style={{color:"#3F3D56",textDecoration:"none",fontWeight:"600"}} to="./News-events">News & Events</Link>
           </li>
           <li>
             <Link style={{color:"#3F3D56",textDecoration:"none",fontWeight:"600"}} to="./AboutUs">About Us</Link>
           </li>
           
           <li>
             <button id="login" style={{borderRadius:"3px",width:"100px" ,height:"30px",marginLeft:"300px",borderWidth:"0px"}}><Link style={{color:"white",textDecoration:"none"}} to="./Login">Login</Link></button>
           </li>
           
         </ul>
       </div>
       
     </header>
     
     <Outlet />

      </section>
            
      
      </>
    )
  };
  
  export default Layout;