import styled from "styled-components";

export const Whole=styled.div`
display: flex;
flex-direction: column;
 border: 2px solid black;
 border-radius:10px;
 background-color: white;
/* justify-content: center; */
 width: 30%; 
height: 40%;
top: 7rem;
left: 30%;
/* right: 5rem; */
/* bottom: 3rem; */
position: fixed;
padding:20px
`;

export const H5Content=styled.h5`
`;


export const FirstContent=styled.div`
display: flex;
flex-direction: row;
`;

export const Img=styled.img`
width:10px;
padding: 20px;
margin: 0px 0px 0px 50%;
`;

export const SecondContent=styled.div`
display: flex;
flex-direction: column
;
`;


export const ParaContent=styled.p`
`;

export const LastContent=styled.div`
display:flex;
gap:1rem;
margin:25px;
`;

export const Buttoncontent=styled.div`
display: flex;
justify-content: center;
/* align-items: center; */
background-color: blue;
border-radius: 10px;
width:25%;
padding: 5px;
color: white;
border: none;
&:hover{background-color:white;color:black}
`;