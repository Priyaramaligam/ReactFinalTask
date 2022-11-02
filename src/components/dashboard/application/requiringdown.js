import { content } from "../../../resources/string"
import {
    WholeContent, Main, H5, H2, Box, MainHeader, Number, SubBox, SecondPage, LabelContent, Page, Button,
    ButtonClear, SearchBox, SearchBar, ButtonTag, Input, SearchImg, SubCart, Status, Select, Date, Sub, BodyContent,
    First,Paragraph,Option,LabelTag, Name, Content, Footer1, SubFooter, Action, Para, Ppo, DateContent, BoxTag, Imageset, HeadingTag, LinkContent,
} from "../application/applicationstyle"

export default function Last(){
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