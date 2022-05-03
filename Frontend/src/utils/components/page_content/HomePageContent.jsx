import FlowerHands from '../../../assets/hands-with-flowers.png'
import Post from '../Post'

import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const HomePageContent = () => {
    // var { isAuthenticated, user } = useAuth0();

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         console.log("[PROFILE][is not Authenticated][Returning...]")
    //         return
    //     }

    //     console.log("[PROFILE][isAuthenticated][User = %O]", user)
    // },
    // // eslint-disable-next-line
    // [isAuthenticated])

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
