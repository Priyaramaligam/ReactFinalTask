import styled from 'styled-components'
import { Link } from 'react-router-dom';
import "../../../styles/font.css"
export const Line=styled(Link)`
text-decoration: none;
color: white;
@media (max-width: 768px) { 
text-decoration: none;
color: black;
}
`;

export const NavigationBar= styled.nav`
display:flex;
justify-content: space-around;
padding: 10px;
background-color: rgba(65, 154, 249, 0.99);

color: white;
 @media (max-width: 768px) { 
   
    justify-content: flex-start;
 }

`;
export const NavigationBarResponsive= styled.nav`
  display: none;
    @media (max-width: 768px) {
        display: block;
        display: flex;
        height: 100%;
        justify-content: flex-start;
}
`;



export const Navitems =styled.p`
display: flex;
font-family: "LexendDeca-Bold";
font-size: 12px;


&:hover{border-bottom:1px solid white;};
`;

export const Sidecontent =styled.div`
display: flex;
width: 7%;
justify-content: space-between;
font-family: "LexendDeca-Bold";
font-size: 14px;

 @media (max-width: 768px) {
    display: none;}
`;

export const Logo =styled.img`
width: 15px;
height: 20px;

font-size: 12px;

`;
// export const Logo1 =styled.img`
// @media (max-width: 768px) {

// width: 15px;
// height: 20px;
// font-size: 12px;
// }

// `;
export const Para=styled.p`
margin: 0;
`;

export const NavWrapper =styled.div`
width: 50%;
font-size: 14px;
display: flex;
justify-content: space-between;
 @media (max-width: 768px) {
    display: none;
  }

`;

export const Ham=styled.div`

display: flex;
justify-content: left;
border: none;

align-content: center;
background-color: white;


padding: 20px;
font-size: 14px;

`;


export const HamContent=styled.div`

`;

export const Icon=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
/* align-items: center; */
/* border: 1px solid black; */
background-color: white;
/* width: 20%; */
height: 100%;
position: absolute;
z-index: 1;
/* top: 0; */

/* left: 72%; */

`;