import { content } from "../../../resources/string";
import { images } from "../../../resources/image";

import { MainContainer, Heading, SubContent, H1, Cart, P, End,ImgTag,Sub,SubCard,Cards,SubDetails} from "./donwarrowstyle";
// import Application from "./application";
// import Navigation from "../../common/navbar/navbar";

export default function DownArrow() {
    return (
        <>
            {/* <Application/> */}
            <Cart>
            <MainContainer>
                <Heading>
                    <H1>{content.status}</H1>
                </Heading>
                <SubContent>
                    <Sub>
                    <SubDetails>
                        <P>{content.dob}</P>
                        <P>{content.dateofbirth}</P>
                    </SubDetails>
                    
                    <SubDetails>
                        <P>{content.zipcode}</P>
                        <P>{content.zip}</P>
                    </SubDetails>
                    <SubDetails>
                        <P>{content.country}</P>
                        <P>{content.value}</P>
                    </SubDetails>
                    <SubDetails>
                        <P>{content.cell}</P>
                        <P>{content.phone}</P>
                    </SubDetails>
                    <SubDetails>
                        <P>{content.upadte}</P>
                        <P>{content.dateupdate}</P>
                    </SubDetails>
                    <SubDetails>
                        <ImgTag src={images.pdf}/>
                        <P>{content.pdf}</P>
                    </SubDetails>
                    </Sub>
                    <Sub>
                    <SubDetails>
                        <P>{content.none}</P>
                        <P>{content.welcome}</P>
                    </SubDetails>
                    <SubDetails>
                        <P>{content.none}</P>
                        <P>{content.card}</P>
                    </SubDetails>
                    <SubDetails>
                         <ImgTag src={images.recall}/> 
                        <P>{content.recall}</P>
                    </SubDetails>
                    <SubDetails>
                        <ImgTag src={images.transfer}/>
                        <P>{content.transfer}</P>
                    </SubDetails>
                    <SubDetails>
                        <ImgTag src={images.hra}/>
                        <P>{content.hra}</P>
                        {/* <div>xcjkdkl</div> */}
                    </SubDetails>
                    </Sub>
               <SubCard>
                    <Cards>
                        <P>{content.need}</P>
                        <P>{content.outreach}</P>
                        <P>{content.need}</P>
                        <P>{content.outreach}</P>
                        <P>{content.need}</P>
                        <P>{content.outreach}</P>
                        <P>{content.late}</P>
                    </Cards>


                    <Cards>
                        <ImgTag src={images.response}/>
                        <P>{content.response}</P>
                    </Cards>

                   
                    </SubCard>
                    
               </SubContent>
               
              
               </MainContainer>
               <End>
               <ImgTag src={images.create}/>
                        <P>{content.create}</P>
                   
                    </End>
               </Cart>
        </>
    )
}