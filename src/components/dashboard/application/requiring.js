import { content, page, require } from "../../../resources/string"
import { images } from "../../../resources/image"
import Navigation from "../../common/navbar/navbar"
import { useState } from "react"
import { Link } from "react-router-dom"
// import DownArrow from "../application/downarrow"
import {
    WholeContent, Main, H5, H2, Box, MainHeader, Number, SubBox, SecondPage, LabelContent, Page, Button,
    ButtonClear, SearchBox, SearchBar, ButtonTag, Input, SearchImg, SubCart, Status, Select, Date, Sub, BodyContent,
    First, Name, Content, Footer1, SubFooter, Action, Para, Ppo, DateContent, BoxTag, Imageset, HeadingTag, LinkContent,
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
                    <Box>
                        <MainHeader>
                            <H2>{content.manage}</H2>
                            <p>{content.view}</p>
                        </MainHeader>

                        <SubBox>
                            <SubCart>

                                <SearchBar>
                                    <SearchBox>
                                        <Input type="text" placeholder="search last name" onChange={(e) => setText(e.target.value)}  />
                                        <SearchImg src={images.search} />
                                    </SearchBox>

                                    <SearchBox>
                                        <Input type="text" placeholder="search last name"  onChange={(e) => setText(e.target.value)} />
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
                                        <label>Status</label>
                                        <Select >
                                            <option>choose option</option>
                                            <option>yes</option>
                                            <option>no</option>
                                        </Select>
                                    </LabelContent>

                                    <LabelContent>
                                        <label>Date</label>
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
    
                
                {/* <BodyContent>
                    <BoxTag>
                        <First>

                            <Imageset >

                                <Name onClick={handleClick} src={images.down} />
                            </Imageset>

                            <Content>
                                <HeadingTag>{content.namecontent}</HeadingTag>
                            </Content>

                        </First>
                       

                        <Ppo>
                            <Para>{content.account}</Para>
                            <Para>{content.accountnum}</Para>
                        </Ppo>

                        <DateContent>
                            <Para>{content.last}</Para>
                            <Para>{content.limit}</Para>
                        </DateContent>

                        <Action>
                            <Name src={images.response} />
                            <Para>{content.respond}</Para>
                        </Action>
                        <Action>
                            <Name src={images.pdf} />
                            <Para>{content.pdf}</Para>
                        </Action>
                      
                    </BoxTag>
                    {
                            shown && <Last />} */}

{/* 
                    <BoxTag>
                        <First>

                            <Imageset >

                                <Name onClick={handleClick1} src={images.down} />
                            </Imageset>

                            <Content>
                                <HeadingTag>{content.namecontent}</HeadingTag>
                            </Content>


                        </First>
                        <Ppo>
                            <Para>{content.account}</Para>
                            <Para>{content.accountnum}</Para>
                        </Ppo>
                        <DateContent>
                            <Para>{content.last}</Para>
                            <Para>{content.limit}</Para>
                        </DateContent>

                        <Action>
                            <Name src={images.response} />
                            <Para>{content.respond}</Para>
                        </Action>
                        <Action>
                            <Name src={images.pdf} />
                            <Para>{content.pdf}</Para>
                        </Action>


                    </BoxTag>
                    {
                        shown1 && <Last />}
            
                <BoxTag>
                    <First>

                        <Imageset >

                            <Name onClick={handleClick2} src={images.down} />
                        </Imageset>

                        <Content>
                            <HeadingTag>{content.namecontent}</HeadingTag>

                        </Content>
                    </First>
                    <Ppo>
                        <Para>{content.account}</Para>
                        <Para>{content.accountnum}</Para>
                    </Ppo>
                    <DateContent>
                        <Para>{content.last}</Para>
                        <Para>{content.limit}</Para>
                    </DateContent>
                    <Action>
                        <Name src={images.response} />
                        <Para>{content.respond}</Para>
                    </Action>
                    <Action>
                        <Name src={images.pdf} />
                        <Para>{content.pdf}</Para>
                    </Action>


                </BoxTag>
                {
                    shown2 && <Last />}
                <BoxTag>
                    <First>

                        <Imageset >

                            <Name onClick={handleClick3} src={images.down} />
                        </Imageset>

                        <Content>
                            <HeadingTag>{content.namecontent}</HeadingTag>

                        </Content>
                    </First>
                    <Ppo>
                        <Para>{content.account}</Para>
                        <Para>{content.accountnum}</Para>
                    </Ppo>
                    <DateContent>
                        <Para>{content.last}</Para>
                        <Para>{content.limit}</Para>
                    </DateContent>
                    <Action>
                        <Name src={images.response} />
                        <Para>{content.respond}</Para>
                    </Action>
                    <Action>
                        <Name src={images.pdf} />
                        <Para>{content.pdf}</Para>
                    </Action>



                </BoxTag>
                {
                    shown3 && <Last />} */}

{/* 
                <BoxTag>
                    <First>

                        <Imageset >

                            <Name onClick={handleClick4} src={images.down} />
                        </Imageset>

                        <Content>
                            <HeadingTag>{content.namecontent}</HeadingTag>

                        </Content>
                    </First>
                    <Ppo>
                        <Para>{content.account}</Para>
                        <Para>{content.accountnum}</Para>
                    </Ppo>
                    <DateContent>
                        <Para>{content.last}</Para>
                        <Para>{content.limit}</Para>
                    </DateContent>
                    <Action>
                        <Name src={images.response} />
                        <Para>{content.respond}</Para>
                    </Action>
                    <Action>
                        <Name src={images.pdf} />
                        <Para>{content.pdf}</Para>
                    </Action>


                </BoxTag>
                {
                    shown4 && <Last />} */}
                    {/* </BodyContent> */}
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

