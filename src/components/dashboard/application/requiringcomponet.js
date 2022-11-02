
import { images } from "../../../resources/image"
import {
    WholeContent, Main, H5, H2, Box, MainHeader, Number, SubBox, SecondPage, LabelContent, Page, Button, ButtonClear, SearchBox, SearchBar,
    ButtonTag, Input, SearchImg, SubCart, Status, Select, Date, Sub, BodyContent
    , Ppo, First, Name, Content, P, BoxTag, Imageset, DateContent, Register
    , Action, HeadingTag, Para, LinkContent, Paragraph, LabelTag, Option
 } from "../application/applicationstyle"

 import DownArrow from "../application/downarrow"
 import { useState } from "react"

import Last from "./requiringdown"
 
 export default function RequiringContent({namecontent, down,account,accountnum,last,limit,respond,pdf}){
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
                                <HeadingTag>{namecontent}</HeadingTag>
                            </Content>

                        </First>
                       

                        <Ppo>
                            <Para>{account}</Para>
                            <Para>{accountnum}</Para>
                        </Ppo>

                        <DateContent>
                            <Para>{last}</Para>
                            <Para>{limit}</Para>
                        </DateContent>

                        <Action>
                            <Name src={images.response} />
                            <Para>{respond}</Para>
                        </Action>
                        <Action>
                            <Name src={images.pdf} />
                            <Para>{pdf}</Para>
                        </Action>
                      
                    </BoxTag>
                    {
                            shown && <Last />} 

         </>
    )
 }           

 