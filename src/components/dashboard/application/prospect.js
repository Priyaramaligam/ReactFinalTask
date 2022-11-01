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

  const Emailvalidation =() =>{
 
    setFormErrors(Validate(username,email));
  }
  const Validate = (username,email) => {
    const errors = {};


    if (!username.current.value)
      errors.username = "Please enter your name!";

    if (!email.current.value)
      errors.email = "Please enter your email Address!";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.current.value))
      errors.email = 'Invalid email address';

   


  

    return errors;
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
                            <BoxTag1>
                                <First>
                                    <Imageset >
                                        <Name onClick={handleClick} src={images.down} />
                                    </Imageset>
                                    <Content>
                                        <HeadingTag>{discription.name}</HeadingTag>
                                    </Content>
                                </First>
                                <Ppo>
                                    <Para>{discription.dob}</Para>
                                    <Para>{discription.dateofbirth}</Para>
                                </Ppo>
                                <DateContent>
                                    <Para>{discription.zip}</Para>
                                    <Para>{discription.zipcode}</Para>
                                </DateContent>
                                <Action >
                                    <Name onClick= { Customerinfro }  src={images.writing} />
                                    <Para>{discription.create}</Para>
                                  
                                </Action> 
                                <Action>
                                    <Name src={images.glass} />
                                    <Para>{discription.verify}</Para>
                                </Action>
                                <Action >
                                    <Name onClick={() => { toggleModal(i);
                                    }}   src={images.remove} />
                                    <Para>{discription.remove}</Para>
                                    {modal && (
                                        <>
                                          <Overlay onClick={toggle} ></Overlay>
                             
                                        <Whole>
                                            <FirstContent>
                                                <H5Content> {content.popup} </H5Content>
                                                <Img onClick={toggleModal} src={images.wrong} />
                                            </FirstContent>
                                            <SecondContent>
                                                <ParaContent>{content.removecontent}</ParaContent>
                                                <ParaContent>{content.removename}</ParaContent>
                                            </SecondContent>
                                            <LastContent>
                                                <Buttoncontent onClick={toggleModal}>Cancel</Buttoncontent>
                                                <Buttoncontent onClick={() => { Delete(num) }}>Ok</Buttoncontent>
                                            </LastContent>
                                        </Whole>
                                        </>
                                    )}
                                </Action>
                            </BoxTag1>
                            {
                                shown && <Last />}
                                 {click && (
                                    <>
                                   <Overlay onClick={toggle} ></Overlay>
                                 
                                        <MainContent >
                                        
                                             <Information>
                                             <H5Contents> {content.prospectpopup}</H5Contents>
                                             <ImgContent onClick={toggle} src={images.wrong} />
                                             </Information>

                                             <Paragraph>
                                              <P>{content.verifytext}</P>
                                             </Paragraph>

                                             <Form>
                                                <div>
                                             <H5Tag>{content.popupname}</H5Tag>
                                            <Input type="text"  placeholder="Type Something"ref={username}/>
                                             <PTag >{formErrors.username}</PTag>
                                             </div>
                                             
                                             <div>
                                             <H5Tag>{content.popupmail}</H5Tag>
                                             <Input type="text" placeholder="Type Something" ref={email}/>
                                             <PTag>{formErrors.email}</PTag>
                                             </div>
                                             </Form>

                                             <MainParagraph>
                                                <PopPara>{content.popupcontent}</PopPara>
                                             </MainParagraph>

                                             <Additional>
                                             <H5Content>{content.additional}</H5Content>

                                             <PopPara>{content.informationpopup}</PopPara>
                                             </Additional>

                                             <LastText>
                                             <InputTag type="textarea"/>
                                      
                                             </LastText>
                                             
                                             <P>{content.max}</P>

                                             <ButtonSend>
                                               <ButtonCancel>Cancel</ButtonCancel>
                                               <ButtonCancel onClick={Emailvalidation}>Send Application</ButtonCancel>
                                             </ButtonSend>

                                        </MainContent>
                                        </>
                                        )}

                                 
                                
                        </>

                    )

                })}
            </SecondPage>
            <Footer />
        </>
    )




}

function Last() {
    return (
        <Footer1>
            <SubFooter>
                <H5> {content.late}</H5>
                <Para>{content.need}</Para>
                <Para>{content.outreach}</Para>
                <Para>{content.leave}</Para>
                <Para>{content.member}</Para>
            </SubFooter>

        </Footer1>
    )

}
