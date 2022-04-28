import FlowerHands from '../../../assets/hands-with-flowers.png'
import Face from '../../../assets/face.png'
import EmailIcon from '../../../assets/icons/email_icon.png'
import StreetIcon from '../../../assets/icons/location_icon.png'
import PhoneIcon from '../../../assets/icons/phone_icon.png'
import ProfileIcon from '../../../assets/icons/profile_icon.png'
import PostPersonData from '../PostPersonData'
import Tag from '../Tag'
import Button from '../Button'
import Post from '../Post'

const HomePageContent = () => {
    return (
        <div>
            <div className='flower-hands'>
                <img src={FlowerHands} alt="Flower Hands" width='300px' height='200px'/>
            </div>
            
            <div className='posts'>
                {/* TODO: aici trebuie sa dam datele ca param, nu hardcodate in Post */}
                <Post page="home"/>
                <Post page="home"/>
                <Post page="home"/>
                <Post page="home"/>
                <Post page="home"/>
                <Post page="home"/>
            </div>
        </div>
    );
}


export default HomePageContent;
