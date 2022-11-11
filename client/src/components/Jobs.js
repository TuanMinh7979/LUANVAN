import { Box, Container, Input, OutlinedInput, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, InputAdornment } from "@mui/material"
import env from 'react-dotenv'
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BadgeIcon from '@mui/icons-material/Badge';
import Image from "mui-image";
import { fontWeight } from "@mui/system";
import JobList from "./JobList";
export default function Jobs() {
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 200,
            },
        },
    };
    return (<>
        <Container>
            {/* seacrch control */}
            <Box
                sx={{
                    mt: 4,
                    display: 'flex',
                    flexWrap: 'wrap',
                    w: 100
                }}
            >
                <TextField
                    size="small"
                    color="success"
                    placeholder="Tên công việc, vị trí muốn ứng tuyển"
                    sx={{
                        flexBasis: "20%",
                        mr: 2
                    }}
                />
                {/* Cong viec */}
                <FormControl
                    color="success"
                    size="small"
                    sx={{ width: "15%", mb: 1, mr: 2 }}
                >
                    <InputLabel id="demo-simple-select-label">Ngành nghề</InputLabel>
                    <Select
                        startAdornment={
                            <InputAdornment position="start">
                                <WorkIcon color="success" fontSize="small" />
                            </InputAdornment>
                        }
                        label="Ngành nghề"
                        MenuProps={MenuProps}
                    >
                        {env.JOBS.split(", ").map((item, key) => (<MenuItem value={item} key={key}>{item}</MenuItem>))}
                    </Select>
                </FormControl>
                {/* Noi lam viec */}
                <FormControl
                    color="success"
                    size="small"
                    sx={{ width: "15%", mb: 1, mr: 2 }}
                >
                    <InputLabel id="demo-simple-select-label">Địa điểm công ty</InputLabel>
                    <Select
                        startAdornment={
                            <InputAdornment position="start">
                                <PlaceIcon color="success" fontSize="small" />
                            </InputAdornment>
                        }
                        label="Địa điểm công ty"
                        MenuProps={MenuProps}
                    >
                        {env.LOCATION.split(", ").map((item, key) => (<MenuItem value={item} key={key}>{item}</MenuItem>))}
                    </Select>
                </FormControl>
                {/* Chi tiet cong viec */}
                <FormControl
                    color="success"
                    size="small"
                    sx={{ width: "15%", mb: 1, mr: 2 }}
                >
                    <InputLabel id="demo-simple-select-label">Cấp bậc</InputLabel>
                    <Select
                        label="Cấp bậc"
                        MenuProps={MenuProps}
                        startAdornment={
                            <InputAdornment position="start">
                                <BadgeIcon color="success" fontSize="small" />
                            </InputAdornment>
                        }
                    >
                        {env.LEVEL.split(", ").map((item, key) => (<MenuItem value={item} key={key}>{item}</MenuItem>))}
                    </Select>
                </FormControl>
                {/* Muc luong */}
                <FormControl
                    color="success"
                    size="small"
                    sx={{ width: "15%", mb: 1, mr: 2 }}
                >
                    <InputLabel id="demo-simple-select-label">Mức lương</InputLabel>
                    <Select
                        label="Mức lương"
                        MenuProps={MenuProps}
                        startAdornment={
                            <InputAdornment position="start">
                                <AttachMoneyIcon color="success" fontSize="small" />
                            </InputAdornment>
                        }
                    >
                        {env.GROSS.split(", ").map((item, key) => (<MenuItem value={item} key={key}>{item}</MenuItem>))}
                    </Select>
                </FormControl>
                {/* search btn */}
                <FormControl
                >
                    <Button
                        variant="contained"
                        color="success"
                    >Tìm việc ngay</Button>
                </FormControl>
            </Box>
        </Container>
        {/* Main */}
        <Container maxWidth
            sx={{ background: "#F0F0F0", mt: 4, pb: 4 }}
        >
            <Container
                maxWidth
                sx={{
                    p: 4
                }}
            >
                {/* image */}
                <Box
                >
                    <Typography variant="h6"
                        sx={{
                            fontSize: '24px',
                            fontWeight: 500
                        }}
                    >
                        Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc
                    </Typography>
                    <Typography variant="p">
                    Tiếp cận 30,000+ tin tuyển dụng việc làm mới mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
                    </Typography>
                    <Image
                        sx={{
                            mt: 2
                        }}
                        src="https://static.topcv.vn/img/Banner%20cho%20TopCV-01.png"
                        fit="cover"
                        duration={0}
                    />
                </Box>
                {/* Joblist */}
            </Container>
            <Box sx={{mt: 3}}>
                <JobList />
                </Box>
        </Container>
    </>)
}