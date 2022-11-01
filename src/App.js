// import Navigation from "./components/common/navbar/navbar"
import MidContainer from "./components/dashboard/mainContainer/midcontainer";
import Application from "./components/dashboard/application/application";
// import DownArrow from "./components/dashboard/application/downarrow";
import Requiring from "./components/dashboard/application/requiring";
import Prospect from "./components/dashboard/application/prospect";
import Quoting from "./components/dashboard/quoting/quoting";
import EligibilityCheck from "./components/dashboard/eligibilitycheck/eligibilitycheck";
import ScopeOfAppointment from "./components/dashboard/scope/scope";
import { Route, Routes } from "react-router-dom"
import PageNotFound from "./components/common/pagenotfound/pagenotfound";
function App() {
  return (
   <>
   {/* <Navigation/> */}
   {/* <MidContainer/> */}
   {/* <Application/> */}

   <Routes>
    <Route path="/" element={<MidContainer/>} />
    <Route path="/MidContainer" element={<MidContainer/>}/>
    <Route path="/Quoting" element={<Quoting/>}/>
        <Route path="/Application" element={<Application />}/> 
        <Route path="/EligibilityCheck" element={<EligibilityCheck />}/>
        <Route path="/ScopeOfAppointment" element={<ScopeOfAppointment />}/> 
       

        <Route path="/Requiring" element={<Requiring/>}/> 
        <Route path="/Prospect" element={<Prospect/>}/> 
        <Route path="*" element={<PageNotFound/>}/>
          </Routes>

   </>
  )
}
export default App;