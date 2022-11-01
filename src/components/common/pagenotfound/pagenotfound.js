import { content } from "../../../resources/string";
import { images } from "../../../resources/image";
import Navigation from "../navbar/navbar";
import Footer from "../footer/footer";
import {Whole,Content,Img,H2,Main,P,MainContent,FooterWrapper} from "../pagenotfound/pagenotfoundstyle"

export default function PageNotFound() {
    return(
        <>
      <Navigation/>
             <Whole>
                <MainContent>
                <Content>
                <Img src={images.notfound} />
                <H2>{content.error}</H2>
                </Content>
                <Main>
                    <P>{content.first}</P>
                    <P>{content.second}</P>
                    <P>{content.third}</P>

                </Main>
                </MainContent>
             </Whole>
             <FooterWrapper>
             <Footer/>
      </FooterWrapper>
      </>
    );

}