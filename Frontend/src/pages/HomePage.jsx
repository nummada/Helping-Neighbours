import HomePageContent from "../utils/components/HomePageContent";
import LeftBar from '../utils/components/LeftBar'
import LimeContent from "../utils/components/LimeContent";
import TopBar from "../utils/components/TopBar";

const HomePage = () => {
    return (
      // page-layout is in column
        <div className="page-layout">
          <TopBar login_flag={0}/>
          {/* page includes left bar and content, flex*/}
          <div className="page">
            <LeftBar />
            {/* TODO: la LimeContent trebuie sa trimitem ca parametru continutul specific paginii homepage
                adica ceva clasa/const cu poza de sus, filtrele si postarile. pentru restul paginilor care au
                tot asa lime background, facem la fel, cate o componenta care sa contina tot ce trebuie
            */}
			<LimeContent content={HomePageContent}/>
          </div>
        </div>
      );
}


export default HomePage;
