import FlowerHands from '../../../assets/hands-with-flowers.png'
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
