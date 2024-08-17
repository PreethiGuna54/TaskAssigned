import Career from "./Career"
import CyberSecurity from "./CyberSecurity"
import DataScience from "./DataScience"
import FullStackDevelopment from "./FullStackDevelopment"
import '../App.css'
function CourseDisplay(){
    return(
        <>
        <div  className='App'>
        <FullStackDevelopment/>
        <DataScience/>
        <CyberSecurity/>
        <Career/>
        </div>
        
        </>
    )
}
export default CourseDisplay