import { Container, Box, TextField, FormControl, InputAdornment, InputLabel, Select, MenuItem, Button, Stack, Typography, createTheme, Grid } from "@mui/material";
import env from "react-dotenv";
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BadgeIcon from '@mui/icons-material/Badge';
import Image from 'mui-image'
import logo from '../assets/companylogo_sample.png'
import { useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import PaidIcon from '@mui/icons-material/Paid';
import { alpha } from '@mui/material/styles'
import PeopleIcon from '@mui/icons-material/People';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WcIcon from '@mui/icons-material/Wc';
import StarIcon from '@mui/icons-material/Star';
import { RichTextDisplay } from "./RichText";
export default function JobDetail() {
    const theme = createTheme()
    console.log(theme)
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 200
            }
        }
    };
    const [data, setData] = useState({
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
    })
    const jsontest = {"blocks":[{"key":"d5jo","text":"- Tốt nghiệp đại học chính quy chuyên ngành Quản trị kinh doanh, Điện tử Viễn thông, Công nghệ thông tin hoặc các ngành Kinh tế.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2296c","text":"- Tối thiểu 2 năm kinh nghiệm ở vị trí tương đương","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1nvj8","text":"- Độ tuổi không quá < 40","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ca2g3","text":"- Có kỹ năng lập kế hoạch, triển khai, theo dõi việc thực hiện kế hoạch kinh doanh theo định kỳ và dài hạn","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dmfpa","text":"- Có khả năng thu hút, tổ chức, quản lý, đào tạo và phát triển nhân viên","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c6rv1","text":"- Có kỹ năng xử lý tình huống, giải quyết vấn đề và giao tiếp hiệu quả","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1dllo","text":"- Am hiểu về hoạt động marketing và bán hàng trong lĩnh vực viễn thông","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}
   
    return (
        <>
            <Container
                disableGutters
                maxWidth
                sx={{
                    background: '#f1f2f6'
                }}
            >
                <Container
                    maxWidth
                    sx={{
                        py: 4,
                        background: 'white'
                    }}
                >
                    {/* Search Control */}
                    <Box
                        sx={{
                            width: '80%',
                            mx: 'auto',
                            display: 'flex',
                            flexWrap: 'wrap'
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
                {/* Body */}
                <Container
                    maxWidth
                    disableGutters
                    sx={{
                        mt: 4,
                        background: '#f1f2f6'
                    }}
                >
                    {/* Title */}
                    <Stack
                        direction='row'
                        spacing={12}
                        sx={{
                            background: 'white',
                            py: 3,
                            my: 2,
                            width: '70%',
                            mx: 'auto',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}

                    >
                        <Box>
                            <Image
                                sx={{
                                    maxWidth: 110,
                                    maxHeight: 110,
                                    borderRadius: "50%"
                                }}
                                src={logo}
                                duration={0}
                            ></Image>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography variant="h5" color="initial" fontWeight={600} sx={{ color: theme.palette.success.light }}>
                                {data.jobTile}
                            </Typography>
                            <Typography variant="h6" color="initial">
                                {data.companyName}
                            </Typography>
                            <Stack direction='row' spacing={1} sx={{ color: 'rgba(0,0,0,0.7)' }}>
                                <AccessTimeIcon fontSize="small" />
                                <Typography variant="body1" >Hạn nộp hồ sơ: {data.jobDuration}</Typography>
                            </Stack>
                        </Box>
                        <Box
                        >
                            <Button startIcon={<SendIcon />} variant="contained" color="success">Ứng tuyển ngay</Button>
                        </Box>
                    </Stack>
                    <Grid
                        container
                        sx={{
                            background: 'white',
                            my: 2,
                            mx: 'auto',
                            width: '70%'
                        }}
                    >
                        <Grid
                            xs={12}
                            sx={{ my: 2 }}
                        >
                            <Typography sx={{ px: 2, ml: 3, borderLeft: `7px solid ${theme.palette.success.light}` }} variant="h5" fontWeight={600} >Chi tiết tuyển dụng</Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            item
                            sx={{
                                mx: 3,
                                py: 2,
                                background: alpha(theme.palette.success.main, 0.08)
                            }}
                        >
                            <Grid item sx={12}>
                                <Typography variant="p"
                                    sx={{
                                        fontWeight: "bold",
                                        textDecoration: 'underline',
                                        ml: 3
                                    }}>
                                    Thông tin chung
                                </Typography>
                            </Grid>
                            <Grid xs={12}
                                container
                                sx={{
                                    mt: 3,
                                    ml: 3,
                                    rowGap: 3,
                                    columnGap: 2
                                }}
                                item
                            >
                                <Grid
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    item
                                >
                                    <PaidIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Box>
                                        <Typography variant="p" fontWeight={600}>
                                            Mức lương
                                        </Typography><br></br>
                                        <Typography variant="p" >
                                            {data.gross}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    item
                                >
                                    <PeopleIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Box>
                                        <Typography variant="p" fontWeight={600}>
                                            Số lượng tuyển
                                        </Typography><br></br>
                                        <Typography variant="p" >
                                            {data.amount}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    item
                                >
                                    <MilitaryTechIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Box>
                                        <Typography variant="p" fontWeight={600}>
                                            Cấp bậc
                                        </Typography><br></br>
                                        <Typography variant="p" >
                                            {data.level}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    item
                                >
                                    <WorkIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Box>
                                        <Typography variant="p" fontWeight={600}>
                                            Hình thức làm việc
                                        </Typography><br></br>
                                        <Typography variant="p" >
                                            {data.workingType}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    item
                                >
                                    <WcIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Box>
                                        <Typography variant="p" fontWeight={600}>
                                            Giới tính
                                        </Typography><br></br>
                                        <Typography variant="p" >
                                            {data.sex}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    item
                                >
                                    <StarIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Box>
                                        <Typography variant="p" fontWeight={600}>
                                            Kinh nghiệm
                                        </Typography><br></br>
                                        <Typography variant="p" >
                                            {data.experience}
                                        </Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            item
                            sx={{
                                mx: 3,
                                mt: 2,
                                py: 2,
                                background: alpha(theme.palette.success.main, 0.08),
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography variant="p"
                                sx={{
                                    fontWeight: "bold",
                                    textDecoration: 'underline',
                                    ml: 3
                                }}>
                                Địa điểm làm việc
                            </Typography>
                            <Typography variant="p"
                                sx={{
                                    ml: 3,
                                    mt:2
                                }}>
                                {data.location}
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            item
                            sx={{
                                mx: 3,
                                mt: 2,
                                py: 2,
                                background: alpha(theme.palette.success.main, 0.08),
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    textDecoration: 'underline',
                                    ml: 3
                                }}>
                                Mô tả công việc
                            </Typography>
                            <Box
                                sx={{
                                    ml:3,
                                    py:1
                                }}
                            >
                                <RichTextDisplay data={jsontest} />
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
            </Container>
        </>
    )
}