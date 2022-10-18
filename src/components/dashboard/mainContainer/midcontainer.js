import dashboardContent from "../../../data/mainContainer";
import { images } from "../../../resources/image";
import { content } from "../../../resources/string";
import Navigation from "../../common/navbar/navbar";
import {  Content, MidImage, HeadingContent, ParagraphContent, Container, P, 
    Last, FooterContent, FooterSubContent, FooterImg,Cart} from "./midContainerStyle";
import { Link } from "react-router-dom";
import Footer from "../../common/footer/footer";
export default function MidContainer() {
    return (
        <>
        <div>
            <Navigation/>
            <Container>
                {/* <Card> */}
                {
                
                    dashboardContent.map((e, i) => {
                        return (
                            
                            <>
                                {/* <Dot> */}
                                <Content>

                                    <MidImage src={e.image} />
                                    <HeadingContent>
                                        {e.heading}
                                    </HeadingContent>
                                    <ParagraphContent>
                                        {e.paragraph}
                                    </ParagraphContent>
                                </Content>
                                {/* </Dot> */}
                            </>
                        )
                    }
                    )
                    
                }
            {/* </Card> */}
            </Container>
         
            <Last>
               <FooterContent>
                  <h5>{content.heading} </h5>
                   <P>{content.headingContent}</P> 
                   <p>{content.headerContent}</p> 
               </FooterContent>
                <FooterSubContent>
                    <Cart>
                   <FooterImg src={images.help}/>
                  <P>{content.help}</P>
                  </Cart>

                  <Cart>
                  <FooterImg src={images.producer}/>
                  <P>{content.producer}</P>
                  </Cart>

                  <Cart>
                  <FooterImg src={images.point}/>
                  <P>{content.sales}</P>
                  </Cart>
                  <Cart>
                  <FooterImg src={images.medicare}/>
                  <P>{content.center}</P>
                  </Cart>
                 
                </FooterSubContent>
            </Last>
           
        </div>  
     
         <Footer/>   
     </>

           
            )
      }

