import { Box, Button, Chip, createTheme, Grid, styled, Typography } from "@mui/material";
import { minHeight, width } from "@mui/system";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import background from '../../assets/FFF8F5.webp'
import fakedata from '../../assets/test.json'
import { RichTextDisplay } from "../RichText";
import SchoolIcon from '@mui/icons-material/School';
import FlagIcon from '@mui/icons-material/Flag';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Image from "mui-image";
import camera from '../../assets/companylogo_sample.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function CV1({ data, print }) {
    const ref = useRef()
    useEffect(() => {

    })
    const handlePrint = useReactToPrint({
        content: () => ref.current,
        documentTitle: 'test',
        onAfterPrint: () => console.log("QA print")
    })

    const CustomChip = styled(Chip)(({ theme }) => ({
        "&": {
            background: theme.palette.warning.light,
            color: 'white',
            fontSize: '20px',
            fontWeight: '600',
            maxWidth: '50%',
            padding: '12px',
            '& .MuiChip-icon': {
                color: 'white'
            },
           
        },
    }));
    return (<>
        <Box
            ref={ref}
            sx={{
                width: '100%',
                backgroundImage: `url(${background})`,
                minHeight: '1069px',
                p: 4,
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
            }}
        >
            <Grid
                container
            >
                {/* right path */}
                <Grid
                    item
                    container
                    xs={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end'
                    }}

                >
                    <CustomChip icon={<SchoolIcon color="success" />} label="Học vấn" />
                    <Box
                        alignSelf="flex-start"
                        sx={{
                            mb: 2,
                            px: 2,
                            mt: 1,
                            '&:hover': {
                                border: '1px dashed red'
                            }
                        }}
                    >
                        <RichTextDisplay data={fakedata} />
                    </Box>

                    <CustomChip icon={<CrisisAlertIcon color="success" />} label="Mục tiêu nghề nghiệp" />
                    <Box
                        alignSelf="flex-start"
                        sx={{
                            mb: 2,
                            px: 2,
                            mt: 1,
                            '&:hover': {
                                border: '1px dashed red'
                            }
                        }}
                    >
                        <RichTextDisplay data={fakedata} />
                    </Box>

                    <CustomChip icon={<FlagIcon />} label="Hoạt động" />
                    <Box
                        alignSelf="flex-start"
                        sx={{
                            mb: 2,
                            px: 2,
                            mt: 1,
                            '&:hover': {
                                border: '1px dashed red'
                            }
                        }}
                    >
                        <RichTextDisplay data={fakedata} />
                    </Box>
                    <CustomChip icon={<WorkspacePremiumIcon color="success" />} label="Chứng chỉ" />
                    <Box
                        alignSelf="flex-start"
                        sx={{
                            mb: 2,
                            px: 2,
                            mt: 1,
                            '&:hover': {
                                border: '1px dashed red'
                            }
                        }}
                    >
                        <RichTextDisplay data={fakedata} />
                    </Box>
                </Grid>
                {/* left */}
                <Grid
                    item

                    xs={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}

                >
                    <Box
                        sx={{
                            width: '80%',
                            display: 'flex',
                            flexDirection: 'column',
                            '& > h4:hover,h6:hover, p:hover': {
                                border: '1px dashed red'
                            },
                            ' p':{
                                color: 'rgba(0,0,0,0.7)'
                            }
                            ,
                            ml: '30px',
                            mt:3
                        }}
                    >
                        <Image
                            src={camera}
                            width="160px"
                            height="160px"
                            fit="scale-down"
                            duration={0}
                            sx={{
                                borderRadius: '50%',
                                border: '1px dashed blue',
                                background: '#f1f2f7',
                                mb: 4
                            }}
                        />
                        <Typography variant="h4" fontWeight={550}>
                            Nguyễn Quốc Anh
                        </Typography>
                        <Typography sx={{ mb: 4 }} variant="h6" fontWeight={300} color="initial">
                            Nhân viên tài chính
                        </Typography>
                        <Typography variant="h5" fontSize={20} fontWeight={500} color="initial">
                            THÔNG TIN
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: 3,
                                mb: 1
                            }}
                        >
                            <CalendarMonthIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body1" color="initial">2/11/2000</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1
                            }}
                        >
                            <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body1" color="initial">0834617610</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1
                            }}
                        >
                            <MailIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body1" color="initial">anhcmcm@gmail.com</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1
                            }}
                        >
                            <FacebookIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body1" color="initial">facebook.com/quocanhnecon</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1
                            }}
                        >
                            <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body1" color="initial">Số 7 đường Ngô Tất Tố, Khu Dân Cư 91B, Phường An Khánh, Quận Ninh Kiều, Thành Phố Cần THơ</Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '80%',
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            ml: '30px'
                        }}
                    >
                        <CustomChip alignSelf="flex-end" icon={<MoreHorizIcon color="success" />} label="Kỹ năng" />
                        <Box
                            sx={{
                                mb: 2,
                                px: 2,
                                mt: 1,
                                '&:hover': {
                                    border: '1px dashed red'
                                }
                            }}
                        >
                            <RichTextDisplay data={fakedata} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Typography
                variant="body1"
                color="initial"
                sx={{
                    position: 'relative',
                    top: "100%",
                    left: "70%"
                }}
            >©2022 ViecLamNhanh</Typography>
        </Box>
        <Button onClick={() => {
            if (print) {
                handlePrint()
            }
        }} >IN</Button>
    </>)
}