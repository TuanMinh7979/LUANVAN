import { Box, Button, Chip, createTheme, Dialog, DialogContent, DialogTitle, Divider, Grid, styled, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import background from '../../assets/background_blue.webp'
import RichText, { RichTextDisplay } from "../RichText";
import SchoolIcon from '@mui/icons-material/School';
import FlagIcon from '@mui/icons-material/Flag';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Image from "mui-image";
import camera from '../../assets/camera_icon.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { convertToRaw, EditorState } from "draft-js";
import ContactEditPopUp from "../ContactEditPopUp";


export default function CV3({ editable, data, setPrint, print, setCVDATA }) {

    const cvTemplate = "CV3"

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
                        onClick={editable && handleClose}
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
                        onClick={editable && updateData}
                    >
                        Cập nhật
                    </Button>
                </Box>
            </>
        )
    }
    const CustomChip = styled(Chip)(({ theme }) => ({
        "&": {
            background: "rgba(0,0,0,0)",
            color: '#0a84ff',
            fontSize: '20px',
            fontWeight: '600',
            padding: '12px',
            '& .MuiChip-icon': {
                color: '#0a84ff'
            },

        },
    }));
    const RichContent = function ({ show, toggle, item, data, config }) {

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
    const [showEduEdit, setShowEduEdit] = useState()
    const [showSkillsEdit, setShowSkillsEdit] = useState()
    const [showCertificationsEdit, setShowCertificationsEdit] = useState()
    const [showExperienceEdit, setShowExperienceEdit] = useState()
    const [showObjectiveEdit, setShowObjectiveEdit] = useState()
    // state quan ly popup
    const [showPopup, setShowPopup] = useState(false)


    const handlePrint = useReactToPrint({
        content: () => ref.current,
        documentTitle: 'test',
        onAfterPrint: () => console.log("QA print")
    })
    useEffect(() => {
        if (print) {
            handlePrint()
            setPrint(false)
        }

    }, [print])
    useEffect(() => {
        console.log(data)

    }, [data])
    useEffect(() => {

        if (editable) setCVDATA({ ...data, cvTemplate })

    }, [])
    return (<>
        <Box
            ref={ref}
            sx={{
                width: '100%',
                backgroundImage: `url(${background})`,
                minHeight: '1510px',
                p: 4,
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
            }}
        >
            <Grid
                container
                sx={{
                    height: "100%"
                }}
            >
                <Grid
                    item
                    container
                    xs={11}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        background: "#fff",
                        p: 2,
                        borderRadius: "25px",
                        mb: 4,
                        boxShadow: "1px 1px 5px 1px #00000014",
                    }}

                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: "wrap",
                            alignItems: "center",
                            '&:hover': {
                                border: '1px dashed red'
                            },
                            ' p': {
                                color: 'rgba(0,0,0,0.7)'
                            },
                            mt: 3,
                            ml: 2,
                            ' h4, h6': {
                                color: '#0a84ff'
                            },
                        }}
                        onClick={() => {
                            editable && setShowPopup(true)
                        }}
                    >
                        <Image
                            src={data.avatar || camera}
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
                        <Box
                            sx={{
                                ml: 7,
                                width: "60%"
                            }}
                        >
                            <Typography variant="h4" fontWeight={550}>
                                {data.name}
                            </Typography>
                            <Typography sx={{ mb: 1 }} variant="h6" fontWeight={300} color="initial">
                                {data.title}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    flexWrap: "wrap"
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 1,
                                        width: "100%",
                                        flexWrap: "wrap"
                                        
                                    }}
                                >
                                    <CalendarMonthIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Typography variant="body1" color="initial">{data.dob}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 1,
                                        width: "100%",
                                        overflow: "hidden"
                                    }}
                                >
                                    <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Typography variant="body1" color="initial">{data.phone}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 1,
                                        width: "100%",
                                        overflow: "hidden"
                                    }}
                                >
                                    <MailIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Typography variant="body1" color="initial">{data.email}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 1,
                                        width: "100%",
                                        overflow: "hidden"
                                    }}
                                >
                                    <FacebookIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Typography variant="body1" color="initial">facebook.com/ungvien</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 1,
                                        width: "100%"
                                    }}
                                >
                                    <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Typography variant="body1" color="initial">{data.address}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <CustomChip alignSelf="flex-end" icon={<MoreHorizIcon color="success" />} label="Kinh nghiệm" />
                        <Box
                            sx={{
                                mb: 2,
                                px: 2,
                                mt: 1,
                                minHeight: "20%",
                                '&:hover': {
                                    border: '1px dashed red'
                                }
                            }}
                            onClick={() => {
                                editable && setShowExperienceEdit(true)
                            }}
                        >
                            <RichContent show={showExperienceEdit} toggle={setShowExperienceEdit} data={data} config={setCVDATA} item="experienceCv" />
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sx={{
                        display: 'flex',
                        width: "100%",
                        gap: 4
                    }}

                >
                    <Grid
                        item
                        xs={6}
                        sx={{
                            borderRadius: "25px",
                            background: "#fff",
                            p: 2,
                            boxShadow: "1px 1px 5px 1px #00000014"
                        }}
                    >
                        <CustomChip icon={<SchoolIcon />} label="Học vấn" />
                        <Box
                            alignSelf="flex-start"
                            sx={{
                                mb: 2,
                                px: 2,
                                mt: 1,
                                width: '90%',
                                minHeight: "250px",
                                '&:hover': {
                                    border: '1px dashed red'
                                },
                            }}
                            onClick={() => {
                                // OpenEditDialog('Học vấn', 'Học vấn',true)
                                editable && setShowEduEdit(true)
                            }}
                        >
                            <RichContent show={showEduEdit} toggle={setShowEduEdit} data={data} config={setCVDATA} item="educationCv" />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sx={{
                            borderRadius: "25px",
                            background: "#fff",
                            p: 2,
                            boxShadow: "1px 1px 5px 1px #00000014"
                        }}
                    >
                        <CustomChip icon={<CrisisAlertIcon color="success" />} label="Mục tiêu nghề nghiệp" />
                        <Box
                            alignSelf="flex-start"
                            sx={{
                                mb: 2,
                                px: 2,
                                mt: 1,
                                width: '90%',
                                minHeight: "250px",
                                '&:hover': {
                                    border: '1px dashed red'
                                }
                            }}
                            onClick={() => {
                                editable && setShowObjectiveEdit(true)
                            }}
                        >
                            <RichContent show={showObjectiveEdit} toggle={setShowObjectiveEdit} data={data} config={setCVDATA} item="objectiveCv" />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            borderRadius: "25px",
                            background: "#fff",
                            p: 2,
                            boxShadow: "1px 1px 5px 1px #00000014"
                        }}
                    >
                        <CustomChip icon={<FlagIcon />} label="Kỹ năng" />
                        <Box
                            alignSelf="flex-start"
                            sx={{
                                mb: 2,
                                px: 2,
                                mt: 1,
                                width: "90%",
                                minHeight: "250px",
                                '&:hover': {
                                    border: '1px dashed red'
                                }
                            }}
                            onClick={() => {
                                editable && setShowSkillsEdit(true)
                            }}
                        >
                            <RichContent show={showSkillsEdit} toggle={setShowSkillsEdit} data={data} config={setCVDATA} item="skillsCv" />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sx={{
                            borderRadius: "25px",
                            background: "#fff",
                            p: 2,
                            boxShadow: "1px 1px 5px 1px #00000014"
                        }}
                    >
                        <CustomChip icon={<WorkspacePremiumIcon color="success" />} label="Chứng chỉ" />
                        <Box
                            alignSelf="flex-start"
                            sx={{
                                mb: 2,
                                px: 2,
                                mt: 1,
                                width: "90%",
                                minHeight: "250px",
                                '&:hover': {
                                    border: '1px dashed red'
                                }
                            }} onClick={() => {
                                editable && setShowCertificationsEdit(true)
                            }}
                        >
                            <RichContent show={showCertificationsEdit} toggle={setShowCertificationsEdit} data={data} config={setCVDATA} item="certificationsCv" />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Typography
                variant="body1"
                color="initial"
                sx={{
                    position: 'relative',
                    top: "100%",
                    left: "70%",
                    mt: "30px"
                }}>©2022 ViecLamNhanh</Typography>
        </Box>
        <ContactEditPopUp data={data} setData={setCVDATA} show={showPopup} setShow={setShowPopup} />
        {/* <EditDialog open={open} title={title} item={item} setOpen={setOpen} isRich={isRich} /> */}
    </>)
}