import styled from "styled-components";
export const Prospects = styled.div`
margin:1rem;
padding:1rem;
/* background-color:whitesmoke; */
display:flex;
flex-direction:column;
row-gap:1rem;
`


export const SearchInput = styled.div`
display:flex;
/* justify-content:space-between; */
width:30%;
border:1px solid grey;
border-radius:5px;
width: 25%;
padding: 5px;

`
export const Inputs = styled.input`
border:none;
width: 100%
`

export const Buttons = styled.button`
width:15%;
background-color:blue;
color:white;
border:none;
border-radius:6px;
&:hover{
  background-color:white;
  color:blue;
}
`

export const  PageCount = styled.div`
display:flex;
justify-content:space-between;
`
export const Pages = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
`

export const InputBox = styled.div`
display:flex;
justify-content:space-between;
border: none;
padding-bottom:4px;
width: 100%;
`
export const Numbers = styled.input`
width:30%;`

export const ProspectButton = styled.button`
width:15%;
padding:5px;
background-color:blue;
color:white;
border:none;
border-radius:6px;

&:hover{
  background-color:white;
  color:blue;
}
`