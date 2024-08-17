import CS_first from '../assets/CS_first.jpg';
import CS_second from '../assets/CS_second.jpg';
import '../App.css'
function CyberSecurity(){
    return(
        <>
        <div className='App'>
            <img className='imageCards' src={CS_first} alt='CyberSec_1'/>
            <img className='imageCards' src={CS_second} styalt='CyberSec_2'/>
        </div>
        </>
    )
}

export default CyberSecurity