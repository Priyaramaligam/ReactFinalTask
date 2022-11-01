import styled from "styled-components";

export const Whole=styled.div`
/* width: 50vw;
height: 80vh;
margin: 0 auto;
border: 1px solid black;
box-shadow: 1px 1px 1px; */
background-color: white;
width:70%;
border-radius: 5px;
margin: 35px auto;
box-shadow: 1px 1px 1px 1px;


`

export const Content=styled.div`
display: flex;
flex-direction: row;

align-items: center;
gap: 2px;
`
export const Img=styled.img`
width: 20px;
height: 20px;
`;
export const H2=styled.h2`
`
export const Main=styled.div`
`

export const P=styled.p`
`
export const MainContent=styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 30px;
`

export const FooterWrapper=styled.div`
    margin: 11% 0 0;
    width: 99%;
    @media (max-width: 768px) { 
        margin: 16% 0 0; 
    }
`