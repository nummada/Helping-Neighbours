import React from "react";
import LeftBar from '../utils/components/LeftBar'
import LimeContent from "../utils/components/LimeContent";
import TopBar from "../utils/components/TopBar";
import MyPostsContent from "../utils/components/page_content/MyPostsContent";

const MyPosts = () => {
    return (
        <div className="page-layout">
			<TopBar login_flag={0}/>
			{/* page includes left bar and content, flex*/}
			<div className="page">
				<LeftBar />
				<LimeContent content={MyPostsContent}/>
			</div>
		</div>
    );
}


export default MyPosts;