import {
  Paper,
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  IconButton,
  Chip,
} from "@mui/material";
import { useNavigate, createSearchParams } from "react-router-dom";
import Image from "mui-image";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import {
  getAddressTitleFromId,
  getWorkExpTitleFromId,
  getWorkTypeTitleFromId,
  getRankTitleFromId,
  getSalaryTypeTitleFromId,
  getJobCategoryTitleFromId
} from "./other/SelectDataUtils";
export default function JobCard(props) {

  const { job } = props

  function titleCut(title) { }
  const style1 = {
    background: "#2E7D32",
    px: 1,
    borderRadius: "4px",
    mr: 2,
    color: "white",
    fontSize: "16px"
  };
  const navigate = useNavigate()

  let salaryChip = ""
  if (job.salaryMin == 0 && job.salaryMax == 0) salaryChip = "Thỏa thuận"
  if (job.salaryMin == job.salaryMax && job.salaryMin > 0) salaryChip = `${job.salaryMin/1000000} Tr`
  if (job.salaryMin > 0 && job.salaryMax > 0 && job.salaryMin < job.salaryMax) {
    salaryChip = `${job.salaryMin/1000000} Tr  -  ${job.salaryMax/1000000} Tr`
  }
  if (job.salaryMin == 0 && job.salaryMax > 0) {
    salaryChip = `Upto ${job.salaryMax/1000000} Tr`
  }
  if (job.salaryMax == 0 && job.salaryMin > 0) {
    salaryChip = `From ${job.salaryMin/1000000} Tr`
  }

  return (
    <>
      <Card
        sx={{ boxShadow: "-1px 1px 4px rgb(0 0 0 / 20%)", width: '95%', }}
        onClick={() => {
          navigate({
            pathname: `/jobdetail/${job._id}`,
          })
        }}
      >
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              padding: "10px",
            }}
          >
            <Grid container sx={{ width: "20%" }}>
              <Grid xs="12">
                <Image
                  src={job.companyId.linkToLogo
                  }
                  sx={{
                    borderRadius: '100%',
                    border: '1px solid gray'
                  }}
                  width="80px"
                  height="80px"
                  duration={0}
                  fit="scale-down"
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                ml: 4
              }}
            >
              <Typography fontWeight="600" fontSize="18px" variant="h6">
                {job.title}
              </Typography>
              <Typography fontWeight="300" fontSize="20px" variant="h5">
                {job.companyId.name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", padding: "10px", minWidth: "50%" }}>



            <Chip color="success" label={salaryChip} sx={{ mr: 1 }} />
            <Chip color="success" label={getAddressTitleFromId(job.locationId)} />
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}
