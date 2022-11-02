import { content, details } from "../../../resources/string"
import { images } from "../../../resources/image"
import { useState } from "react"
import Navigation from "../../common/navbar/navbar"
import { Link } from "react-router-dom"

import DownArrow from "../application/downarrow"
import { ManageApplication } from "../../common/pagecontent/pagecontent"

import Footer from "../../common/footer/footer"
// import { details } from "../../../resources/string"
import {
   WholeContent, Main, H5, H2, Box, MainHeader, Number, SubBox, SecondPage, LabelContent, Page, Button, ButtonClear, SearchBox, SearchBar,
   ButtonTag, Input, SearchImg, SubCart, Status, Select, Date, Sub, BodyContent
   , Ppo, First, Name, Content, P, BoxTag, Imageset, DateContent, Register
   , Action, HeadingTag, Para, LinkContent, Paragraph, LabelTag, Option
} from "../application/applicationstyle"
// import Footer from "../../common/footer/footer"
import ApplicationContent from "./applicationcomponet"

export default function Application() {
   const [shown, isShown] = useState(false);
   const handleClick = event => { isShown(current => !current); }

   const [text, setText] = useState('');

   return (
    <>
         <Navigation />


         <WholeContent>

            <Main>

               <H5> {content.applicationHeading}</H5>
               <LinkContent to='/Requiring'> <H5>  {content.information}</H5> </LinkContent>
               <LinkContent to='/Prospect'> <H5> {content.prospect}</H5></LinkContent>

            </Main>

            <>


               <Box>
                  <MainHeader>
                     <H2>{content.manage}</H2>
                     <Paragraph>{content.view}</Paragraph>
                  </MainHeader>

                  <SubBox>
                     <SubCart>

                        <SearchBar>
                           <SearchBox>
                              <Input type="text" placeholder="search first name" onChange={(e) => setText(e.target.value)} />
                              <SearchImg src={images.search} />
                           </SearchBox>

                           <SearchBox>
                              <Input type="text" placeholder="search last name" onChange={(e) => setText(e.target.value)} />
                              <SearchImg src={images.search} />
                           </SearchBox>
                        </SearchBar>

                        <ButtonTag>
                           <Button>Search</Button>

                           <ButtonClear>Clear</ButtonClear>
                        </ButtonTag>

                     </SubCart>

                     <Sub>

                        <Status>

                           <LabelContent>
                              <LabelTag>Status</LabelTag>
                              <Select >
                                 <Option>choose option</Option>
                                 <Option>yes</Option>
                                 <Option>no</Option>
                              </Select>
                           </LabelContent>

                           <LabelContent>
                              <LabelTag>Date</LabelTag>
                              <Date type="date" />
                           </LabelContent>
                        </Status>

                        <Page>
                           <label>Page</label>
                           <Number type="number" />
                        </Page>
                     </Sub>
                  </SubBox>
               </Box>

            </>
</WholeContent>


{details.filter(product =>
           product.name.toLowerCase().includes(text.toLowerCase()),
        ).map(discription => {
           return (

              <>

                              <ApplicationContent
                                 name={discription.name}
                                    process={discription.process}
                                    //  down={discription.down}
                                    //   uparrow={discription.uparrow}
                                           access={discription.access}
                                       core={discription.core}
                                       date={discription.date}
                                       request={discription.request}
                                       num={discription.num}
                                       no={discription.no}
                                       action={discription.action}/>
                                       
                 
               
              </>



           );
        })}


     

       <>
            <Footer />
         </>

      </>
   )

}
