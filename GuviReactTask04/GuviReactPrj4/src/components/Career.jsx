import career_first from '../assets/career_first.png';
import career_second from '../assets/career_second.jpg';
import '../App.css'
function Career(){
    return(
        <>

        <div className='App'>
            <img className='imageCards' src={career_first} alt='career_first'/>
            <img className='imageCards' src={career_second} styalt='career_second'/>
        </div>
        </>
    )
}

export default Career