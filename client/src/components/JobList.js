import { Container } from "@mui/system";
import { Box, Paper, Typography, Button, IconButton, Link, Grid, Chip } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import JobCard from "./JobCard";
import companylogo from '../assets/companylogo_sample.png'

function JobList({ jobs }) {
    return (<>
        <Container maxWidth >
            <Paper elevation={4} sx={{ p: 3 }}>
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
                        width: '40%',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <IconButton>
                        <ArrowBackIosNewIcon fontSize="small" color="success" />
                    </IconButton>
                    {/* <Chip variant="contained" color="success" size="small" sx={{ borderRadius: "10px" }}>Ngẫu nhiên</Chip>
                    <Chip variant="contained" color="success" size="small" sx={{ borderRadius: "10px" }}>Hà Nội</Chip>
                    <Chi variant="contained" color="success" size="small" sx={{ borderRadius: "10px" }}>Hồ Chí Minh</Chi>
                    <Button variant="contained" color="success" size="small" sx={{ borderRadius: "10px" }}>Miền Bắc</Button>
                    <Button variant="contained" color="success" size="small" sx={{ borderRadius: "10px" }}>Miền Nam</Button> */}
                    <Chip color="success" label="Ngẫu nhiên" />
                    <Chip color="success" label="Hà Nội" variant="outlined" />
                    <Chip color="success" label="Hồ Chí Minh" variant="outlined" />
                    <Chip color="success" label="Miền Bắc" variant="outlined" />
                    <Chip color="success" label="Miền Nam" variant="outlined" />
                    <IconButton>
                        <ArrowForwardIosIcon fontSize="small" color="success" />
                    </IconButton>
                </Box>
                <Grid container sx={{ width: "100%", mt: 4, justifyContent: "center" }} rowGap={2}>
                    {
                        jobs.map(item => {

                            return (
                                <Grid xs={3}>
                                    <JobCard job={item} />

                                </Grid>

                            )


                        })
                    }


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