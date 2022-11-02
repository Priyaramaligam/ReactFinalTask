import { content, prospectpage } from "../../../resources/string"
import { images } from "../../../resources/image"
import Navigation from "../../common/navbar/navbar"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
// import DownArrow from "../application/downarrow"
import {
    WholeContent, Main, H5, H2, Box, MainHeader, Number, SubBox, SecondPage, LabelContent, Page, Button,
    ButtonClear, SearchBox, SearchBar, ButtonTag, InputText, SearchImg, SubCart, Status, Select, Date, Sub, BodyContent,
    First, Name, Content, Footer1, SubFooter, Action, Para, Ppo, SearchBox1, SearchBar1, Profile, DateContent, BoxTag, Imageset, HeadingTag, BoxTag1, LinkContent
,} from "../application/applicationstyle"
// import { ImgTag } from "./donwarrowstyle"
// import { BoxTag1 } from "./prospectstyle"
import { Whole, FirstContent, Img, SecondContent, ParaContent, LastContent, Buttoncontent,
H5Content,Information,MainContent ,ImgContent,Paragraph,P,Form,Input,
MainParagraph,PopPara,Additional,LastText,InputTag,Overlay,ButtonSend,ButtonCancel,H5Tag,H5Contents,PTag} from "./prospectpopupstyle";
import Footer from "../../common/footer/footer";
// import ProspectPopup from "./prospectpopup";
import { Prospects, Inputs, InputBox, SearchInput, Buttons, PageCount, Pages, Numbers,
     ProspectButton } from './prospectstyle'
import ProspectContent from "./prospectcomponent"

export default function Prospect() {

    const [shown, isShown] = useState(false);
    const [details, isdetails] = useState('');
    const [formErrors, setFormErrors] = useState({}); 
    /// for form error
    
    const username=useRef({});
    const email=useRef({});
    
    console.log(details);

    useEffect(() => {
        isdetails(prospectpage)

    });


    const handleClick = event => {
        isShown(current => !current);
      }
    const [text, setText] = useState('');
     let num;
    const [modal, setModal] = useState(false);
    const toggleModal = (i) => {
        num = i
        setModal(!modal);
    };

    let deletedetails = details
    console.log(deletedetails);
    const Delete = () => {
        deletedetails.splice(num, 1);
        isdetails([...deletedetails]);
        setModal(!modal);
    }
    const [click ,setClick ] = useState(false);
   const Customerinfro = () => {
  setClick(!click);
 

  
  }

  
  const toggle = () => {
    // num = i
    setClick(!click);
};

    return (
        <>
            <Navigation />
            <SecondPage>
                <WholeContent>
                    <Main>
                        <LinkContent to='/Application'>   <H5> {content.applicationHeading}</H5></LinkContent>
                        <LinkContent to='/Requiring'> <H5>  {content.information}</H5> </LinkContent>
                        <H5> {content.prospect}</H5>
                    </Main>
                    <Box>
                        <MainHeader>
                            <h1>Prospects</h1>
                        </MainHeader>
                        <Prospects>
                            <InputBox>
                                <SearchInput>
                                    <Inputs type="text" name="search" placeholder="search last name" onChange={(e) => setText(e.target.value)} />
                                    <img src={images.search} alt="search" />
                                </SearchInput>
                                <SearchInput>
                                    <Inputs type="text" name="search" placeholder="search last name" onChange={(e) => setText(e.target.value)} />
                                    <img src={images.search} alt="search" />
                                </SearchInput>
                                <Buttons>Search</Buttons>
                                <Buttons>Clear</Buttons>
                            </InputBox>
                            <PageCount>
                                <ProspectButton>New Prospect </ProspectButton>
                                <Pages>
                                    <label htmlFor="page">Page</label>
                                    <Numbers type="number" name="page" id="page" />
                                </Pages>
                            </PageCount>
                        </Prospects>
                    </Box>
                </WholeContent>

                {prospectpage.filter(product =>
                    product.name.toLowerCase().includes(text.toLowerCase()),
                ).map((discription, i) => {
                    return (
                        <>

                                <ProspectContent
                                         name={discription.name} 
                                         down={discription.down}
                                         dob={discription.dob}
                                         dateofbirth={discription.dateofbirth}
                                         zip={discription.zip}
                                         zipcode={discription.zipcode}
                                         writing={discription.writing}
                                         create={discription.create}
                                         glass={discription.glass}
                                         verify={discription.verify}
                                      />
                            
                         
                                

                                 
                                
                        </>

                    )

                })}
            </SecondPage>
            <Footer />
        </>
    )




}

// function Last() {
//     return (
//         <Footer1>
//             <SubFooter>
//                 <H5> {content.late}</H5>
//                 <Para>{content.need}</Para>
//                 <Para>{content.outreach}</Para>
//                 <Para>{content.leave}</Para>
//                 <Para>{content.member}</Para>
//             </SubFooter>

//         </Footer1>
//     )

// }

    
 

export const Validate = (username,email) => {
    const errors = {};


    if (!username.current.value)
      errors.username = "Please enter your name!";

    if (!email.current.value)
      errors.email = "Please enter your email Address!";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.current.value))
      errors.email = 'Invalid email address';
 return errors;
  }


