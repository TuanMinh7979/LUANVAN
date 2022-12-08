import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListItem,
  MenuList,
} from "@mui/material";
import Image from "mui-image";
import { useState } from "react";
import { useSelector } from "react-redux";
import FeatureCard from "./FeatureCard";
import JobList from "./JobList";
import env from "../assets/env.json";
import hrimg from "../assets/hr.png";
import useFetch from "../hooks/useFetch";
import RecommentJobs from "./RecommentJobs";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  const [displayFilterBox, setDisplayFilterBox] = useState("none");
  const user = useSelector((state) => state.user);
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/jobpost"
  );
  console.log(data);
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
      },
    },
  };
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to left, #8cebc84a, transparent)",
          mb: 0,
          p: 6,
        }}
      >
        <Box display="flex">
          <Box
            sx={{
              mt: "7rem",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" fontWeight="550" gutterBottom>
              Tìm kiếm công việc phù hợp với bạn
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <TextField
                onFocus={() => {
                  setDisplayFilterBox("block");
                }}
                size="small"
                sx={{ width: "70%" }}
                id="outlined-start-adornment"
                color="success"
                label="Nhập tên công việc, ngành nghề bạn muốn ứng tuyển"
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                }}
              />
              <Button
                size="small"
                sx={{
                  ml: 2,
                }}
                variant="contained"
                color="success"
              >
                Tìm việc ngay
              </Button>
              <Box width="30rem">
                <Box display={displayFilterBox}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{ my: 2 }}
                  >
                    <Typography variant="h6" fontSize="1.1rem" gutterBottom>
                      Tìm kiếm nâng cao
                    </Typography>
                    <Button
                      size="small"
                      sx={{ p: 0 }}
                      onClick={() => setDisplayFilterBox("none")}
                    >
                      Thu gọn
                    </Button>
                  </Box>
                  <Box display="flex" flexWrap="wrap" width="100%">
                    <FormControl
                      size="small"
                      sx={{ width: "40%", mb: 1, mr: 2 }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Ngành nghề
                      </InputLabel>
                      <Select label="Ngành nghề" MenuProps={MenuProps}>
                        {env.REACT_APP_JOBS.split(", ").map((item, key) => (
                          <MenuItem value={item} key={key}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl
                      size="small"
                      sx={{ width: "40%", mb: 1, mr: 2 }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Cấp bậc
                      </InputLabel>
                      <Select label="Cấp bậc" MenuProps={MenuProps}>
                        {env.REACT_APP_LEVEL.split(", ").map((item, key) => (
                          <MenuItem value={item} key={key}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl
                      size="small"
                      sx={{ width: "40%", mb: 1, mr: 2 }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Mức lương
                      </InputLabel>
                      <Select label="Mức lương" MenuProps={MenuProps}>
                        {env.REACT_APP_GROSS.split(", ").map((item, key) => (
                          <MenuItem value={item} key={key}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl
                      size="small"
                      sx={{ width: "40%", mb: 1, mr: 2 }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Địa điểm công ty
                      </InputLabel>
                      <Select label="Địa điểm công ty" MenuProps={MenuProps}>
                        {env.REACT_APP_LOCATION.split(", ").map((item, key) => (
                          <MenuItem value={item} key={key}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: "1.5rem",
                  }}
                >
                  <Typography variant="h6" fontWeight={550}>
                    Các công ty tuyển dụng hàng đầu
                  </Typography>
                  <Box
                    sx={{
                      mt: "1rem",
                      display: "flex",
                    }}
                  >
                    <Image
                      sx={{
                        maxWidth: "58px",
                        maxHeight: "30px",
                        mr: 4,
                      }}
                      src="https://www.topcv.vn/v4/image/welcome/companies/onemoutn.png"
                      fit="cover"
                      duration={0}
                    />
                    <Image
                      sx={{
                        maxWidth: "58px",
                        maxHeight: "30px",
                        mr: 4,
                      }}
                      src="https://www.topcv.vn/v4/image/welcome/companies/teachcombank.png"
                      fit="cover"
                      duration={0}
                    />
                    <Image
                      sx={{
                        maxWidth: "58px",
                        maxHeight: "30px",
                        mr: 4,
                      }}
                      src="https://www.topcv.vn/v4/image/welcome/companies/viettel.png"
                      fit="cover"
                      duration={0}
                    />
                    <Image
                      sx={{
                        maxWidth: "58px",
                        maxHeight: "30px",
                        mr: 4,
                      }}
                      src="https://www.topcv.vn/v4/image/welcome/companies/tiki.png"
                      fit="cover"
                      duration={0}
                    />
                    <Image
                      sx={{
                        maxWidth: "58px",
                        maxHeight: "30px",
                        mr: 4,
                      }}
                      src="https://www.topcv.vn/v4/image/welcome/companies/fpt.png"
                      fit="cover"
                      duration={0}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Image
            src="https://www.topcv.vn/v4/image/welcome/image_topcv.png?v=1.0.0"
            fit="cover"
            height="50%"
            width="50%"
            duration={0}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 4,
            px: 4,
          }}
        >
          <FeatureCard
            maxHeight="262px"
            maxWidth="42%"
            title="Tạo CV online ấn tượng"
            subTitle="ViecLamNhanh hiện có 50+ mẫu CV chuyên nghiệp, độc đáo phù hợp với mọi ngành nghề"
            imageLink="https://www.topcv.vn/v4/image/welcome/mau_cv.png?v=1.0.0"
            buttonTitle="Tạo CV ngay"
          />
          <FeatureCard
            maxHeight="262px"
            maxWidth="42%"
            title="Tìm ứng viên qua hệ thông AI thông minh"
            subTitle="Tạo ứng viên phù hợp với tin tuyển dụng của bạn ngay"
            imageLink={hrimg}
            buttonTitle="Tìm ứng viên"
          />
        </Box>
        {user && user.user.detail && user.user.detail.activeCvId && <RecommentJobs resumeId={user.user.detail.activeCvId} />}


        {loading ? "loading" : <JobList jobs={data} />}
      </Box>
    </>
  );
}
export default Home;
