import React from "react";
import LeftBar from '../utils/components/LeftBar'
import LimeContent from "../utils/components/LimeContent";
import TopBar from "../utils/components/TopBar";
import WantToHelpContent from "../utils/components/page_content/WantToHelpContent";

const WannaHelp = () => {
    return (
        <div className="page-layout">
			<TopBar login_flag={0}/>
			{/* page includes left bar and content, flex*/}
			<div className="page">
				<LeftBar />
				<LimeContent content={WantToHelpContent}/>
			</div>
		</div>
    );
}


export default WannaHelp;
