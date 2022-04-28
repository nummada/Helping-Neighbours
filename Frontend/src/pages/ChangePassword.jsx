import React from "react";
import ChangePasswordContent from "../utils/components/page_content/ChangePasswordContent";
import LeftBar from '../utils/components/LeftBar'
import LimeContent from "../utils/components/LimeContent";
import TopBar from "../utils/components/TopBar";

const AboutUs = () => {
    return (
        <div className="page-layout">
			<TopBar login_flag={0}/>
			{/* page includes left bar and content, flex*/}
			<div className="page">
				<LeftBar />
				<LimeContent content={ChangePasswordContent}/>
			</div>
		</div>
    );
}


export default AboutUs;