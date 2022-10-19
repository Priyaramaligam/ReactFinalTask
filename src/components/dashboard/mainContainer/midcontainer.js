import dashboardContent from "../../../data/mainContainer";
import { images } from "../../../resources/image";
import { content } from "../../../resources/string";
import Navigation from "../../common/navbar/navbar";
import {  Content, MidImage, HeadingContent, ParagraphContent, Container, Para, 
    Last, FooterContent, FooterSubContent, FooterImg,Cart,WholePage,P} from "./midContainerStyle";
import { Link } from "react-router-dom";
import Footer from "../../common/footer/footer";
export default function MidContainer() {
    return (
        <>
        <WholePage>
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
                  <Para>{content.help}</Para>
                  </Cart>

                  <Cart>
                  <FooterImg src={images.producer}/>
                  <Para>{content.producer}</Para>
                  </Cart>

                  <Cart>
                  <FooterImg src={images.point}/>
                  <Para>{content.sales}</Para>
                  </Cart>
                  <Cart>
                  <FooterImg src={images.medicare}/>
                  <Para>{content.center}</Para>
                  </Cart>
                 
                </FooterSubContent>
            </Last>
           
        
     
         <Footer/>  
         </WholePage>   
     </>

           
            )
      }

