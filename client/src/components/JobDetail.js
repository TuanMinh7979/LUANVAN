import { Container, Box, TextField, FormControl, InputAdornment, InputLabel, Select, MenuItem, Button, Stack, Typography, createTheme, Grid } from "@mui/material";
import env from "react-dotenv";
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BadgeIcon from '@mui/icons-material/Badge';
import Image from 'mui-image'
import logo from '../assets/companylogo_sample.png'
import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import PaidIcon from '@mui/icons-material/Paid';
import { alpha } from '@mui/material/styles'
import PeopleIcon from '@mui/icons-material/People';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WcIcon from '@mui/icons-material/Wc';
import StarIcon from '@mui/icons-material/Star';
import { RichTextDisplay } from "./RichText";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function JobDetail() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const { data, loading, error } = useFetch(`/jobpost/${id}`);





    const theme = createTheme()
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 200
            }
        }
    };
    const [searchParams, setSearchParams] = useState({
        job: '',
        location: '',
        level: '',
        gross: ''
    })
    const navigate = useNavigate()
    return (

        <>{
            loading ?
                "Loading" :
                <Container
                    disableGutters
                    maxWidth
                    sx={{
                        background: '#f1f2f6'
                    }}
                >
                    {/*   <Container
                        maxWidth
                        sx={{
                            py: 4,
                            background: 'white'
                        }}
                    >
                       
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
                                    onChange={(e, item) => {
                                        setSearchParams({
                                            ...searchParams,
                                            job: item.props.value
                                        })
                                    }}
                                >
                                    {env.JOBS.split(", ").map((item, key) => (<MenuItem value={item} key={key}>{item}</MenuItem>))}
                                </Select>
                            </FormControl>
                         
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
                                    onChange={(e, item) => {
                                        setSearchParams({
                                            ...searchParams,
                                            location: item.props.value
                                        })
                                    }}
                                >
                                    {env.LOCATION.split(", ").map((item, key) => (<MenuItem value={item} key={key}>{item}</MenuItem>))}
                                </Select>
                            </FormControl>
                          
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
                                    onChange={(e, item) => {
                                        setSearchParams({
                                            ...searchParams,
                                            level: item.props.value
                                        })
                                    }}
                                >
                                    {env.LEVEL.split(", ").map((item, key) => (<MenuItem value={item} key={key}>{item}</MenuItem>))}
                                </Select>
                            </FormControl>
                          
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
                            onChange={(e, item) => {
                                setSearchParams({
                                    ...searchParams,
                                    gross: item.props.value
                                })
                            }}
                        >
                            {env.GROSS.split(", ").map((item, key) => (<MenuItem value={item} key={key}>{item}</MenuItem>))}
                        </Select>
                    </FormControl>
                   
                    <FormControl
                    >
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => {
                                navigate({
                                    pathname: '/jobs',
                                    search: `?${createSearchParams(searchParams)}`
                                })
                            }}
                        >
                            Tìm việc ngay
                        </Button>
                    </FormControl>
                </Box>
                    </Container> * /}
                    {/* Body */ }
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
                                    src={data.company.linkToLogo}
                                    sx={{
                                        borderRadius: '100%',
                                        border: '1px solid gray'
                                    }}
                                    width="100px"
                                    height="100px"
                                    duration={0}
                                    fit="scale-down"
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
                                    {data.jobTitle}
                                </Typography>
                                <Typography variant="h6" color="initial">
                                    {data.company.companyName}
                                </Typography>
                                <Stack direction='row' spacing={1} sx={{ color: 'rgba(0,0,0,0.7)' }}>
                                    <AccessTimeIcon fontSize="small" />
                                    <Typography variant="body1" >Hạn nộp hồ sơ: {data.deadline}</Typography>
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
                                width: '70%',
                                pb: 3
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
                                        mt: 2,
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
                                                {data.gross ? data.gross : <>{data.grossFrom}-{data.grossTo}</>}
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
                                                {data.rank}
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
                                                {data.jobType}
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
                                                {data.gender}
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
                                                {data.exp}
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
                                        mt: 2
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
                                        ml: 3,
                                        py: 1
                                    }}
                                >
                                    <RichTextDisplay data={JSON.parse(data.jobDescription)} />
                                </Box>
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
                                    Yêu cầu ứng viên
                                </Typography>
                                <Box
                                    sx={{
                                        ml: 3,
                                        py: 1
                                    }}
                                >
                                    <RichTextDisplay data={JSON.parse(data.jobRequired)} />
                                </Box>
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
                                    Quyền lợi
                                </Typography>
                                <Box
                                    sx={{
                                        ml: 3,
                                        py: 1
                                    }}
                                >
                                    <RichTextDisplay data={JSON.parse(data.jobBenefit)} />
                                </Box>
                            </Grid>

                        </Grid>

                    </Container>
                </Container >
        }

        </>
    )
}