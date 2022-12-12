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

function JobList({ jobsPage }) {
 
console.log("FROM JOBSPAGE", jobsPage)
  return (
    <>
      <Container maxWidth>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" fontWeight="600" gutterBottom sx={{ ml: 3 }}>
            Tin tuyển dụng, việc làm mới nhất
          </Typography>
        </Box>
        <Grid
          container
          sx={{ width: "100%", mt: 1, justifyContent: "center" }}
          rowGap={2}
        >
          {jobsPage.length &&
            jobsPage.map((item) => {
              return (
                <Grid xs={3}>
                  <JobCard job={item} />
                </Grid>
              );
            })}
        </Grid>

     
     
      </Container>
    </>
  );
}

export default JobList;
