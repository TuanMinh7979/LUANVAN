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
import env from "../assets/env.json";
import { useEffect, useState } from "react";
import RichText from "./RichText";
import axios from "axios";
import Company from "./Company";
import Charts from "./Chart";

import { toast } from "react-toastify";
import JobDetail from "./JobDetail";
import SearchCandidate from "./SearchCandidate";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import {
  getCatIdFromName,
  getCatNameList,
  getSalaryTypeTitleList,
  getSalaryTypeIdFromTitle,
  getRankTitleList,
  getRankIdFromTitle,
  getWorkTypeTitleList,
  getWorkTypeIdFromTitle,
  getWorkExpTitleList,
  getWorkExpIdFromTitle,
  getAddressTitleList,
  getAddressIdFromTitle,
  getCatNameFromId,
  getAddressTitleFromId,
  getWorkTypeTitleFromId,
  getWorkExpTitleFromId,
  getSalaryTypeTitleFromId,
  getRankTitleFromId,
} from "./other/SelectDataUtils";

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.success.light,
    "& .MuiListItemIcon-root": {
      color: theme.palette.success.light,
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
          onClick={() => {
            navigateTo("./searchcandidate");
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

function JobPost({ user }) {
  const navigate = useNavigate();
  const [description, setDescription] = useState(() =>
    EditorState.createEmpty()
  );
  const [candidateRequired, setCandidateRequired] = useState(() =>
    EditorState.createEmpty()
  );
  const [benefit, setBenefit] = useState(() => EditorState.createEmpty());
  const [data, setData] = useState({
    title: "",

    categoryId: "",
    locationId: "",
    amount: 0,
    workTypeId: "",
    endDate: "",
    gender: "",
    rankId: "",
    workExpId: "",
    currency: "",
    salaryTypeId: "",

    salaryMax: 0,
    salaryMin: 0,
    fullAddress: "",
    description: JSON.stringify(convertToRaw(description.getCurrentContent())),
    candidateRequired: JSON.stringify(
      convertToRaw(candidateRequired.getCurrentContent())
    ),
    benefit: JSON.stringify(convertToRaw(benefit.getCurrentContent())),
  });
  useEffect(() => {
    setData({
      ...data,
      description: JSON.stringify(
        convertToRaw(description.getCurrentContent())
      ),
      candidateRequired: JSON.stringify(
        convertToRaw(candidateRequired.getCurrentContent())
      ),
      benefit: JSON.stringify(convertToRaw(benefit.getCurrentContent())),
    });
  }, [
    description.getCurrentContent(),
    candidateRequired.getCurrentContent(),
    benefit.getCurrentContent(),
  ]);
  const [salaryType, setSalaryType] = useState(false);
  const [currency, setCurrency] = useState();
  // Ham nay de lay text tu richtext
  const getTextArrayFromRich = function (rawdata) {
    if (rawdata.blocks.length > 0) {
      return rawdata.blocks.map((item) => item.text);
    }
  };

  const sendPostData = async function () {
    console.log(JSON.stringify(convertToRaw(benefit.getCurrentContent())));
    let descriptionText = getTextArrayFromRich(
      convertToRaw(description.getCurrentContent())
    ).join(" ");
    let candidateRequiredText = getTextArrayFromRich(
      convertToRaw(candidateRequired.getCurrentContent())
    ).join(" ");
    console.log({ ...data, descriptionText, candidateRequiredText });
    const res = await axios.post("/jobpost", {
      ...data,
      descriptionText,
      candidateRequiredText,
    });
    if (res.data && res.data.status && res.data.status !== 200) {
      console.log(res);
      toast.warning("Tạo job post thất bại");
    } else {
      toast.success("Tạo job post thành công");
    }
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
                  title: e.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="p" fontWeight={500}>
              Ngành nghề
            </Typography>
            <Autocomplete
              freeSolo
              size="small"
              sx={{ mt: 1 }}
              options={getCatNameList()}
              onInputChange={(e, value) => {
                setData({
                  ...data,
                  categoryId: getCatIdFromName(e.target.value),
                });
              }}
              onBlur={(e) => {
                setData({
                  ...data,
                  categoryId: getCatIdFromName(e.target.value),
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
              options={getAddressTitleList()}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="-- Chọn địa điểm làm việc --"
                />
              )}
              onInputChange={(e, value) => {
                setData({
                  ...data,
                  locationId: getAddressIdFromTitle(value),
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
              <Typography variant="p">Hình thức làm việc</Typography>
              <Autocomplete
                size="small"
                sx={{ mt: 1 }}
                options={getWorkTypeTitleList()}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="-- Chọn hình thức làm việc --"
                  />
                )}
                onInputChange={(e, value) => {
                  setData({
                    ...data,
                    workTypeId: getWorkTypeIdFromTitle(value),
                  });
                }}
                onBlur={(e) => {
                  setData({
                    ...data,
                    workTypeId: getWorkTypeIdFromTitle(value),
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
                placeholder=""
                onChange={(e) => {
                  setData({
                    ...data,
                    endDate: e.target.value,
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
                options={env.REACT_APP_SEXS.split(", ")}
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
                options={getRankTitleList()}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Giám đốc kinh doanh" />
                )}
                onInputChange={(e, value) => {
                  setData({
                    ...data,
                    rankId: getRankIdFromTitle(value),
                  });
                }}
                onBlur={(e) => {
                  setData({
                    ...data,
                    rankId: getRankIdFromTitle(e.target.value),
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
                options={getWorkExpTitleList()}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Kinh nghiệm làm việc" />
                )}
                onInputChange={(e, value) => {
                  setData({
                    ...data,
                    workExpId: getWorkExpIdFromTitle(value),
                  });
                }}
                onBlur={(e) => {
                  setData({
                    ...data,
                    workExpId: getWorkExpIdFromTitle(e.target.value),
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
                options={env.REACT_APP_CURRENCY.split(", ")}
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
                options={getSalaryTypeTitleList()}
                onInputChange={(e, value) => {
                  setSalaryType(value);
                  setData({
                    ...data,
                    salaryTypeId: getSalaryTypeIdFromTitle(value),
                  });
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="-- Chọn kiểu lương" />
                )}
              />
            </Grid>
            {/* Lương theo khoảng */}
            {salaryType == "Trong khoảng" && (
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
                        salaryMin: e.target.value,
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
                        salaryMax: e.target.value,
                      });
                    }}
                  />
                </Grid>
              </>
            )}
            {/* Lương cố định */}
            {salaryType == "Cố định" && (
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
                        salaryMax: e.target.value,
                        salaryMin: e.target.value,
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
              editorState={description}
              setEditorState={setDescription}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">Yêu cầu ứng viên</Typography>
            <RichText
              editorState={candidateRequired}
              setEditorState={setCandidateRequired}
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

function EditJobPost({ user }) {
  const navigate = useNavigate();
  const location = useLocation();
  const id =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  const { data, setData, loading, error } = useFetch(`/jobpost/${id}`);

  const [description, setDescription] = useState(() =>
    EditorState.createEmpty()
  );
  const [candidateRequired, setCandidateRequired] = useState(() =>
    EditorState.createEmpty()
  );
  const [benefit, setBenefit] = useState(() => EditorState.createEmpty());

  const [salaryType, setSalaryType] = useState(false);
  const [currency, setCurrency] = useState();

  const getTextArrayFromRich = function (rawdata) {
    if (rawdata.blocks.length > 0) {
      return rawdata.blocks.map((item) => item.text);
    }
  };

  const sendPostData = async function () {
    let descriptionText = getTextArrayFromRich(
      convertToRaw(description.getCurrentContent())
    ).join(" ");
    let candidateRequiredText = getTextArrayFromRich(
      convertToRaw(candidateRequired.getCurrentContent())
    ).join(" ");

    const res = await axios.post("/jobpost", {
      ...data,
      description: JSON.stringify(
        convertToRaw(description.getCurrentContent())
      ),
      candidateRequired: JSON.stringify(
        convertToRaw(candidateRequired.getCurrentContent())
      ),
      benefit: JSON.stringify(convertToRaw(benefit.getCurrentContent())),

      descriptionText,
      candidateRequiredText,
    });

    if (res.data && res.data.status && res.data.status !== 200) {
      console.log(res);
      toast.warning("Cập nhật jobpost thất bại");
    } else {
      toast.success("Cập nhật jobpost thành công");
    }
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
      {loading ? (
        <Loading />
      ) : (
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
              Cập nhật tin tuyển dụng
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
                value={data.title}
                placeholder="Thiết kế đồ họa bán thời gian"
                onBlur={(e) => {
                  setData({
                    ...data,
                    title: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="p" fontWeight={500}>
                Ngành nghề
              </Typography>
              <Autocomplete
                value={getCatNameFromId(data.categoryId)}
                freeSolo
                size="small"
                sx={{ mt: 1 }}
                options={getCatNameList()}
                onInputChange={(e, value) => {
                  setData({
                    ...data,
                    categoryId: getCatIdFromName(value),
                  });
                }}
                onBlur={(e) => {
                  setData({
                    ...data,
                    categoryId: getCatIdFromName(e.target.value),
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
                value={getAddressTitleFromId(data.locationId)}
                size="small"
                sx={{ mt: 1 }}
                options={getAddressTitleList()}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="-- Chọn địa điểm làm việc --"
                  />
                )}
                onInputChange={(e, value) => {
                  setData({
                    ...data,
                    locationId: getAddressIdFromTitle(value),
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
                  value={data.amount}
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
                <Typography variant="p">Hình thức làm việc</Typography>
                <Autocomplete
                  value={getWorkTypeTitleFromId(data.workTypeId)}
                  size="small"
                  sx={{ mt: 1 }}
                  options={getWorkTypeTitleList()}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="-- Chọn hình thức làm việc --"
                    />
                  )}
                  onInputChange={(e, value) => {
                    setData({
                      ...data,
                      workTypeId: getWorkTypeIdFromTitle(value),
                    });
                  }}
                  onBlur={(e) => {
                    setData({
                      ...data,
                      workTypeId: getWorkTypeIdFromTitle(value),
                    });
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="p">Thời hạn tuyển</Typography>
                <OutlinedInput
                  value={data.endDate}
                  fullWidth
                  size="small"
                  sx={{ mt: 1 }}
                  type="date"
                  placeholder=""
                  onChange={(e) => {
                    setData({
                      ...data,
                      endDate: e.target.value,
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sx={{ columnGap: 2 }}>
              <Grid item xs={3}>
                <Typography variant="p">Giới tính</Typography>
                <Autocomplete
                  value={data.gender}
                  size="small"
                  sx={{ mt: 1 }}
                  options={env.REACT_APP_SEXS.split(", ")}
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
                  value={getRankTitleFromId(data.rankId)}
                  freeSolo
                  size="small"
                  sx={{ mt: 1 }}
                  options={getRankTitleList()}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Giám đốc kinh doanh" />
                  )}
                  onInputChange={(e, value) => {
                    setData({
                      ...data,
                      rankId: getRankIdFromTitle(value),
                    });
                  }}
                  onBlur={(e) => {
                    setData({
                      ...data,
                      rankId: getRankIdFromTitle(e.target.value),
                    });
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="p">Kinh nghiệm làm việc</Typography>
                <Autocomplete
                  value={getWorkExpTitleFromId(data.workExpId)}
                  freeSolo
                  size="small"
                  sx={{ mt: 1 }}
                  options={getWorkExpTitleList()}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Kinh nghiệm làm việc" />
                  )}
                  onInputChange={(e, value) => {
                    setData({
                      ...data,
                      workExpId: getWorkExpIdFromTitle(value),
                    });
                  }}
                  onBlur={(e) => {
                    setData({
                      ...data,
                      workExpId: getWorkExpIdFromTitle(e.target.value),
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sx={{ columnGap: 2 }}>
              <Grid item xs={3}>
                <Typography variant="p">Loại tiền lương</Typography>
                <Autocomplete
                  value={data.currency}
                  size="small"
                  sx={{ mt: 1 }}
                  options={env.REACT_APP_CURRENCY.split(", ")}
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
                  value={getSalaryTypeTitleFromId(data.salaryTypeId)}
                  size="small"
                  sx={{ mt: 1 }}
                  options={getSalaryTypeTitleList()}
                  onInputChange={(e, value) => {
                    setSalaryType(value);
                    setData({
                      ...data,
                      salaryTypeId: getSalaryTypeIdFromTitle(value),
                    });
                  }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="-- Chọn kiểu lương" />
                  )}
                />
              </Grid>
              {/* Lương theo khoảng */}
              {salaryType == "Trong khoảng" && (
                <>
                  <Grid item xs={2}>
                    <Typography variant="p">Từ</Typography>
                    <OutlinedInput
                      value={data.salaryMin !== 0 ? data.salaryMin : ""}
                      fullWidth
                      size="small"
                      sx={{ mt: 1 }}
                      type="number"
                      endAdornment={
                        <InputAdornment position="end">
                          {currency}
                        </InputAdornment>
                      }
                      onBlur={(e) => {
                        setData({
                          ...data,
                          salaryMin: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="p">Đến</Typography>
                    <OutlinedInput
                      value={data.salaryMax !== 999999999 ? data.salaryMax : ""}
                      fullWidth
                      size="small"
                      sx={{ mt: 1 }}
                      type="number"
                      endAdornment={
                        <InputAdornment position="end">
                          {currency}
                        </InputAdornment>
                      }
                      onBlur={(e) => {
                        setData({
                          ...data,
                          salaryMax: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                </>
              )}
              {/* Lương cố định */}
              {salaryType == "Cố định" && (
                <>
                  <Grid item xs={3}>
                    <Typography variant="p">Lương</Typography>
                    <OutlinedInput
                      value={data.salaryMin}
                      fullWidth
                      size="small"
                      sx={{ mt: 1 }}
                      type="number"
                      endAdornment={
                        <InputAdornment position="end">
                          {currency}
                        </InputAdornment>
                      }
                      onBlur={(e) => {
                        setData({
                          ...data,
                          salaryMax: e.target.value,
                          salaryMin: e.target.value,
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
                value={data.fullAddress}
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
                editorState={description}
                setEditorState={setDescription}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="p">Yêu cầu ứng viên</Typography>
              <RichText
                editorState={candidateRequired}
                setEditorState={setCandidateRequired}
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
                sendPostData();
              }}
            >
              Lưu thay đổi
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}
export default function HrHub() {
  const navigate = useNavigate();
  function navigateTo(location) {
    navigate(location);
  }
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.user.role != "rec") {
      navigateTo("/hrlogin");
    }
  });
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
            <Route
              path="/editjobpost/:id"
              element={<EditJobPost user={user} />}
            ></Route>
            <Route path="/editcompany" element={<Company user={user} />} />
            <Route path="/charts" element={<Charts user={user} />} />
            <Route path="/jobdetail" element={<JobDetail />} />
            <Route
              path="/searchcandidate/:id"
              element={<SearchCandidate user={user} />}
            />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
}
