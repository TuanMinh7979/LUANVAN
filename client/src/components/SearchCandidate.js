import {
  Grid,
  Paper,
  Typography,
  Box,
  Tab,
  Tabs,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Autocomplete,
  TextField,
  Button,
  Input,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import fakedate from "../assets/fakedata.json";
import env from "../assets/env.json";
import { RichTextDisplay } from "./RichText";
import axios from "axios";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// axios tim o day
function SearchController({ setSearchCbData }) {
  const [searchParams, setSearchParams] = useState({
    title: false,
    experience: false,
    activities: false,
    skills: false,
    education: false,
    keyword: "",
    address: "",
  });

  function handleCheck(e, item) {
    setSearchParams({
      ...searchParams,
      [item]: e.target.checked,
    });
  }

  const sendSearchOption = async () => {
    const res = await axios.post(
      "http://localhost:8800/api/resume/getByCharacterInField",
      searchParams
    );
    setSearchCbData(res.data);
  };


  return (
    <Grid
      container
      sx={{
        gap: 2,
        alignItems: "center",
        background: "#fff",
        pb: 3,
      }}
    >
      <Grid item xs={7}>
        <Typography variant="h6" color="initial">
          Phạm vi tìm kiếm
        </Typography>
        <FormGroup>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    handleCheck(e, "title");
                  }}
                  checked={searchParams.title}
                />
              }
              label="Vị trí ứng tuyển"
            ></FormControlLabel>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    handleCheck(e, "experience");
                  }}
                  checked={searchParams.experience}
                />
              }
              label="Kinh nghiệm"
            ></FormControlLabel>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    handleCheck(e, "activities");
                  }}
                  checked={searchParams.activities}
                />
              }
              label="Hoạt động"
            ></FormControlLabel>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    handleCheck(e, "skills");
                  }}
                  checked={searchParams.skills}
                />
              }
              label="Kỹ năng"
            ></FormControlLabel>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    handleCheck(e, "education");
                  }}
                  checked={searchParams.education}
                />
              }
              label="Học vấn"
            ></FormControlLabel>
          </Box>
        </FormGroup>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="p" fontWeight={500}>
          Địa điểm làm việc
        </Typography>
        <Autocomplete
          size="small"
          sx={{ mt: 1 }}
          options={env.REACT_APP_LOCATION.split(", ")}
          renderInput={(params) => (
            <TextField {...params} placeholder="-- Chọn địa điểm làm việc --" />
          )}
          onInputChange={(e, value) => {
            setSearchParams({
              ...searchParams,
              address: value,
            });
          }}
        />
      </Grid>
      <Grid item xs={7}>
        <Typography variant="h6" color="initial">
          Trong CV có tồn tại từ khóa
        </Typography>
        <FormGroup>
          <Input
            size="small"
            onBlur={(e) => {
              setSearchParams({
                ...searchParams,
                keyword: e.target.value,
              });
            }}
          />
        </FormGroup>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() => sendSearchOption()}
        >
          Tìm kiếm
        </Button>
      </Grid>
    </Grid>
  );
}


