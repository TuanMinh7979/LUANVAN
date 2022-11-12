
import { Autocomplete, Box, Button, Grid, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EditIcon from '@mui/icons-material/Edit';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArticleIcon from '@mui/icons-material/Article';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import env from 'react-dotenv'
import { useState } from "react";
import Test from "./Test";
function HrSideBar({ name, companyName, avatar }) {
    return (
        <Box
            sx={{
                minHeight: '100%',
                background: "#fff"
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    py: 2,
                    borderBottom: '1px solid rgba(0,0,0,0.1)'
                }}
            >
                <IconButton aria-label="user">
                    <AccountCircleRoundedIcon fontSize="large" />
                </IconButton>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography
                        variant="p"
                        sx={{
                            fontSize: '16px',
                            fontWeight: 550
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant=""
                        sx={{
                            fontSize: '12px'
                        }}
                    >
                        Nhà tuyển dụng
                    </Typography>
                    <Typography
                        variant=""
                        sx={{
                            fontSize: '12px',
                            color: 'rgba(0,0,0,0.6)'
                        }}
                    >
                        {companyName}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ mt: 2, p: 1 }}>
                <Button startIcon={<EditIcon />} sx={{ fontWeight: 400, fontSize: 12 }} color="inherit">Đăng tin tuyển dụng mới</Button>
            </Box>
            <Box sx={{ p: 1 }}>
                <Button startIcon={<ApartmentIcon />} sx={{ fontWeight: 400, fontSize: 12 }} color="inherit">Cập nhật thông tin công ty</Button>
            </Box>
            <Box sx={{ p: 1 }}>
                <Button startIcon={<ApartmentIcon />} sx={{ fontWeight: 400, fontSize: 12 }} color="inherit">Báo cáo tuyển dụng</Button>
            </Box>
            <Box sx={{ p: 1 }}>
                <Button startIcon={<ArticleIcon />} sx={{ fontWeight: 400, fontSize: 12 }} color="inherit">tin tuyển dụng</Button>
            </Box>
        </Box>
    )
}
export default function HrHub() {
    const [grossType, setGrossType] = useState(false)
    const [currency, setCurrency] = useState()
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    return (
        <>
            <Grid container sx={{ background: '#f1f2f6' }}>
                <Grid item xs={2}>
                    <HrSideBar name="Nguyen Anh" companyName="Chưa cập nhật công ty" />
                </Grid>
                <Grid item xs={10}

                >
                    <Box
                        sx={{
                            m: 3
                        }}
                    >
                        {/* Header */}
                        <Box
                            sx={{
                                p: 2,
                                borderBottom: '1px solid rgba(0,0,0,0.1)',
                                display: 'flex',
                                alignItems: "center",
                                background: "#fff"
                            }}
                        >
                            <EditIcon />
                            <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
                                Đăng tin tuyển dụng mới
                            </Typography>
                        </Box>
                        {/* head info */}
                        <Grid
                            container
                            sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
                        >
                            <Grid item
                                xs={5}
                            >
                                <Typography variant="p" fontWeight={500}>
                                    Tên tin tuyển dụng
                                </Typography>
                                <OutlinedInput
                                    fullWidth
                                    size="small"
                                    sx={{ mt: 1 }}
                                    placeholder="Thiết kế đồ họa bán thời gian"
                                />
                            </Grid>
                            <Grid item
                                xs={6}
                            >
                                <Typography variant="p" fontWeight={500}>
                                    Vị trí tuyển dụng
                                </Typography>
                                <Autocomplete
                                    freeSolo
                                    size="small"
                                    sx={{ mt: 1 }}
                                    options={env.JOBS.split(", ")}
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn vị trí công việc cần tuyển" />}
                                />
                            </Grid>
                            <Grid item
                                xs={12}
                            >
                                <Typography variant="p" fontWeight={500}>
                                    Địa điểm làm việc
                                </Typography>
                                <Autocomplete
                                    size="small"
                                    sx={{ mt: 1 }}
                                    options={env.LOCATION.split(", ")}
                                    renderInput={(params) => <TextField {...params} placeholder="-- Chọn địa điểm làm việc --" />}
                                />
                            </Grid>
                        </Grid>
                        {/* body info */}
                        <Box
                            sx={{
                                p: 2,
                                borderBottom: '1px solid rgba(0,0,0,0.1)',
                                display: 'flex',
                                alignItems: "center",
                                background: "#fff"
                            }}
                        >
                            <InfoOutlinedIcon fontSize="small" />
                            <Typography variant="p" fontWeight={500} sx={{ ml: 1 }}>
                                Thông tin chung
                            </Typography>
                        </Box>
                        <Grid
                            container
                            sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
                        >
                            <Grid container item xs={12} sx={{ columnGap: 2 }}>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p" >
                                        Số lượng tuyển
                                    </Typography>
                                    <OutlinedInput
                                        fullWidth
                                        size="small"
                                        sx={{ mt: 1 }}
                                        type="number"
                                        placeholder="Số lượng cần tuyển"
                                    />
                                </Grid>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Loại công việc
                                    </Typography>
                                    <Autocomplete
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.JOBTYPES.split(", ")}
                                        renderInput={(params) => <TextField {...params} placeholder="-- Chọn loại công việc --" />}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sx={{ columnGap: 2 }}>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Giới tính
                                    </Typography>
                                    <Autocomplete
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.SEXS.split(", ")}
                                        renderInput={(params) => <TextField {...params} placeholder="-- Chọn giới tính --" />}
                                    />
                                </Grid>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Cấp bậc
                                    </Typography>
                                    <Autocomplete
                                        freeSolo
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.LEVEL.split(", ")}
                                        renderInput={(params) => <TextField {...params} placeholder="Giám đốc kinh doanh" />}
                                    />
                                </Grid>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Kinh nghiệm làm việc
                                    </Typography>
                                    <Autocomplete
                                        freeSolo
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.EXP.split(", ")}
                                        renderInput={(params) => <TextField {...params} placeholder="Chưa có kinh nghiệm" />}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sx={{ columnGap: 2 }}>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Loại tiền lương
                                    </Typography>
                                    <Autocomplete
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.CURRENCY.split(", ")}
                                        onInputChange={(e, value) => {
                                            setCurrency(value)
                                        }}
                                        renderInput={(params) => <TextField {...params} placeholder="-- Chọn loại tiền lương --" />}
                                    />
                                </Grid>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Kiểu lương
                                    </Typography>
                                    <Autocomplete
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.GROSSTYPES.split(", ")}
                                        onInputChange={(e, value) => {
                                            setGrossType(value)
                                        }}
                                        renderInput={(params) => <TextField {...params} placeholder="-- Chọn kiểu lương"
                                        />}
                                    />
                                </Grid>
                                {/* Lương theo khoảng */}
                                {grossType == "Trong khoảng" && <>
                                    <Grid item
                                        xs={2}
                                    >
                                        <Typography variant="p">
                                            Từ
                                        </Typography>
                                        <OutlinedInput
                                            fullWidth
                                            size="small"
                                            sx={{ mt: 1 }}
                                            type="number"
                                            endAdornment={<InputAdornment position="end">{currency}</InputAdornment>}
                                        />
                                    </Grid>
                                    <Grid item
                                        xs={2}
                                    >
                                        <Typography variant="p">
                                            Đến
                                        </Typography>
                                        <OutlinedInput
                                            fullWidth
                                            size="small"
                                            sx={{ mt: 1 }}
                                            type="number"
                                            endAdornment={<InputAdornment position="end">{currency}</InputAdornment>}
                                        />
                                    </Grid>
                                </>}
                                {/* Lương cố định */}
                                {grossType == "Cố định" && <>
                                    <Grid item
                                        xs={3}
                                    >
                                        <Typography variant="p">
                                            Lương
                                        </Typography>
                                        <OutlinedInput
                                            fullWidth
                                            size="small"
                                            sx={{ mt: 1 }}
                                            type="number"
                                            endAdornment={<InputAdornment position="end">{currency}</InputAdornment>}
                                        />
                                    </Grid>
                                </>}
                            </Grid>
                            <Grid item
                                xs={12}
                            >
                                <Typography variant="p" >
                                    Khu vực làm việc <Typography variant="span" sx={{ color: "rgba(0,0,0,0.6)" }}>(Địa chỉ cụ thể)</Typography>
                                </Typography>
                                <OutlinedInput
                                    fullWidth
                                    size="small"
                                    sx={{ mt: 1 }}
                                    placeholder="Số 7, Ngô Tất Tố, KDC 91B, Phường An khánh, Ninh Kiều, Cần Thơ"
                                />
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                p: 2,
                                borderBottom: '1px solid rgba(0,0,0,0.1)',
                                display: 'flex',
                                alignItems: "center",
                                background: "#fff"
                            }}
                        >
                            <InfoOutlinedIcon fontSize="small" />
                            <Typography variant="p" fontWeight={500} sx={{ ml: 1 }}>
                                Thông tin chi tiết
                            </Typography>
                        </Box>
                        <Grid
                            container
                            sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
                        >
                            <Grid item xs={12}>
                                <Typography variant="p">
                                    Mô tả công việc
                                </Typography>
                                <Test />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="p">
                                    Yêu cầu ứng viên
                                </Typography>
                                <Test />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="p">
                                    Kỹ năng cần có
                                </Typography>
                                <OutlinedInput size="small" fullWidth  sx={{ mt:1 }} placeholder="VD: Kỹ năng photoshop, Word, Excel, ..."/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}