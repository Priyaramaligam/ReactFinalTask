import styled from "styled-components";

export const Whole=styled.div`
display: flex;
flex-direction: column;
 border: 2px solid black;
 border-radius:10px;
 background-color: white;
width: 30%; 
height: 40%;
top: 7rem;
left: 30%;
position: fixed;
padding:20px
`;

export const H5Content=styled.h5`
margin: 5px 0 ;
`;
export const H5Contents=styled.h5`
margin: 0 ;
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

//new quote

export const MainWrapper=styled.div`
background-color: red;
  
`;
export const MainContent=styled.div`
display: flex;
flex-direction: column;
 border: 2px solid black;
 border-radius:10px;
 background-color: white;
width: 45%; 
/* height: 40%; */
top: 2rem;
left: 25%;
position: fixed;
padding:20px;
@media (max-width: 768px) {
   top:0;
    
}
`;

export const ImgContent=styled.img`
width:10px;

/* margin: 0px 0px 0px 40%; */
`;


export const Information=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 5px;


`;

export const Paragraph=styled.div`
`;
export const P=styled.p`
font-size: 14px;
`;

export const Form=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
/* column-gap: 20%; */
`;

export const Input=styled.input`
padding: 3%;
width: 230px;
border-radius: 5px;
@media (max-width: 768px) {
    width: 150px;
    
}
`;

export const MainParagraph=styled.div`
`;


export const PopPara=styled.p`
font-size: 12px;
`;
export const Additional=styled.div`
`;
export const LastText=styled.div`
`;

export const H5Tag=styled.h5`
margin: 0;

`;



export const InputTag=styled.input`
width: 90%;

padding:5% ;

`;
export const Overlay = styled.div`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;
background:rgba(188, 181, 185, 0.3);
opacity:0.5 ;
`;

export const ButtonSend=styled.button`
display: flex;
justify-content: space-evenly;
border: none;
background-color: white;

`;
export const PTag=styled.p`
color: red;
margin: 0;
`;

export const ButtonCancel=styled.button`
background-color: gray;
color: white;
border: none;
padding: 5px;
&:hover{background-color:white;color:blue;border:none}
`;