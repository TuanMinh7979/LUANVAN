import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Table,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TextField,
  Typography,
  TableRow,
  DialogTitle,

} from "@mui/material";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import "draft-js/dist/Draft.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import logoImage from "../assets/camera_icon.png";
import Image from "mui-image";
import { useEffect, useState } from "react";
import RichText from "./RichText";
import axios from "axios";
import { maxHeight, maxWidth } from "@mui/system";
import env from "../assets/env.json";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import { Modal } from "@mui/material";
export default function Charts({ user }) {
  const [openCandidatesModal, setOpenCandidatesModal] = useState(false);
  const hdlOpenCandidatesModal = () => setOpenCandidatesModal(true);
  const hdlCloseCandidatesModal = () => setOpenCandidatesModal(false);

  const navigate = useNavigate();

  const jobsFetch = useFetch(`/rec/${user.user._id}/jobs`);

  function navigateTo(location) {
    navigate(location);
  }
  useEffect(() => {
    if (!user.isLogin && user.user.role != "rec") {
      navigateTo("/hrlogin");
    }
  });
  const hdlSuaBaiDang = (jobPostId) => {
    navigateTo(`../editjobpost/${jobPostId}`);
  };

  const hdlGoBaiDang = (jobPostId) => {
    console.log("gui yeu cau den admin");
  };

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
          <BarChartIcon />
          <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
            Báo cáo tuyển dụng
          </Typography>
        </Box>
        {/* head info */}
        <Grid
          container
          sx={{
            p: 2,
            rowGap: 2,
            columnGap: 2,
            background: "#fff",
            mb: 2,
            alignItems: "center",
          }}
        >
          {!jobsFetch || (jobsFetch && jobsFetch.loading) ? (
            <Loading />
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableCell>Tên tin tuyển dụng</TableCell>
                  <TableCell>Ngày đăng</TableCell>
                  <TableCell>Ngày hết hạn</TableCell>
                  <TableCell>Lượt xem</TableCell>
                  <TableCell>Đã ứng tuyển</TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableHead>

                {jobsFetch.data.map((item) => {
                  return (
                    <TableRow key={item._id}>
                      <TableCell
                        onClick={() => {
                          navigateTo(`/jobdetail/${item._id}`);
                        }}
                      >
                        {item.title}
                      </TableCell>
                      <TableCell>{item.createdAt}</TableCell>
                      <TableCell>{item.endDate}</TableCell>
                      <TableCell>70 lượt xem</TableCell>
                      <TableCell>
                        <Button>
                          {item.contactCnt}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="text" color="success">
                          Đã đăng
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="text"
                          color="success"
                          onClick={() => {
                            navigateTo(`../searchcandidate/${item._id}`);
                          }}
                        >
                          Tìm ứng viên
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => hdlSuaBaiDang(item._id)}>
                          Sửa
                        </Button>
                        <Button onClick={() => hdlGoBaiDang(item._id)}>
                          Gỡ bài đăng
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}

              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>

      {/* MODAL SECTION */}

      <Modal
        open={openCandidatesModal}
        onClose={hdlCloseCandidatesModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            background: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <DialogTitle id="id">
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                TIÊU ĐỀ
              </Typography>
              <Box>
                <IconButton onClick={hdlCloseCandidatesModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          </DialogTitle>


        </Box>
      </Modal>
      {/* MODAL SECTION */}
    </>
  );
}
