import { Box, Button, Chip, createTheme, Dialog, DialogContent, DialogTitle, Grid, styled, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import background from '../../assets/FFF8F5.webp'
import RichText, { RichTextDisplay } from "../RichText";
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
import { convertToRaw, EditorState } from "draft-js";
import ContactEditPopUp from "../ContactEditPopUp";

export default function CV1({ data, print }) {

    function RichEditor({ item, data, setData, setOpen }) {
        const [editorState, setEditorState] = useState(() =>
            EditorState.createEmpty()
        )
        const [close, setClose] = useState()
        const getTextArrayFromRich = function (rawdata) {
            if (rawdata.blocks.length > 0) {
                return (
                    rawdata.blocks.map((item) => item.text).join(' ')
                )
            }
        }
        const text = item.slice(0, item.length - 2)
        console.log(text)
        useEffect(() => {
            if (close) {
                setOpen(false)
            }
        })
        function handleClose() {
            setClose(true)
        }
        function updateData() {
            setClose(true)
            setTimeout(() => {
                setData({
                    ...data,
                    [item]: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
                    [text]: getTextArrayFromRich(convertToRaw(editorState.getCurrentContent()))
                })
            })

        }
        return (
            <>
                <RichText editorState={editorState} setEditorState={setEditorState} />
                <Box sx={{ m: 1 }}>
                    <Button
                        onClick={handleClose}
                        color="warning"
                        variant="outlined"
                        sx={{
                            mr: 1
                        }}
                    >
                        Đóng
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={updateData}
                    >
                        Cập nhật
                    </Button>
                </Box>
            </>
        )
    }
    const CustomChip = styled(Chip)(({ theme }) => ({
        "&": {
            background: theme.palette.warning.light,
            color: 'white',
            fontSize: '20px',
            fontWeight: '600',
            padding: '12px',
            '& .MuiChip-icon': {
                color: 'white'
            },

        },
    }));
    const RichContent = function ({ show, toggle, item, data, config }) {
        console.log("_____________>>>")
        console.log(show, toggle, item, data, config)
        return (
            <>
                {show ?
                    <RichEditor
                        item={item}
                        setOpen={toggle}
                        setData={config}
                        data={data}
                    /> :
                    <RichTextDisplay data={JSON.parse(data[item])} />}
            </>
        )
    }

    const ref = useRef()
    // state data de post
    const [cvData, setCVDATA] = useState(data)
    // state quan ly show rich edit
    const [showEduEdit, setShowEduEdit] = useState()
    const [showSkillsEdit, setShowSkillsEdit] = useState()
    const [showCertificationsEdit, setShowCertificationsEdit] = useState()
    const [showExperienceEdit, setShowExperienceEdit] = useState()
    const [showObjectiveEdit, setShowObjectiveEdit] = useState()
    // state quan ly popup
    const [showPopup, setShowPopup] = useState(false)
    console.log(cvData)

    const handlePrint = useReactToPrint({
        content: () => ref.current,
        documentTitle: 'test',
        onAfterPrint: () => console.log("QA print")
    })
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
                            width: '90%',
                            '&:hover': {
                                border: '1px dashed red'
                            }
                        }}
                        onClick={() => {
                            // OpenEditDialog('Học vấn', 'Học vấn',true)
                            setShowEduEdit(true)
                        }}
                    >
                        <RichContent show={showEduEdit} toggle={setShowEduEdit} data={cvData} config={setCVDATA} item="educationCv" />
                    </Box>

                    <CustomChip icon={<CrisisAlertIcon color="success" />} label="Mục tiêu nghề nghiệp" />
                    <Box
                        alignSelf="flex-start"
                        sx={{
                            mb: 2,
                            px: 2,
                            mt: 1,
                            width: '90%',
                            '&:hover': {
                                border: '1px dashed red'
                            }
                        }}
                        onClick={() => {
                            setShowObjectiveEdit(true)
                        }}
                    >
                        <RichContent show={showObjectiveEdit} toggle={setShowObjectiveEdit} data={cvData} config={setCVDATA} item="objectiveCv" />
                    </Box>

                    <CustomChip icon={<FlagIcon />} label="Kỹ năng" />
                    <Box
                        alignSelf="flex-start"
                        sx={{
                            mb: 2,
                            px: 2,
                            mt: 1,
                            width: "90%",
                            '&:hover': {
                                border: '1px dashed red'
                            }
                        }}
                        onClick={() => {
                            setShowSkillsEdit(true)
                        }}
                    >
                        <RichContent show={showSkillsEdit} toggle={setShowSkillsEdit} data={cvData} config={setCVDATA} item="skillsCv" />
                    </Box>
                    <CustomChip icon={<WorkspacePremiumIcon color="success" />} label="Chứng chỉ" />
                    <Box
                        alignSelf="flex-start"
                        sx={{
                            mb: 2,
                            px: 2,
                            mt: 1,
                            width: "90%",
                            '&:hover': {
                                border: '1px dashed red'
                            }
                        }} onClick={() => {
                            setShowCertificationsEdit(true)
                        }}
                    >
                        <RichContent show={showCertificationsEdit} toggle={setShowCertificationsEdit} data={cvData} config={setCVDATA} item="certificationsCv" />
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
                            '&:hover': {
                                border: '1px dashed red'
                            },
                            ' p': {
                                color: 'rgba(0,0,0,0.7)'
                            }
                            ,
                            ml: '30px',
                            mt: 3
                        }}
                        onClick={() => {
                            setShowPopup(true)
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
                            {cvData.name}
                        </Typography>
                        <Typography sx={{ mb: 4 }} variant="h6" fontWeight={300} color="initial">
                            {cvData.title}
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
                            <Typography variant="body1" color="initial">{cvData.dob}</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1
                            }}
                        >
                            <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body1" color="initial">{cvData.phone}</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1
                            }}
                        >
                            <MailIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body1" color="initial">{cvData.email}</Typography>
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
                            <Typography variant="body1" color="initial">{cvData.fulladdress}</Typography>
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
                        <CustomChip alignSelf="flex-end" icon={<MoreHorizIcon color="success" />} label="Kinh nghiệm" />
                        <Box
                            sx={{
                                mb: 2,
                                px: 2,
                                mt: 1,
                                '&:hover': {
                                    border: '1px dashed red'
                                }
                            }}
                            onClick={() => {
                                setShowExperienceEdit(true)
                            }}
                        >
                            <RichContent show={showExperienceEdit} toggle={setShowExperienceEdit} data={cvData} config={setCVDATA} item="experienceCv" />
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
                }}>©2022 ViecLamNhanh</Typography>
        </Box>
        <ContactEditPopUp data={cvData} setData={setCVDATA} show={showPopup} setShow={setShowPopup} />
        <Button onClick={() => {
            if (print) {
                handlePrint()
            }
        }} >IN</Button>
        <Button sx={{marginLeft: "300px"}} onClick={() => {
            console.log(cvData)
        }} >SAVE</Button>
        {/* <EditDialog open={open} title={title} item={item} setOpen={setOpen} isRich={isRich} /> */}
    </>)
}