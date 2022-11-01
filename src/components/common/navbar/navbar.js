import React from "react";
import { Link } from 'react-router-dom';
import { NavigationBar, Navitems, Sidecontent,Icon,Logo1,NavigationBarResponsive,Ham,HamContent, Para,Logo, NavWrapper, Line } from "./navbarstyle";
import { content } from "../../../resources/string";
import { images } from "../../../resources/image";
import {useState } from 'react';
import { LastContent } from "../../dashboard/mainContainer/midcontainer";

function Navigation() {
    const [isMobile,setIsMobile]=useState(false)
    const [shown, isShown] = useState(false);
  function HandleChange(){
    setIsMobile(!isMobile);
    isShown(current => !current);
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

        <div onClick={()=>HandleChange()}>
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
            {isMobile &&(<Ham> <Logo src={images.icon} /><HamContent>{content.logout}</HamContent></Ham>)}
            
             </Icon>
             {/* { shown && <LastContent/> } */}
          
           
        </>
        

    )
}
export default Navigation;