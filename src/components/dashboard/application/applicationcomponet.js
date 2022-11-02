
import { images } from "../../../resources/image"
import {
    WholeContent, Main, H5, H2, Box, MainHeader, Number, SubBox, SecondPage, LabelContent, Page, Button, ButtonClear, SearchBox, SearchBar,
    ButtonTag, Input, SearchImg, SubCart, Status, Select, Date, Sub, BodyContent
    , Ppo, First, Name, Content, P, BoxTag, Imageset, DateContent, Register
    , Action, HeadingTag, Para, LinkContent, Paragraph, LabelTag, Option
 } from "../application/applicationstyle"

 import DownArrow from "../application/downarrow"
 import { useState } from "react"



 export default function ApplicationContent({name,uparrow, process,down,access,core,date,request,num,no,action}){
    const [shown, isShown] = useState(false);
 const handleClick = event => { isShown(current => !current); }

 const [text, setText] = useState('');
    return(
       
        <>
        
                    <BoxTag>
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
                          <P>{process}</P>
                       </Content>

                    </First>

                    <Ppo>
                       <Para>{access}</Para>
                       <Para>{core}</Para>
                    </Ppo>

                    <DateContent>
                       <Para>{date}</Para>
                       <Para>{request}</Para>
                    </DateContent>

                    <Register>
                       <Para>{num}</Para>
                       <Para>{no}</Para>
                    </Register>

                    <Action>
                       <Name src={images.action} />
                       <Para>{action}</Para>
                    </Action>
                 </BoxTag>
                 {
                    shown && <DownArrow/>
                 }

              </>



           );
       
       

    
}