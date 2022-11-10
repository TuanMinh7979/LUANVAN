import { Container } from "@mui/system";
import { Box, Paper, Typography, Button, IconButton, Link, Grid } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import JobCard from "./JobCard";
function JobList() {
    return (<>
        <Container maxWidth >
            <Paper elevation={4} sx={{ p: 3}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" fontWeight="600" gutterBottom sx={{ ml: 3 }}>
                        Tin tuyển dụng, việc làm mới nhất
                    </Typography>
                    <Link href="#" underline="none" >
                        <Grid container>
                            <Grid sx="4">
                                <Typography >
                                    Xem tất cả
                                </Typography>
                            </Grid>
                            <Grid sx="8">
                                <ArrowForwardIcon />
                            </Grid>
                        </Grid>
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        width: '50%',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around'
                    }}
                >
                    <IconButton>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <Button variant="contained" color="success" size="small" sx={{ borderRadius: "10px" }}>Ngẫu nhiên</Button>
                    <Button variant="contained" color="success" size="small" sx={{ borderRadius: "10px" }}>Hà Nội</Button>
                    <Button variant="contained" color="success" size="small" sx={{ borderRadius: "10px" }}>Hồ Chí Minh</Button>
                    <Button variant="contained" color="success" size="small" sx={{ borderRadius: "10px" }}>Miền Bắc</Button>
                    <Button variant="contained" color="success" size="small" sx={{ borderRadius: "10px" }}>Miền Nam</Button>
                    <IconButton>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
                <Grid container sx={{ width: "100%", mt: 4, justifyContent: "center" }} rowGap={2}>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                    <Grid xs={3}>
                        <JobCard
                            jobTitle="Lorem Ipsum Text 1234"
                            companyName="RASEN GROUPS"
                            companyLogo="https://cdn.topcv.vn/44/company_logos/trung-tam-tu-hoc-tieng-anh-x3english-5cf8e0057a2c3.jpg"
                            salary="15 Triệu"
                            location="Hà nội"></JobCard>
                    </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }} >
                    <IconButton>
                        <FiberManualRecordIcon fontSize="small" color="success"></FiberManualRecordIcon>
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordOutlinedIcon fontSize="small" color="success"></FiberManualRecordOutlinedIcon>
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordOutlinedIcon fontSize="small" color="success"></FiberManualRecordOutlinedIcon>
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordOutlinedIcon fontSize="small" color="success"></FiberManualRecordOutlinedIcon>
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordOutlinedIcon fontSize="small" color="success"></FiberManualRecordOutlinedIcon>
                    </IconButton>
                </Box>
            </Paper>
        </Container>
    </>)
}

export default JobList;