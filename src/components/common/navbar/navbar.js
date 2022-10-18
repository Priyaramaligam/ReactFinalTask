import React from "react";
import { Link } from 'react-router-dom';
import { NavigationBar, Navitems, Sidecontent,Icon,NavigationBarResponsive,Ham,HamContent, Para,Logo, NavWrapper, Line } from "./navbarstyle";
import { content } from "../../../resources/string";
import { images } from "../../../resources/image";
// import Footer from "../footer/footer";
// import Navbar1 from "../hamburger/hamburger";
import {useState } from 'react';

function Navigation() {
    const [isMobile,setIsMobile]=useState(false)
  function handleChange(){
    setIsMobile(!isMobile);

  }
    return (
        <>

            <NavigationBar>
                <NavWrapper>
               
                <Line to='/MidContainer'><Navitems>{content.home}</Navitems></Line>
                   
                 <Line to='/Quoting'><Navitems>{content.quoting}</Navitems></Line> 

                    <Navitems>  {content.customerApplication}</Navitems>
                    <Line to='/Application'><Navitems>{content.application}</Navitems></Line>
                    <Line to='/EligibilityCheck'><Navitems>{content.customerCheck}</Navitems></Line>
                    <Line to='/ScopeOfAppointment'><Navitems>{content.scopeOfAppointment}</Navitems></Line>
                    <Line to='/ProviderSearch'> <Navitems>{content.providerSearch}</Navitems></Line>

                </NavWrapper>
                <Sidecontent>
                    <Logo src={images.icon} />
                   <Para> {content.logout}</Para>
                   </Sidecontent>

                <NavigationBarResponsive>
        <div onClick={()=>handleChange()}>
      {
        isMobile ? (<img src={images.wrong} />):(<img src={images.hamburger} />)
      }
        </div>
  
    </NavigationBarResponsive>
    
            </NavigationBar>
            <Icon>
            {isMobile && (<Ham> <Line to='/MidContainer'><HamContent>{content.home}</HamContent></Line></Ham>)}
            
            {isMobile && (<Ham> <Line to='/Quoting'><HamContent>{content.quoting}</HamContent></Line></Ham>)}
            {isMobile && (<Ham> <Line  to='/Application'><HamContent>{content.application}</HamContent></Line></Ham>)}
            {isMobile && (<Ham> <Line to='/ScopeOfAppointment'><HamContent>{content.scopeOfAppointment}</HamContent></Line></Ham>)}
            {isMobile && (<Ham> <Line to='/EligibilityCheck'><HamContent>{content.customerCheck}</HamContent></Line></Ham>)}
            {isMobile && (<Ham> <Line to='/ProviderSearch'> <HamContent>{content.providerSearch}</HamContent></Line></Ham>)}

            </Icon>
            {/* <HamIcon>
           <Navbar1/>
           </HamIcon> */}
        </>

    )
}
export default Navigation;