import {
  Box,
  Container,
  Input,
  OutlinedInput,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import env from "../assets/env.json";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BadgeIcon from "@mui/icons-material/Badge";
import Image from "mui-image";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import JobList from "./JobList";
import banner from "../assets/banner.png";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import RecommentJobs from "./RecommentJobs";
import { useSelector } from "react-redux";

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
}
  from "./other/SelectDataUtils";
export default function Jobs() {
  const user = useSelector((state) => state.user);
  const { data, loading, error } = useFetch("/jobpost");
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
      },
    },
  };

  let filterApiArray = []
  let filterApiUrl = "/jobpost?"
  const buildFilterApi = () => {

    const jobCatSelVal = document.getElementById("jobCategorySel").innerText
    const locationSelVal = document.getElementById("locationSel").innerText
    const rankSelVal = document.getElementById("rankSel").innerText

    if (jobCatSelVal) {
      filterApiArray.push()
    }
    if (locationSelVal) {

    }
    if (rankSelVal) {

    }
  }
  const changeJobCategory = (titleInp) => {


  }
  const changeLocation = (titleInp) => {
    const locationId = getAddressIdFromTitle(titleInp)
  }
  const changeRank = (titleInp) => {
    const rankId = getRankIdFromTitle(titleInp)
  }


  return (
    <>
      <Container>
        {/* seacrch control */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexWrap: "wrap",
            w: 100,
          }}
        >
          <TextField
            size="small"
            color="success"
            placeholder="Tên công việc, vị trí muốn ứng tuyển"
            sx={{
              flexBasis: "20%",
              mr: 2,
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
              id="jobCategorySel"
              startAdornment={
                <InputAdornment position="start">
                  <WorkIcon color="success" fontSize="small" />
                </InputAdornment>
              }
              label="Ngành nghề"
              MenuProps={MenuProps}
              onChange={(e) => changeJobCategory(e.target.value)}
            >
              {getCatNameList().map((item, key) => (
                <MenuItem value={item} key={key}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* Noi lam viec */}
          <FormControl
            color="success"
            size="small"
            sx={{ width: "15%", mb: 1, mr: 2 }}
          >
            <InputLabel id="demo-simple-select-label">
              Địa điểm công ty
            </InputLabel>
            <Select
              id="locationSel"
              startAdornment={
                <InputAdornment position="start">
                  <PlaceIcon color="success" fontSize="small" />
                </InputAdornment>
              }
              label="Địa điểm công ty"
              MenuProps={MenuProps}
            >
              {getAddressTitleList().map((item, key) => (
                <MenuItem value={item} key={key}>
                  {item}
                </MenuItem>
              ))}
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
              id="rankSel"
              label="Cấp bậc"
              MenuProps={MenuProps}
              startAdornment={
                <InputAdornment position="start">
                  <BadgeIcon color="success" fontSize="small" />
                </InputAdornment>
              }
            >
              {getRankTitleList().map((item, key) => (
                <MenuItem value={item} key={key}>
                  {item}
                </MenuItem>
              ))}
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
              {env.REACT_APP_GROSS.split(", ").map((item, key) => (
                <MenuItem value={item} key={key}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* search btn */}
          <FormControl>
            <Button
              variant="contained"
              color="success"
              onClick={() => {


                buildFilterApi()

              }}
            >
              Tìm việc ngay
            </Button>
          </FormControl>
        </Box>
      </Container>
      {/* Main */}
      <Container maxWidth sx={{ background: "#F0F0F0", mt: 4, pb: 4 }}>
        <Container
          maxWidth
          sx={{
            p: 4,
          }}
        >
          {/* image */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "24px",
                fontWeight: 500,
              }}
            >
              Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc
            </Typography>
            <Typography variant="p">
              Tiếp cận 30,000+ tin tuyển dụng việc làm mới mỗi ngày từ hàng
              nghìn doanh nghiệp uy tín tại Việt Nam
            </Typography>
            <Image
              sx={{
                mt: 2,
                borderRadius: "5px",
              }}
              src={banner}
              duration={0}
            />
          </Box>
          {/* Joblist */}
        </Container>
        <Box sx={{ my: 3 }}>
          {loading ? "loading" : <JobList jobs={data} />}
        </Box>
        {user && user.user.detail && user.user.detail.activeCvId && (
          <RecommentJobs resumeId={user.user.detail.activeCvId} />
        )}
      </Container>
    </>
  );
}
