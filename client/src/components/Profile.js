import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Box, Typography, createTheme } from "@mui/material";
import sampleImg from "../assets/logo_banner.png";
import logo from "../assets/companylogo_sample.png";
import Image from "mui-image";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useReactToPrint } from "react-to-print";
import { RichTextDisplay } from "./RichText";

import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import { Navigate } from "react-router-dom";

import schoolImg from "../assets/5853.jpg"
import careerImg from "../assets/6671.jpg"
import activityImage from "../assets/13095.jpg"
import certificateImg from "../assets/8601.jpg"
export default function Profile({ user }) {

	const ref = useRef();
	const theme = createTheme();
	const handlePrint = useReactToPrint({
		content: () => ref.current,
		documentTitle: "test",
		onAfterPrint: () => console.log("QA print"),
	});
	const navigate = useNavigate();
	function navigateTo(location) {
		navigate(location);
	}
	const { data, loading, error } = useFetch(`/user/${user.user._id}`);
	useEffect(() => {
		if (user.user.role != "candidate") {
			navigateTo("/");
		}
	});
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					{data && data.aboutMe ? (
						<Grid
							container
							sx={{
								justifyContent: "center",
								background: "#f1f2f7",
								pb: 4,
							}}
						>
							{/* Head */}
							<Grid
								xs={8}
								container
								component={Paper}
								sx={{
									mt: 3,
									rowGap: 3,
									justifyContent: "center",
									p: 3,
								}}
							>
								<Box>
									<Image
										src={sampleImg}
										width="1000px"
										height="300px"
										duration={0}
										fit="scale-down"
									/>
								</Box>
								<Grid
									item
									xs={12}
									sx={{
										display: "flex",
										alignItems: "center",
										columnGap: 2,
									}}
								>
									<Grid xs={3}>
										<Image
											src={logo}
											width="160px"
											height="160px"
											duration={0}
											fit="scale-down"
											sx={{
												borderRadius: "50%",
											}}
										/>
									</Grid>
									<Grid xs={6}>
										<Typography variant="h2" fontWeight={600}>{data.name}</Typography>
										<Typography variant="h6">{data.title}</Typography>
									</Grid>
									<Grid xs={4}>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												mb: 1
											}}
										>
											<EmailIcon fontSize="large" />
											<Typography variant="h6" sx={{ ml: 2, fontWeight: 550 }}>
												{data.email}
											</Typography>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
											}}
										>
											<CallIcon fontSize="large" />
											<Typography variant="h6" sx={{ ml: 2, fontWeight: 550 }}>
												{data.phone}
											</Typography>
										</Box>
									</Grid>
								</Grid>
							</Grid>
							{/* Hoc van */}
							<Grid
								xs={8}
								component={Paper}
								container
								sx={{
									mt: 3,
									justifyContent: "center",
									p: 3,
									alignItems: "center"
								}}
							>
								<Grid
									item
									xs={7}>
									<Grid
										item
										xs={12}
									>
										<Typography variant="h4" fontWeight={550}>
											※ Học vấn
										</Typography>
									</Grid>
									<RichTextDisplay
										data={JSON.parse(data.educationCv)}
									></RichTextDisplay>
								</Grid>
								<Grid
									item
									xs={5}>
									<Image
										src={schoolImg}
										duration={0}
									>
									</Image>
								</Grid>

							</Grid>
							{/* Muc tieu nghe nghiep */}
							<Grid
								xs={8}
								component={Paper}
								container
								sx={{
									mt: 3,
									rowGap: 3,
									justifyContent: "center",
									p: 3,
									alignItems: "center"
								}}
							>
								<Grid
									item
									xs={7}>
									<Grid
										item
										xs={12}
									>
										<Typography variant="h4" fontWeight={550}>
											※ Mục tiêu
										</Typography>
									</Grid>
									<RichTextDisplay
										data={JSON.parse(data.objectiveCv)}
									></RichTextDisplay>
								</Grid>
								<Grid
									item
									xs={5}>
									<Image
										src={careerImg}
										duration={0}
									>
									</Image>
								</Grid>

							</Grid>
							{/* <Grid
								xs={8}
								component={Paper}
								sx={{
									mt: 3,
									rowGap: 3,
									justifyContent: "center",
									p: 3,
								}}
							>
								<Typography variant="h6" fontWeight={550}>
									Mục tiêu nghề nghiệp
								</Typography>
								<RichTextDisplay
									data={JSON.parse(data.objectiveCv)}
								></RichTextDisplay>
							</Grid>
							{/* Hoat dong */}
							<Grid
								xs={8}
								component={Paper}
								container
								sx={{
									mt: 3,
									rowGap: 3,
									justifyContent: "center",
									p: 3,
									alignItems: "center"
								}}
							>
								<Grid
									item
									xs={7}>
									<Grid
										item
										xs={12}
									>
										<Typography variant="h4" fontWeight={550}>
											※ Hoạt động
										</Typography>
									</Grid>
									<RichTextDisplay
										data={JSON.parse(data.activitiesCv)}
									></RichTextDisplay>
								</Grid>
								<Grid
									item
									xs={5}>
									<Image
										src={activityImage}
										duration={0}
									>
									</Image>
								</Grid>

							</Grid>
							{/* <Grid
								xs={8}
								component={Paper}
								sx={{
									mt: 3,
									rowGap: 3,
									justifyContent: "center",
									p: 3,
								}}
							>
								<Typography variant="h6" fontWeight={550}>
									Hoạt động
								</Typography>
								<RichTextDisplay
									data={JSON.parse(data.activitiesCv)}
								></RichTextDisplay>
							</Grid> */}
							{/* Chung chi */}
							<Grid
								xs={8}
								component={Paper}
								container
								sx={{
									mt: 3,
									rowGap: 3,
									justifyContent: "center",
									p: 3,
									alignItems: "center"
								}}
							>
								<Grid
									item
									xs={7}>
									<Grid
										item
										xs={12}
									>
										<Typography variant="h4" fontWeight={550}>
											※ Chứng chỉ
										</Typography>
									</Grid>
									<RichTextDisplay
										data={JSON.parse(data.certificationsCv)}
									></RichTextDisplay>
								</Grid>
								<Grid
									item
									xs={5}>
									<Image
										src={certificateImg}
										duration={0}
									>
									</Image>
								</Grid>

							</Grid>
							{/* <Grid
								xs={8}
								component={Paper}
								sx={{
									mt: 3,
									rowGap: 3,
									justifyContent: "center",
									p: 3,
								}}
							>
								<Typography variant="h6" fontWeight={550}>
									Chứng chỉ
								</Typography>
								<RichTextDisplay
									data={JSON.parse(data.certificationsCv)}
								></RichTextDisplay>
							</Grid>  */}
						</Grid>
					) : (
						<Navigate to="/updateprofile" replace={true} />
					)}
				</>
			)}
		</>
	);
}
