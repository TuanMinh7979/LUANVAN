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
import axios from "axios";

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
  getSalaryFilterTitleList,
  getSalaryFilterQueryFromTitle,

}
  from "./other/SelectDataUtils";

import { salaryFilterSelect } from "../clientData/selectData";
export default function Jobs() {
  const user = useSelector((state) => state.user);
  const { data, setData, loading, error } = useFetch("/jobpost");
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
      },
    },
  };


  const buildFilterApi = async () => {
    let filterApiArray = []
    let filterApiUrl = "/jobpost?"

    const titleText = document.getElementById("titleInp").value

    const jobCatTitle = document.getElementById("jobCategorySel").innerText
    const locationTitle = document.getElementById("locationSel").innerText
    const rankTitle = document.getElementById("rankSel").innerText
    const salaryFilterTitle = document.getElementById("salaryFilterSel").innerText

    let jobCatSelId, locationSelId, rankSelId, salaryFilterQuery;

    if (jobCatTitle && jobCatTitle !== "All" && jobCatTitle.length > 1) {

      jobCatSelId = getCatIdFromName(jobCatTitle)
    }
    if (locationTitle && locationTitle !== "All" && locationTitle.length > 1) {

      locationSelId = getAddressIdFromTitle(locationTitle)
    }
    if (rankTitle && rankTitle !== "All" && rankTitle.length > 1) {
      rankSelId = getRankIdFromTitle(rankTitle)
    }
    if (salaryFilterTitle && salaryFilterTitle !== "All" && salaryFilterTitle.length > 1) {
      salaryFilterQuery = getSalaryFilterQueryFromTitle(salaryFilterTitle)
    }


    if (titleText) {
      console.log("---", titleText)
      filterApiArray.push(`title=${titleText}&`)
    }
    if (jobCatSelId) {
      filterApiArray.push(`categoryId=${jobCatSelId}&`)
    }
    if (locationSelId) {
      filterApiArray.push(`locationId=${locationSelId}&`)
    }
    if (rankSelId) {
      filterApiArray.push(`rankId=${rankSelId}&`)
    }
    if (salaryFilterQuery) {
      filterApiArray.push(`${salaryFilterQuery}&`)
    }

    let queryUrl = ""
    if (filterApiArray.length > 0) {
      console.log(filterApiArray)
      console.log("----------")
      queryUrl = filterApiArray.join("")
    }

    if (queryUrl.endsWith("&")) {
      queryUrl = queryUrl.substring(0, queryUrl.length - 1)
    }

    filterApiUrl += queryUrl
    console.log(filterApiUrl)
    const res = await axios.get("http://localhost:8800/api" + filterApiUrl);
    setData(res.data)
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
            id="titleInp"
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

            >
              <MenuItem value="All" key="jobCategoryAllKey" >
                All
              </MenuItem>
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
              <MenuItem value="All" key="locationAllKey" >
                All
              </MenuItem>
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
              <MenuItem value="All" key="rankAllKey" >
                All
              </MenuItem>
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
              id="salaryFilterSel"
              label="Mức lương"
              MenuProps={MenuProps}
              startAdornment={
                <InputAdornment position="start">
                  <AttachMoneyIcon color="success" fontSize="small" />
                </InputAdornment>
              }
            >
              <MenuItem value="All" key="salaryFilterKey" >
                All
              </MenuItem>
              {getSalaryFilterTitleList().map((item, key) => (
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
