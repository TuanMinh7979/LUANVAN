import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import {
  useNavigate,
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Editor, EditorState, convertToRaw } from "draft-js";
import { useSelector } from "react-redux";
import { styled, alpha, createTheme } from "@mui/material/styles";
import "draft-js/dist/Draft.css";
import env from "react-dotenv";
import { useEffect, useState } from "react";
import RichText from "./RichText";
import axios from "axios";
import Company from "./Company";
import Charts from "./Chart";
import { jobCats } from "../store/selectData.js";

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    background: `#2B332C`,
    color: "white",
    "& .MuiListItemIcon-root": {
      color: "white",
    },
  },
}));

export function HrSideBar({ uploadJob, editCompany, viewChart, news }) {
  const theme = createTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(0);
  function navigateTo(location) {
    navigate(location);
  }
  useEffect(() => {
    switch (location.pathname) {
      case "/hrhub/":
        setActiveItem(0);
        break;
      case "/hrhub/editcompany":
        setActiveItem(1);
        break;
      case "/hrhub/charts":
        setActiveItem(2);
        break;
      default:
        break;
    }
  });
  return (
    <Box
      sx={{
        minHeight: "100%",
        background: "#fff",
      }}
    >
      <MenuList>
        <CustomMenuItem
          sx={{
            color: activeItem == 0 ? theme.palette.success.main : "",
          }}
          onClick={() => {
            navigateTo("./");
          }}
        >
          <ListItemIcon sx={{ py: 2 }}>
            <EditIcon
              fontSize="small"
              sx={{
                color: activeItem == 0 ? theme.palette.success.main : "",
              }}
            />
          </ListItemIcon>
          <ListItemText>Đăng tin tuyển dụng mới</ListItemText>
        </CustomMenuItem>
        <CustomMenuItem
          sx={{
            color: activeItem == 1 ? theme.palette.success.main : "",
          }}
          onClick={() => {
            navigateTo("./editcompany");
          }}
        >
          <ListItemIcon sx={{ py: 2 }}>
            <ApartmentIcon
              fontSize="small"
              sx={{
                color: activeItem == 1 ? theme.palette.success.main : "",
              }}
            />
          </ListItemIcon>
          <ListItemText>Cập nhật thông tin công ty</ListItemText>
        </CustomMenuItem>
        <CustomMenuItem
          sx={{
            color: activeItem == 2 ? theme.palette.success.main : "",
          }}
          onClick={() => {
            navigateTo("./charts");
          }}
        >
          <ListItemIcon sx={{ py: 2 }}>
            <BarChartIcon
              fontSize="small"
              sx={{
                color: activeItem == 2 ? theme.palette.success.main : "",
              }}
            />
          </ListItemIcon>
          <ListItemText>Báo cáo tuyển dụng</ListItemText>
        </CustomMenuItem>
        <CustomMenuItem
          sx={{
            color: activeItem == 3 ? theme.palette.success.main : "",
          }}
        >
          <ListItemIcon sx={{ py: 2 }}>
            <ArticleIcon
              fontSize="small"
              sx={{
                color: activeItem == 3 ? theme.palette.success.main : "",
              }}
            />
          </ListItemIcon>
          <ListItemText>Tin tuyển dụng</ListItemText>
        </CustomMenuItem>
      </MenuList>
    </Box>
  );
}

