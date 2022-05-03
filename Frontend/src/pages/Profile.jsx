import React from "react";
import LeftBar from '../utils/components/LeftBar'
import LimeContent from "../utils/components/LimeContent";
import ProfileContent from "../utils/components/page_content/ProfileContent";
import TopBar from "../utils/components/TopBar";

const Profile = () => {
    return (
        <div className="page-layout">
			<TopBar login_flag={0}/>
			<div className="page">
				<LeftBar />
				<LimeContent content={ProfileContent}/>
			</div>
		</div>
    );
}


export default Profile;