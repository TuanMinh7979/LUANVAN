import { Container, Grid, Paper, Typography } from "@mui/material";
import JobCard from "./JobCard";

const fakejob = {
    "_id": "6384c15ca9e5043d73f1c353",
    "title": "Java Developer (Up To 40M)",
    "location": "Thành phố Hồ Chí Minh",
    "amount": 10,
    "jobType": "Toàn thời gian",
    "endDate": "2022-11-30T00:00:00.000Z",
    "gender": "Nam",
    "rank": "Nhân viên",
    "exp": "Dưới 1 năm",
    "currency": "VND",
    "salaryType": "Trong khoảng",
    "salaryMax": 40000000,
    "fullAddress": "- Hồ Chí Minh: Tầng 3, Tòa nhà Bcons III, 178/31 Nguyễn Văn Thương, Phường 25, Bình Thạnh",
    "description": "{\"blocks\":[{\"key\":\"5snho\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "candidateRequired": "{\"blocks\":[{\"key\":\"2ipnm\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "benefit": "{\"blocks\":[{\"key\":\"f8f9d\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "skillRequired": "",
    "categoryId": "635042e5ed1ee7636e6178d0",
    "companyId": "638478255f4dd5b0392e54e3",
    "recId": "6384785b5f4dd5b0392e54ed",
    "createdAt": "2022-11-28T14:10:36.386Z",
    "updatedAt": "2022-11-28T14:10:36.386Z",
    "__v": 0,
    "salaryMin": 10000000,
    "company": {
        "_id": "638478255f4dd5b0392e54e3",
        "location": "TP HCM",
        "phone": "0999999999",
        "email": "companies@gmail.com",
        "introduce": "FPT Software là công ty thành viên thuộc Tập đoàn FPT. Được thành lập từ năm 1999, FPT Software hiện là công ty chuyên cung cấp các dịch vụ và giải pháp phần mềm cho các khách hàng quốc tế, với hơn 25.500 nhân viên, hiện diện tại 27 quốc gia trên toàn cầu. Nhiều năm liền, FPT Software được bình chọn là Nhà Tuyển dụng được yêu thích nhất và nằm trong TOP các công ty có môi trường làm việc tốt nhất châu Á.",
        "linkToLogo": "https://cdn.topcv.vn/140/company_logos/fpt-software-6073b38a10cb4.jpg",
        "createdAt": "2022-11-28T08:58:14.003Z",
        "updatedAt": "2022-11-28T08:58:14.003Z",
        "__v": 0,
        "name": "FPT Software"
    }
}

export default function RecommentJobs() {
    return (<>
        <Container
            maxWidth
            sx={{
                mb: 3
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    p: 3
                }}>
                <Grid
                    container
                    sx={{
                        rowGap: 2
                    }}
                >
                    <Grid
                        item
                        xs={12}>
                        <Typography variant="h5" fontWeight="600" gutterBottom sx={{ ml: 3 }}>
                            Việc làm phù hợp với bạn
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}>
                        <Grid item xs={3}>
                            <JobCard job={fakejob} />
                        </Grid>
                        <Grid item xs={3}>
                            <JobCard job={fakejob} />
                        </Grid>
                        <Grid item xs={3}>
                            <JobCard job={fakejob} />
                        </Grid>
                        <Grid item xs={3}>
                            <JobCard job={fakejob} />
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    </>)
}