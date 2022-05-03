import HomePageContent from "../utils/components/page_content/HomePageContent";
import LeftBar from '../utils/components/LeftBar'
import LimeContent from "../utils/components/LimeContent";
import TopBar from "../utils/components/TopBar";

import api from '../api'
import { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const { user, isAuthenticated } = useAuth0();
	const navigate = useNavigate();

	// this use efect executes this callback whenever anything inside the list
	// that is the second argument is modifed -> when isAuthenticated is modified
	useEffect(() => {
		if (!isAuthenticated) {
			console.log("[useEffect][NOT authenticated yet]\nReturning..")
			return
		}

		var auth0Id = user.sub
		console.log("[useEffect][isAuthenticated][user.sub = [%O]]", auth0Id)

		api.getUserByAuth0Id(auth0Id)
			.then((res) => console.log("[useEffect][isAuthenticated][api][getUserByAuth0Id][Ok][res = %O]", res))
			.catch((err) => {
				console.log("[useEffect][isAuthenticated][api][getUserByAuth0Id][error = %O]", err)

				if (err.code === "ERR_NETWORK") {
					// network error
					console.log("Network error, check connection with backend server")
					return;
				}

				// navigate("/profile")

				// this means the user is not in the DB so we have to create it
				var userPayload = {
					auth0Id: user.sub,
					name: user.nickname,
					email: user.email,
					accountType: 'BENEFACTOR',
				}

				api.createUser(userPayload)
					.then((res) => {
						console.log("[useEffect][isAuthenticated][api][createUser][Ok][res = %O]", res)
					})
					.catch((err) => {
						console.log("[useEffect][isAuthenticated][api][createUser][error = %O]", err)

					})

			})
	},
	// eslint-disable-next-line
	[isAuthenticated])


	return (
		// page-layout is in column
		<div className="page-layout">
			<TopBar login_flag={0} />
			{/* page includes left bar and content, flex*/}
			<div className="page">
				<LeftBar />
				{/* TODO: la LimeContent trebuie sa trimitem ca parametru continutul specific paginii homepage
                adica ceva clasa/const cu poza de sus, filtrele si postarile. pentru restul paginilor care au
                tot asa lime background, facem la fel, cate o componenta care sa contina tot ce trebuie
            */}
				<LimeContent content={HomePageContent} />
			</div>
		</div>
	);
}


export default HomePage;
