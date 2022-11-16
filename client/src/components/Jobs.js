import { Box, Container, Input, OutlinedInput, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, InputAdornment } from "@mui/material"
import env from 'react-dotenv'
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BadgeIcon from '@mui/icons-material/Badge';
import Image from "mui-image";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import JobList from "./JobList";
import banner from '../assets/banner.png'
import { useEffect } from "react";
export default function Jobs() {
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 200,
            },
        },
    };
    const data = {
        jobTile: "Chuyên Viên Quan Hệ Khách Hàng Tại Hà Nội ",
        companyName: "RASEN GROUPS",
        jobDuration: '22/07/2024',
        gross: '8 Triệu',
        workingType: 'Toàn thời gian',
        level: 'Nhân viên',
        amount: 10,
        sex: 'Nam',
        experience: 'Không yêu cầu kinh nghiệm',
        location: 'Số 7, Ngô Tất Tố, KDC 91B, Phường An khánh, Ninh Kiều, Cần Thơ'
    }
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    function getParams(){
        return {
            job: searchParams.get('job'),
            location: searchParams.get('location'),
            level: searchParams.get('level'),
            gross: searchParams.get('gross'),    
        }
    }
    useEffect(()=>{
        console.log(getParams())
    },[])
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
                        onClick={() => {
                            navigate({
                                pathname: '/jobs',
                                search: `?${createSearchParams(data)}`
                            })
                        }}
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
                            mt: 2,
                            borderRadius: '5px'
                        }}
                        src={banner}
                        duration={0}
                    />
                </Box>
                {/* Joblist */}
            </Container>
            <Box sx={{ mt: 3 }}>
                <JobList />
            </Box>
        </Container>
    </>)
}