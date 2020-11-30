import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helper/FetchData";
import { makeStyles } from "@material-ui/core/styles";
import {
	Container,
	CircularProgress,
	Grid,
	capitalize,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { formatDateFunc } from "../helper/FormatDate";

const stylesFunc = makeStyles((theme) => ({
	wrapper: {
		height: "calc(100vh - 9.0625rem)",
    backgroundColor: "#bdbdbd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
	},
	avatar: {
		margin: "1rem auto",
		backgroundColor: theme.palette.secondary.main,
	},
}));
function UserDetail() {
	const { id } = useParams();
	const mainStyles = stylesFunc();

	const [userDetail, setUserDetail] = useState();
	useEffect(() => {
		console.log(
			"🚀 ~ file: UserDetail.js ~ line 27 ~ UserDetail ~ userDetail",
			userDetail
		);
		fetchData(`/user/${id}`)
			.then((res) => setUserDetail(res))
			.catch()
			.finally();
	}, [id]);

	return (
		<Container className={mainStyles.wrapper}>
			{!userDetail ? (
				<CircularProgress />
			) : (
				<Grid
					container
					spacing={3}
					direction="row"
					justify="space-around"
					alignItems="center"
				>
					<Grid item xs={4}>
						<img src={userDetail?.picture} alt="user" />
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h6">
							{`${capitalize(userDetail?.title)} ${
								userDetail?.firstName
							} ${userDetail?.lastName}`}
						</Typography>{" "}
						<br />
						<Typography variant="h9">
							<b>Gender : </b> {capitalize(userDetail?.gender)}
						</Typography>{" "}
						<br />
						{userDetail?.registerDate && (
							<Typography variant="h9">
								<b> Date Of Birth: </b>
								{formatDateFunc(userDetail.dateOfBirth)}
							</Typography>
						)}{" "}
						<br />
						{userDetail?.registerDate && (
							<Typography variant="h9">
								<b>Register Date: </b>
								{formatDateFunc(userDetail.registerDate)}
							</Typography>
						)}{" "}
						<br />
						<Typography variant="h9">
            <b>Email: </b> {userDetail?.email}
						</Typography>{" "}
						<br />
						<Typography variant="h9">
            <b>Phone:</b>{userDetail?.phone}
						</Typography>{" "}
						<br />
					</Grid>
					<Grid item xs={4}></Grid>
				</Grid>
			)}
		</Container>
	);
}

export default UserDetail;

/*
{id: "0F8JIqi4zwvb77FGz6Wt", phone: "0700-3090279", lastName: "Fiedler", firstName: "Heinz-Georg", location: {…}, …}
dateOfBirth: "1974-03-12T21:15:08.878Z"
email: "heinz-georg.fiedler@example.com"
firstName: "Heinz-Georg"
gender: "male"
id: "0F8JIqi4zwvb77FGz6Wt"
lastName: "Fiedler"
location:
    city: "Fellbach"
    country: "Germany"
    state: "Rheinland-Pfalz"
    street: "4118, Schulstraße"
    timezone: "-7:00"
__proto__: Object
phone: "0700-3090279"
picture: "https://randomuser.me/api/portraits/men/81.jpg"
registerDate: "2020-03-07T00:42:32.221Z"
title: "mr"
*/
