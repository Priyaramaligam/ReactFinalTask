import { content } from "../../../resources/string"
import { images } from "../../../resources/image"
import { useRef } from "react"
import {
    WholeContent, Main, H5, H2, Box, MainHeader, Number, SubBox, SecondPage, LabelContent, Page, Button,
    ButtonClear, SearchBox, SearchBar, ButtonTag, InputText, SearchImg, SubCart, Status, Select, Date, Sub, BodyContent,
    First, Name, Content, Footer1, SubFooter, Action, Para, Ppo, SearchBox1, SearchBar1, Profile, DateContent, BoxTag, Imageset, HeadingTag, BoxTag1, LinkContent
,} from "../application/applicationstyle"
 import { Prospects, Inputs, InputBox, SearchInput, Buttons, PageCount, Pages, Numbers,
    ProspectButton } from './prospectstyle'
import { useState } from "react"
import Last from "./requiringdown"
import { Whole, FirstContent, Img, SecondContent, ParaContent, LastContent, Buttoncontent,
    H5Content,Information,MainContent ,ImgContent,Paragraph,P,Form,Input,
    MainParagraph,PopPara,Additional,LastText,InputTag,Overlay,ButtonSend,ButtonCancel,H5Tag,H5Contents,PTag} from "./prospectpopupstyle";
import { Validate } from "./prospect"
export default function ProspectContent({name,down,dob,dateofbirth,zip,zipcode,writing,create,glass,verify}){
    const [shown, isShown] = useState(false);
    const [formErrors, setFormErrors] = useState({}); 
    const username=useRef({});
    const email=useRef({});
    
    const handleClick = event => {

        isShown(current => !current);
      }
      const [click ,setClick ] = useState(false);
   const Customerinfro = () => {
  setClick(!click);
   }
const [modal, setModal] = useState(false);
const toggleModal = () => {
   
        setModal(!modal);
};
const Emailvalidation =() =>{
 
    setFormErrors(Validate(username,email));
  }
  const toggle = () => {
    // num = i
    setClick(!click);
};

    return(
       
        <> 
         <BoxTag1>
        <First>
            <Imageset >
            <div onClick={handleClick}>
            {shown ? (
              <>
                <img src={images.uparrow}></img>
              </>
            ) : (
              <img src={images.down}></img>
            )}
          </div>
            </Imageset>
            <Content>
                <HeadingTag>{name}</HeadingTag>
            </Content>
        </First>
        <Ppo>
            <Para>{dob}</Para>
            <Para>{dateofbirth}</Para>
        </Ppo>
        <DateContent>
            <Para>{zip}</Para>
            <Para>{zipcode}</Para>
        </DateContent>
        <Action >
            <Name onClick= { Customerinfro }  src={images.writing} />
            <Para>{create}</Para>
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
          
        </Action> 
        <Action>
            <Name src={images.glass} />
            <Para>{verify}</Para>
        </Action>
        <Action >
            <Name onClick={() => { toggleModal();
            }}   src={images.remove} />
            <Para>Remove</Para>
            {modal && (
                <>
                  <Overlay onClick={toggleModal} ></Overlay>
     
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
                        <Buttoncontent >Ok</Buttoncontent>
                    </LastContent>
                </Whole>
                </>
            )}
        </Action>
    </BoxTag1> 
                {
                 shown && <Last />} 
                 </>
    )
}

