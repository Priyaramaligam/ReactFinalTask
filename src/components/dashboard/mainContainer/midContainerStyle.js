import styled from "styled-components";

// export const DashContent=styled.div`
// background-color: red;
// position: absolute;


// `;
export const WholePage =styled.div`
position: relative;
`;

export const Content = styled.div`
position: relative;

/* display: flex; */
border: 2px solid white;
background-color: white;
padding: 20px;
width: 13%;
border-radius: 15px;

top:5rem;
box-shadow: 0 0 3px slateGray;
@media (max-width: 768px) {
    width:15%
    }
`;


export const Card=styled.div`
margin-left:1rem;
`;





export const MidImage = styled.img`


`;


export const HeadingContent = styled.h1`
font-size: 15px;
@media (max-width: 768px) {
    font-size: 11px;
}
`;

export const ParagraphContent = styled.div`
font-size:13px;
@media (max-width: 768px) {
    font-size: 11px;
}
`;

export const Container = styled.div`
position:relative;
/* width: 80%; */
/* margin: 0 auto; */
/* top:20px; */
 background-color: blue;
/* height: 100%;  */
display: flex;
flex-wrap: wrap;
/* width: 80%; */
gap:2rem;
justify-content: center;


`;
// export const Dot = styled.div`
// background-color:green;`

export const Last = styled.div`
position: relative;
top:5rem;
display: flex;
gap:6px;
justify-content: space-around;
padding: 1rem 3rem;

/* top:6rem; */
`;


export const FooterContent = styled.div`
background-color: whitesmoke;
border-radius: 8px;
padding:0.5rem;
width: 60%;
@media (max-width: 768px) {
    font-size: 13px;
}
`;

export const FooterSubContent = styled.div`
background-color: whitesmoke;
border-radius: 8px;
padding:0.5rem;
width: 40%;
@media (max-width: 768px) {
    font-size: 13px;
}

/* background-color: black; */
`;

export const FooterImg=styled.img`
object-fit:cover;
width: 20px;
height: 20px;
@media (max-width: 768px) {
    width: 15px;
}
`;
export const Cart=styled.div`
display: flex;
padding: 10px;
gap:1rem;
`;
 export const Para=styled.p`
 margin: 0;
 color: blue;
 @media (max-width: 768px) {
    font-size: 11px;
}

 `;
 export const P=styled.p`
 `;