// Card ung vien
function CandidateCard({ data }) {
  const commonStyle = {
    display: "flex",
    alignItems: "center",
    "& :nth-child(1)": {
      mr: 1,
    },
  };
  const navigate = useNavigate()
  return (
    <Grid
      container
      sx={{
        py: 2,
        alignItems: "center",
        justifyContent: "space-around",
        borderBottom: "1px dashed gray",
      }}
    >
      {/* thong tin chung */}
      <Grid
        item
        xs={4}
        sx={{
          borderRight: "1px solid gray",
        }}
      >
        {/*name  */}
        <Typography
          variant="h4"
          color="initial"
          fontWeight={500}
          sx={{ mb: 1 }}
        >
          {data.name}
        </Typography>
        {/* title */}
        <Box
          sx={{
            ...commonStyle,
          }}
        >
          <WorkOutlineOutlinedIcon fontSize="small" />
          <Typography variant="body1" color="initial">
            {data.title}
          </Typography>
        </Box>
        {/* address  */}
        <Box
          sx={{
            ...commonStyle,
          }}
        >
          <PlaceOutlinedIcon fontSize="small" />
          <Typography variant="body1" color="initial">
            {data.fulladdress}
          </Typography>
        </Box>
        {/* email */}
        <Box
          sx={{
            ...commonStyle,
          }}
        >
          <EmailOutlinedIcon fontSize="small" />
          <Typography variant="body1" color="initial">
            {data.email}
          </Typography>
        </Box>
        {/* phone */}
        <Box
          sx={{
            ...commonStyle,
          }}
        >
          <PhoneIphoneOutlinedIcon fontSize="small" />
          <Typography variant="body1" color="initial">
            {data.phone}
          </Typography>
        </Box>
      </Grid>
      {/* Thong tin Rich text */}
      <Grid item container xs={5}>
        {/* kinh nghiem */}
        <Grid
          item
          xs={12}
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="h6" color="initial">
            Kinh nghiệm
          </Typography>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <RichTextDisplay data={JSON.parse(data.experienceCv)} />
          </Box>
        </Grid>
        {/* Hoat dong */}
        <Grid
          item
          xs={12}
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="h6" color="initial">
            Hoạt động
          </Typography>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <RichTextDisplay data={JSON.parse(data.activitiesCv)} />
          </Box>
        </Grid>
        {/* Ky nang */}
        <Grid
          item
          xs={12}
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="h6" color="initial">
            Kỹ năng
          </Typography>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <RichTextDisplay data={JSON.parse(data.skillsCv)} />
          </Box>
        </Grid>
        {/* Hoc van */}
        <Grid item xs={12}>
          <Typography variant="h6" color="initial">
            Học vấn
          </Typography>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <RichTextDisplay data={JSON.parse(data.educationCv)} />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" color="primary" onClick={() => navigate(`/viewcv/${data._id}`)} >
          Xem CV
        </Button>
        <Button variant="outlined" sx={{ ml: 2 }} onClick={() => navigate(`/hrhub/candidatecvs/${data._id}`)} color="success">
          Quản lý
        </Button>
      </Grid>
    </Grid>
  );
}
function Result({ data }) {
  return (
    <>
      <Box
        sx={{
          background: "#fff",
          p: 2,
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            pb: 2,
            mb: 2,
          }}
        >
          <SearchIcon />
          <Typography variant="h6" fontWeight={550} sx={{ ml: 1 }}>
            Tìm thấy{" "}
            <Typography variant="span" color="success">
              {data.length}
            </Typography>{" "}
            ứng viên phù hợp
          </Typography>
        </Box>
        {data.map((item) => {
          return <CandidateCard data={item} />;
        })}
      </Box>
    </>
  );
}

export default function SearchCandidate({ user, env }) {
  const location = useLocation();
  const strArr = location.pathname.split("/");

  const jobPostId = strArr[strArr.length - 1];

  //cv list
  const [recommendData, setRecommendData] = useState([]);
  const [searchCbData, setSearchCbData] = useState([]);


  const [appliedCvData, setAppliedCvData] = useState([]);

  //cv list
  const fetchAppliedCvData = async () => {
    const appliedCvDataRes = await axios.get(
      `/rec/${user.user._id}/job/${jobPostId}/appliedcandidates`
    );

    let appliedCvData = appliedCvDataRes.data.map(item => item.applyCvData)
    setAppliedCvData(appliedCvData)

  }
  const getSugListData = async () => {
    const sugListIdFetch = await axios.get(
      `http://localhost:8000/getSugCvForJob/${jobPostId}`
    );
    let suglistIdData = sugListIdFetch.data.sugList;
    suglistIdData = suglistIdData.reverse();
    const sugListDbData = await axios.post(
      "http://localhost:8800/api/recommend/getCvByListId",
      { suglistIdData }
    );

    setRecommendData(sugListDbData.data);
  };
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
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
        <SearchIcon />
        <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
          Tìm ứng viên
        </Typography>
      </Box>
      {/* TAB */}
      <Box
        sx={{
          width: "100%",
          my: 2,
          p: 2,
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          alignItems: "center",
          background: "#fff",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="feature tabs"
          >
            <Tab label="Tìm ứng viên" {...a11yProps(0)} />
            <Tab label="Ứng viên đã ứng tuyển" {...a11yProps(1)} onClick={() => fetchAppliedCvData()} />
            <Tab
              onClick={() => getSugListData()}
              label="Ứng viên được đề xuất bằng AI"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel
          value={tabValue}
          index={0}
          sx={{
            background: "#f1f2f7",
          }}
        >
          <SearchController setSearchCbData={setSearchCbData} env={env} />
          {searchCbData && searchCbData.length > 0 && (
            <Result data={searchCbData} />
          )}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          {appliedCvData && appliedCvData.length > 0 && (
            <Result data={appliedCvData} />
          )}
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          {recommendData && recommendData.length > 0 && (
            <Result data={recommendData} />
          )}
        </TabPanel>
      </Box>
      {/* REsult */}
    </Grid>
  );
}
