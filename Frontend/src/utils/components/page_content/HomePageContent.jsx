import FlowerHands from '../../../assets/hands-with-flowers.png'
import Post from '../Post'
import { useState } from "react";
import TagInput from '../TagInput';
import CountyList from '../CountyList';

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


    const [county, setCounty] = useState("Your county");

    const handleCountyChange = (event) => {
        setCounty(event.target.value);
        console.log("county now: ", county)
    }

    const checkedItems = {
        "Food": false,
        "Accomodation": false,
        "Transport": false,
        "Clothes": false,
        "Hygiene products": false,
        "Other": false
    }

    const handleTagChange = (event) => {
        var item = event.target.value;
        checkedItems[item] = !checkedItems[item]
        console.log ("[HomePageContent][handleTagChange]\n\t", checkedItems)
    }

    // TODO: aici trebuie sa facem o logica daca se schimba vreun filtru sa faci rerender la postari
    // TODO: variabilele modificate sunt county(judetul) si checkedItems(tagurile)
    return (
        <div>
            <div className='flower-hands'>
                <img src={FlowerHands} alt="Flower Hands" width='300px' height='200px' />
            </div>

            <div className='home-filters'>
                <select className="select-county" value={county} onChange={handleCountyChange}>
                    <option value="" hidden disabled>Select county</option>
                    {CountyList.map((county) => (
                        <option key={county.name + " home - page"} value={county.name}>{county.name}</option>
                    ))}
                </select>
                <div className="home-tags">
                    <TagInput
                        value={"Food"}
                        onChange={handleTagChange}
                    />
                    <TagInput
                        value={"Accomodation"}
                        onChange={handleTagChange}
                    />
                    <TagInput
                        value={"Transport"}
                        onChange={handleTagChange}
                    />
                    <TagInput
                        value={"Clothes"}
                        onChange={handleTagChange}
                    />
                    <TagInput
                        value={"Hygiene products"}
                        onChange={handleTagChange}
                    />
                    <TagInput
                        value={"Other"}
                        onChange={handleTagChange}
                    />
                </div>
            </div>

            <div className='posts'>
                {/* TODO: aici trebuie sa dam datele ca param, nu hardcodate in Post */}
                <Post page="home" />
                <Post page="home" />
                <Post page="home" />
                <Post page="home" />
                <Post page="home" />
                <Post page="home" />
            </div>
        </div>
    );
}


export default HomePageContent;
