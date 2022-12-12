import { Container } from "@mui/system";
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Link,
  Grid,
  Chip,
  Pagination,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import JobCard from "./JobCard";
import companylogo from "../assets/companylogo_sample.png";
import { useEffect, useState } from "react";
function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}
function JobList({ jobs }) {
  console.log(jobs.length);

  const [allData, setAllData] = useState(
    sliceIntoChunks(jobs, jobs.length / 3)
  );
  const [curPage, setCurPage] = useState(0);
  const [pagetinationData, setPageTinationData] = useState(allData[0]);

  useEffect(() => {
    setAllData(sliceIntoChunks(jobs, jobs.length / 3));
    setPageTinationData(allData[curPage]);
  }, [jobs ]);

  function changePage(e, value) {
    setCurPage(value-1);
    console.log("--------", curPage);
    setPageTinationData(allData[curPage]);
  }
  return (
    <>
      <Container maxWidth>
        <Paper elevation={4} sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              fontWeight="600"
              gutterBottom
              sx={{ ml: 3 }}
            >
              Tin tuyển dụng, việc làm mới nhất
            </Typography>
          </Box>
          <Grid
            container
            sx={{ width: "100%", mt: 1, justifyContent: "center" }}
            rowGap={2}
          >
            {pagetinationData.length && pagetinationData.map((item) => {
              return (
                <Grid xs={3}>
                  <JobCard job={item} />
                </Grid>
              );
            })}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Pagination
              onChange={changePage}
              color="success"
              count={allData.length}
            />
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default JobList;
