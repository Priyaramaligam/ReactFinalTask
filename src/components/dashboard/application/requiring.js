import { content, page, require } from "../../../resources/string"
import { images } from "../../../resources/image"
import Navigation from "../../common/navbar/navbar"
import { useState } from "react"
import { ManageApplication } from "../../common/pagecontent/pagecontent"
import { Link } from "react-router-dom"
// import DownArrow from "../application/downarrow"
import {
    WholeContent, Main, H5, H2, Box, MainHeader, Number, SubBox, SecondPage, LabelContent, Page, Button,
    ButtonClear, SearchBox, SearchBar, ButtonTag, Input, SearchImg, SubCart, Status, Select, Date, Sub, BodyContent,
    First,Paragraph,Option,LabelTag, Name, Content, Footer1, SubFooter, Action, Para, Ppo, DateContent, BoxTag, Imageset, HeadingTag, LinkContent,
} from "../application/applicationstyle"
import Footer from "../../common/footer/footer"
export default function Requiring() {

    const [shown, isShown] = useState(false);
 

    const handleClick = event => {
        isShown(current => !current);

    }

    const [text, setText ] = useState('');

    return (

        <>
            <Navigation />
            <SecondPage>
                <WholeContent>
                    <Main>

                        <LinkContent to='/Application'>   <H5> {content.applicationHeading}</H5></LinkContent>
                        <H5>  {content.information}</H5>
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
                {page.filter(product =>
          product.namecontent.toLowerCase().includes(text.toLowerCase()),
        ).map(discription => {
       
            return (
              <>
               <BoxTag>
                        <First>

                            <Imageset >

                                <Name onClick={handleClick} src={images.down} />
                            </Imageset>

                            <Content>
                                <HeadingTag>{discription.namecontent}</HeadingTag>
                            </Content>

                        </First>
                       

                        <Ppo>
                            <Para>{discription.account}</Para>
                            <Para>{discription.accountnum}</Para>
                        </Ppo>

                        <DateContent>
                            <Para>{discription.last}</Para>
                            <Para>{discription.limit}</Para>
                        </DateContent>

                        <Action>
                            <Name src={images.response} />
                            <Para>{discription.respond}</Para>
                        </Action>
                        <Action>
                            <Name src={images.pdf} />
                            <Para>{discription.pdf}</Para>
                        </Action>
                      
                    </BoxTag>
                    {
                            shown && <Last />} 

              </>  
            )
        })}
    
                   </SecondPage>
                 <Footer/>


        </>
    )
}
function Last(){
    return(
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