///
function getCatNameList() {
  return jobCats.map((item) => item.name);
}
function getCatIdFromName(catName) {
  catName = catName.trim();
  let selectedCat = jobCats.filter((item) => item.name == catName)[0];

  return selectedCat._id;
}
///
function JobPost({ user }) {
  const navigate = useNavigate();
  const [jobDescription, setJobDescription] = useState(() =>
    EditorState.createEmpty()
  );
  const [jobRequired, setJobRequired] = useState(() =>
    EditorState.createEmpty()
  );
  const [benefit, setBenefit] = useState(() => EditorState.createEmpty());
  const [data, setData] = useState({
    jobTitle: "",
    categoryName: "",
    categoryId: "",
    location: "",
    amount: 0,
    jobType: "",
    deadline: "",
    gender: "",
    rank: "",
    exp: "",
    currency: "",
    grossType: "",
    gross: 0,
    grossTo: 0,
    grossFrom: 0,
    fullAddress: "",
    jobDescription: JSON.stringify(
      convertToRaw(jobDescription.getCurrentContent())
    ),
    jobRequired: JSON.stringify(convertToRaw(jobRequired.getCurrentContent())),
    jobBenefit: JSON.stringify(convertToRaw(benefit.getCurrentContent())),
    skillRequired: "",
  });
  const [grossType, setGrossType] = useState(false);
  const [currency, setCurrency] = useState();

  const sendPostData = function () {
    console.log({ ...data, categoryId: getCatIdFromName(data.categoryName) });

    axios
      .post("/jobpost", {
        ...data,
        categoryId: getCatIdFromName(data.categoryName),
      })
      .then((res) => {
        console.log(res);
      });
  };
  function navigateTo(location) {
    navigate(location);
  }
  useEffect(() => {
    if (!user.isLogin && user.user.role != "rec") {
      navigateTo("/hrlogin");
    }
  });
  return (
    <>
      <Grid
        sx={{
          m: 3,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            background: "#fff",
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
          <Grid item xs={5}>
            <Typography variant="p" fontWeight={500}>
              Vị trí tuyển dụng
            </Typography>
            <OutlinedInput
              fullWidth
              size="small"
              sx={{ mt: 1 }}
              placeholder="Thiết kế đồ họa bán thời gian"
              onBlur={(e) => {
                setData({
                  ...data,
                  jobTitle: e.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="p" fontWeight={500}>
              Loại công việc
            </Typography>
            <Autocomplete
              freeSolo
              size="small"
              sx={{ mt: 1 }}
              options={getCatNameList()}
              onInputChange={(e, value) => {
                setData({
                  ...data,
                  categoryName: value,
                });
              }}
              onBlur={(e) => {
                setData({
                  ...data,
                  categoryName: e.target.value,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Chọn vị trí công việc cần tuyển"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" fontWeight={500}>
              Địa điểm làm việc
            </Typography>
            <Autocomplete
              size="small"
              sx={{ mt: 1 }}
              options={env.LOCATION.split(", ")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="-- Chọn địa điểm làm việc --"
                />
              )}
              onInputChange={(e, value) => {
                setData({
                  ...data,
                  location: value,
                });
              }}
            />
          </Grid>
        </Grid>
        {/* body info */}
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            background: "#fff",
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
            <Grid item xs={3}>
              <Typography variant="p">Số lượng tuyển</Typography>
              <OutlinedInput
                fullWidth
                size="small"
                sx={{ mt: 1 }}
                type="number"
                placeholder="Số lượng cần tuyển"
                onChange={(e) => {
                  setData({
                    ...data,
                    amount: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="p">Loại công việc</Typography>
              <Autocomplete
                size="small"
                sx={{ mt: 1 }}
                options={env.JOBTYPES.split(", ")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="-- Chọn loại công việc --"
                  />
                )}
                onInputChange={(e, value) => {
                  setData({
                    ...data,
                    jobType: value,
                  });
                }}
                onBlur={(e) => {
                  setData({
                    ...data,
                    jobType: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="p">Thời hạn tuyển</Typography>
              <OutlinedInput
                fullWidth
                size="small"
                sx={{ mt: 1 }}
                type="date"
                placeholder="Số lượng cần tuyển"
                onChange={(e) => {
                  setData({
                    ...data,
                    deadline: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} sx={{ columnGap: 2 }}>
            <Grid item xs={3}>
              <Typography variant="p">Giới tính</Typography>
              <Autocomplete
                size="small"
                sx={{ mt: 1 }}
                options={env.SEXS.split(", ")}
                renderInput={(params) => (
                  <TextField {...params} placeholder="-- Chọn giới tính --" />
                )}
                onInputChange={(e, value) => {
                  setData({
                    ...data,
                    gender: value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="p">Cấp bậc</Typography>
              <Autocomplete
                freeSolo
                size="small"
                sx={{ mt: 1 }}
                options={env.LEVEL.split(", ")}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Giám đốc kinh doanh" />
                )}
                onInputChange={(e, value) => {
                  setData({
                    ...data,
                    rank: value,
                  });
                }}
                onBlur={(e) => {
                  setData({
                    ...data,
                    rank: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="p">Kinh nghiệm làm việc</Typography>
              <Autocomplete
                freeSolo
                size="small"
                sx={{ mt: 1 }}
                options={env.EXP.split(", ")}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Chưa có kinh nghiệm" />
                )}
                onInputChange={(e, value) => {
                  setData({
                    ...data,
                    exp: value,
                  });
                }}
                onBlur={(e) => {
                  setData({
                    ...data,
                    exp: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} sx={{ columnGap: 2 }}>
            <Grid item xs={3}>
              <Typography variant="p">Loại tiền lương</Typography>
              <Autocomplete
                size="small"
                sx={{ mt: 1 }}
                options={env.CURRENCY.split(", ")}
                onInputChange={(e, value) => {
                  setCurrency(value);
                  setData({
                    ...data,
                    currency: value,
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="-- Chọn loại tiền lương --"
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="p">Kiểu lương</Typography>
              <Autocomplete
                size="small"
                sx={{ mt: 1 }}
                options={env.GROSSTYPES.split(", ")}
                onInputChange={(e, value) => {
                  setGrossType(value);
                  setData({
                    ...data,
                    grossType: value,
                  });
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="-- Chọn kiểu lương" />
                )}
              />
            </Grid>
            {/* Lương theo khoảng */}
            {grossType == "Trong khoảng" && (
              <>
                <Grid item xs={2}>
                  <Typography variant="p">Từ</Typography>
                  <OutlinedInput
                    fullWidth
                    size="small"
                    sx={{ mt: 1 }}
                    type="number"
                    endAdornment={
                      <InputAdornment position="end">{currency}</InputAdornment>
                    }
                    onBlur={(e) => {
                      setData({
                        ...data,
                        grossFrom: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p">Đến</Typography>
                  <OutlinedInput
                    fullWidth
                    size="small"
                    sx={{ mt: 1 }}
                    type="number"
                    endAdornment={
                      <InputAdornment position="end">{currency}</InputAdornment>
                    }
                    onBlur={(e) => {
                      setData({
                        ...data,
                        grossTo: e.target.value,
                        gross: "",
                      });
                    }}
                  />
                </Grid>
              </>
            )}
            {/* Lương cố định */}
            {grossType == "Cố định" && (
              <>
                <Grid item xs={3}>
                  <Typography variant="p">Lương</Typography>
                  <OutlinedInput
                    fullWidth
                    size="small"
                    sx={{ mt: 1 }}
                    type="number"
                    endAdornment={
                      <InputAdornment position="end">{currency}</InputAdornment>
                    }
                    onBlur={(e) => {
                      setData({
                        ...data,
                        gross: e.target.value,
                        grossFrom: "",
                        grossTo: "",
                      });
                    }}
                  />
                </Grid>
              </>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">
              Khu vực làm việc{" "}
              <Typography variant="span" sx={{ color: "rgba(0,0,0,0.6)" }}>
                (Địa chỉ cụ thể)
              </Typography>
            </Typography>
            <OutlinedInput
              fullWidth
              size="small"
              sx={{ mt: 1 }}
              placeholder="Số 7, Ngô Tất Tố, KDC 91B, Phường An khánh, Ninh Kiều, Cần Thơ"
              onBlur={(e) => {
                setData({
                  ...data,
                  fullAddress: e.target.value,
                });
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            background: "#fff",
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
            <Typography variant="p">Mô tả công việc</Typography>
            <RichText
              editorState={jobDescription}
              setEditorState={setJobDescription}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">Yêu cầu ứng viên</Typography>
            <RichText
              editorState={jobRequired}
              setEditorState={setJobRequired}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">Quyền lợi</Typography>
            <RichText editorState={benefit} setEditorState={setBenefit} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">Kỹ năng cần có</Typography>
            <OutlinedInput
              size="small"
              fullWidth
              sx={{ mt: 1 }}
              placeholder="VD: Kỹ năng photoshop, Word, Excel, ..."
            />
          </Grid>
          <Button
            sx={{ mt: 1, minWidth: 200, mr: "auto" }}
            size="small"
            variant="contained"
            onClick={() => {
              console.log(data);
              sendPostData();
            }}
          >
            Đăng tin
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default function HrHub() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Grid container sx={{ background: "#f1f2f6" }}>
        <Grid item xs={2}>
          <HrSideBar
            name={user.user.username}
            companyName="Chưa cập nhật công ty"
          />
        </Grid>
        <Grid item xs={10}>
          <Routes>
            <Route path="/" element={<JobPost user={user} />}></Route>
            <Route path="/editcompany" element={<Company user={user} />} />
            <Route path="/charts" element={<Charts user={user} />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
}
