import {
  Container,
  Box,
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  Typography,
  createTheme,
  Grid,
  CircularProgress,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CancelIcon from "@mui/icons-material/Cancel";
import Image from "mui-image";
import logo from "../assets/companylogo_sample.png";
import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import PaidIcon from "@mui/icons-material/Paid";
import { alpha } from "@mui/material/styles";
import PeopleIcon from "@mui/icons-material/People";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WcIcon from "@mui/icons-material/Wc";
import StarIcon from "@mui/icons-material/Star";
import { RichTextDisplay } from "./RichText";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import EditIcon from "@mui/icons-material/Edit";
import RecommentJobs from "./RecommentJobs";
import SimilarJob from "./SimilarJob";
import axios from "axios";
import { toast } from "react-toastify";
import {
  getAddressTitleFromId,
  getWorkExpTitleFromId,
  getWorkTypeTitleFromId,
  getRankTitleFromId,
  getSalaryTypeTitleFromId,
  getJobCategoryTitleFromId,
} from "./other/SelectDataUtils";
import { setUserInfo } from "../store/userSlice";
import Loading from "./Loading";
import { useDispatch } from "react-redux";

export default function JobDetail({ user }) {
  console.log(user)
  const dispatch = useDispatch();

  const [isApplied, setIsApplied] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(`/jobpost/${id}`);
  const theme = createTheme();
  const ApplyJob = async () => {
    let sendApply = 0;
    if (confirm("Bạn có muốn ứng tuyển công việc này")) {
      sendApply = 1;
      const contact = {
        jobId: id,
      };

      const res = await axios.post(
        `/candidate/${user.user._id}/applyjob`,
        contact
      );
      if (res.data.status && res.data.status !== 200) {
        
        toast.warning("Ứng tuyển thất bại");
      } else {
        console.log("--------------><><><><><>", res.data);
        const action = setUserInfo(res.data);
        dispatch(action);
        toast.success("Ứng tuyển thành công");
      }
    }
  };

  let salaryChip = "";
  if (data.salaryMin == 0 && data.salaryMax == 0) salaryChip = "Thỏa thuận";
  if (data.salaryMin == data.salaryMax && data.salaryMin > 0)
    salaryChip = `${data.salaryMin / 1000000} Triẹu`;
  if (
    data.salaryMin > 0 &&
    data.salaryMax < 999999999 &&
    data.salaryMin < data.salaryMax
  ) {
    salaryChip = `${data.salaryMin / 1000000} Triệu  -  ${
      data.salaryMax / 1000000
    } Triệu`;
  }
  if (data.salaryMin == 0 && data.salaryMax > 0) {
    salaryChip = `Đến ${data.salaryMax / 1000000} Triệu`;
  }
  if (data.salaryMax == 999999999 && data.salaryMin > 0) {
    salaryChip = `Từ ${data.salaryMin / 1000000} Triệu`;
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container
          disableGutters
          maxWidth
          sx={{
            background: "#f1f2f6",
            py: 4,
          }}
        >
          <Container
            maxWidth
            disableGutters
            sx={{
              background: "#f1f2f6",
            }}
          >
            {/* Title */}
            <Stack
              direction="row"
              spacing={12}
              sx={{
                background: "white",
                py: 3,
                mb: 2,
                width: "70%",
                mx: "auto",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Image
                  src={data.companyId.linkToLogo}
                  sx={{
                    borderRadius: "100%",
                    border: "1px solid gray",
                  }}
                  width="100px"
                  height="100px"
                  duration={0}
                  fit="scale-down"
                ></Image>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  color="initial"
                  fontWeight={600}
                  sx={{ color: theme.palette.success.light }}
                >
                  {data.title}
                </Typography>
                <Typography variant="h6" color="initial">
                  {data.companyId.name}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ color: "rgba(0,0,0,0.7)" }}
                >
                  <AccessTimeIcon fontSize="small" />
                  <Typography variant="body1">
                    Hạn nộp hồ sơ: {new Date(data.endDate).toLocaleDateString()}
                  </Typography>
                </Stack>
              </Box>
              <Box>
                {user.user.role == "candidate" &&
                  (!isApplied ? (
                    <Button
                      onClick={() => ApplyJob()}
                      startIcon={<SendIcon />}
                      variant="contained"
                      color="success"
                    >
                      Ứng tuyển ngay
                    </Button>
                  ) : (
                    <Button
                      onClick={() => ApplyJob()}
                      startIcon={<CancelIcon />}
                      variant="contained"
                      color="warning"
                    >
                      Hủy ứng tuyển
                    </Button>
                  ))}
                {user.user.role == "rec" && (
                  <Button
                    startIcon={<EditIcon />}
                    variant="contained"
                    color="success"
                  >
                    Chỉnh sửa tin tuyển dụng
                  </Button>
                )}
              </Box>
            </Stack>
            <Grid
              container
              sx={{
                background: "white",
                my: 2,
                mx: "auto",
                width: "70%",
                pb: 3,
              }}
            >
              <Grid xs={12} sx={{ my: 2 }}>
                <Typography
                  sx={{
                    px: 2,
                    ml: 3,
                    borderLeft: `7px solid ${theme.palette.success.light}`,
                  }}
                  variant="h5"
                  fontWeight={600}
                >
                  Chi tiết tuyển dụng
                </Typography>
              </Grid>
              <Grid
                xs={12}
                container
                item
                sx={{
                  mx: 3,
                  py: 2,
                  background: alpha(theme.palette.success.main, 0.08),
                }}
              >
                <Grid item sx={12}>
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      ml: 3,
                    }}
                  >
                    Thông tin chung
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  container
                  sx={{
                    mt: 2,
                    ml: 3,
                    rowGap: 3,
                    columnGap: 2,
                  }}
                  item
                >
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <PaidIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Mức lương
                      </Typography>
                      <br></br>
                      <Typography variant="p">{salaryChip}</Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <PeopleIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Số lượng tuyển
                      </Typography>
                      <br></br>
                      <Typography variant="p">{data.amount}</Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <MilitaryTechIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Cấp bậc
                      </Typography>
                      <br></br>
                      <Typography variant="p">
                        {getRankTitleFromId(data.rankId)}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <WorkIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Hình thức làm việc
                      </Typography>
                      <br></br>
                      <Typography variant="p">
                        {getWorkTypeTitleFromId(data.workTypeId)}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <WcIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Giới tính
                      </Typography>
                      <br></br>
                      <Typography variant="p">{data.gender}</Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <StarIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Kinh nghiệm
                      </Typography>
                      <br></br>
                      <Typography variant="p">
                        {getWorkExpTitleFromId(data.workExpId)}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                xs={12}
                container
                item
                sx={{
                  mx: 3,
                  mt: 2,
                  py: 2,
                  background: alpha(theme.palette.success.main, 0.08),
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    ml: 3,
                  }}
                >
                  Địa điểm làm việc
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    ml: 3,
                    mt: 2,
                  }}
                >
                  {getAddressTitleFromId(data.locationId)}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                container
                item
                sx={{
                  mx: 3,
                  mt: 2,
                  py: 2,
                  background: alpha(theme.palette.success.main, 0.08),
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    ml: 3,
                  }}
                >
                  Mô tả công việc
                </Typography>
                <Box
                  sx={{
                    ml: 3,
                    py: 1,
                  }}
                >
                  <RichTextDisplay data={JSON.parse(data.description)} />
                </Box>
              </Grid>
              <Grid
                xs={12}
                container
                item
                sx={{
                  mx: 3,
                  mt: 2,
                  py: 2,
                  background: alpha(theme.palette.success.main, 0.08),
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    ml: 3,
                  }}
                >
                  Yêu cầu ứng viên
                </Typography>
                <Box
                  sx={{
                    ml: 3,
                    py: 1,
                  }}
                >
                  <RichTextDisplay data={JSON.parse(data.candidateRequired)} />
                </Box>
              </Grid>
              <Grid
                xs={12}
                container
                item
                sx={{
                  mx: 3,
                  mt: 2,
                  py: 2,
                  background: alpha(theme.palette.success.main, 0.08),
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    ml: 3,
                  }}
                >
                  Quyền lợi
                </Typography>
                <Box
                  sx={{
                    ml: 3,
                    py: 1,
                  }}
                >
                  <RichTextDisplay data={JSON.parse(data.benefit)} />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  mt: 3,
                }}
              >
                <SimilarJob jobPostId={data._id} />
              </Grid>
            </Grid>
          </Container>
        </Container>
      )}
    </>
  );
}
