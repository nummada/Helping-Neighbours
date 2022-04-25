import FlowerHands from '../../assets/hands-with-flowers.png'
import Face from '../../assets/face.png'
import EmailIcon from '../../assets/icons/email_icon.png'
import StreetIcon from '../../assets/icons/location_icon.png'
import PhoneIcon from '../../assets/icons/phone_icon.png'
import ProfileIcon from '../../assets/icons/profile_icon.png'
import PostPersonData from './PostPersonData'

const HomePageContent = () => {
    // TODO: aici trebuie cumva sa luam datele despre postari din backend
    const name = "Popescu Ion"
    const street = "Strada Mihai Eminescu 238, Bucuresti"
    const phone = "0734 698 123"
    const mail = "josiane43@yahoo.com"
    const post_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit ipsum quis metus mollis pretium. Aliquam id varius ligula. Donec euismod sodales mauris non maximus. Phasellus enim erat, aliquet id lorem id, porttitor vulputate justo. Aliquam ac lorem sit amet dolor vehicula faucibus eget ut nisi. Integer consequat odio ut ante fringilla, et tincidunt."
    return (
        <div>
            <div className='flower-hands'>
                <img src={FlowerHands} alt="Flower Hands" width='300px' height='200px'/>
            </div>
            
            <div className='posts'>
                <div className='post-container'>
                    <div className='post'>
                        <div className='left-side-of-post'>
                            <div className='post-profile-info'>
                                <div className='post-image'>
                                    <img src={Face} width="150px" height="150px" />
                                </div>
                                <div className='post-person-data'>
                                    <PostPersonData icon={EmailIcon} text={mail} />
                                    <PostPersonData icon={StreetIcon} text={street} />
                                    <PostPersonData icon={PhoneIcon} text={phone} />
                                    <PostPersonData icon={EmailIcon} text={mail} />
                                </div>
                            </div> 
                        </div>
                        <div className='right-side-of-post'>
                            <div className='post-description-container'>
                                <div className='post-description'>
                                    {post_description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HomePageContent;
