import Face from '../../assets/face.png'
import EmailIcon from '../../assets/icons/email_icon.png'
import StreetIcon from '../../assets/icons/location_icon.png'
import PhoneIcon from '../../assets/icons/phone_icon.png'
import ProfileIcon from '../../assets/icons/profile_icon.png'
import PostPersonData from './PostPersonData'
import Tag from './Tag'
import Button from './Button'

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react'
import api from '../../api'

const Post = (props) => {
    const content = props.content
    const benefactorId = content.benefactorId
    const postId = content._id

    // console.log("[Post = %O][benefId = %O]", postId, benefactorId)

    const name = content.benefName
    const street = content.benefAddress
    const county = content.benefCounty
    const phone = content.benefPhoneNo
    const mail = content.benefEmail
    const post_description = content.description
    const page = props.page

    const tags = content.tags
    // console.log(tags)

    var tagMap = {
        'FOOD': "Food",
        'ACCOMODATION': "Accomodation",
        'TRANSPORT': "Transport",
        'CLOTHES': "Clothes",
        'HYGIENE_PRODUCTS': "Hygiene products",
        'OTHER': "Other",
    }

    const filteredTags = tags.map((tag, index) => <Tag text={tagMap[tag]} key={index} />)

    return (
        <div className='post-container'>
            <div className='post'>
                <div className='left-side-of-post'>
                    <div className='post-profile-info'>
                        <div className='post-image'>
                            <img src={Face} width="150px" height="150px" alt='' />
                        </div>
                        <div className='post-person-data'>
                            <PostPersonData icon={ProfileIcon} text={name} />
                            <PostPersonData icon={StreetIcon} text={`${street}, ${county}`} />
                            <PostPersonData icon={PhoneIcon} text={phone} />
                            <PostPersonData icon={EmailIcon} text={mail} />
                        </div>
                    </div>
                    <div className='tags'>
                        {/* TODO: aici trebuie sa punem doar tagurile care sunt
                        la postare. momentan sunt toate ca sa vad cum incap */}
                        {filteredTags}
                    </div>
                </div>
                <div className='right-side-of-post'>
                    <div className='post-description-container'>
                        <div className='post-description'>
                            {post_description}
                        </div>
                    </div>
                    {
                        page === 'home' ?
                            <div className='post-button-wrapper'>
                                <Button text="Interested" bg_color="bkg-green" on_click_function="interested" type="little-button" />
                            </div>
                            : <div className='post-button-wrapper'>
                                <Button text="Modify" bg_color="bkg-green" on_click_function="modify" type="little-button" />
                                <Button text="Delete" bg_color="bkg-red" on_click_function="delete" type="little-button" />
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}


export default Post;
