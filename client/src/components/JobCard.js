import {
  Paper,
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  IconButton,
} from "@mui/material";
import Image from "mui-image";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
export default function JobCard({
  jobTitle,
  companyLogo,
  companyName,
  salary,
  location,
}) {
  function titleCut(jobTitle) { }
  const style1 = {
    background: "#2E7D32",
    px: 1,
    borderRadius: "4px",
    mr: 2,
    color: "white",
    fontSize: "16px"
  };
  return (
    <>
      <Card sx={{ boxShadow: "-1px 1px 4px rgb(0 0 0 / 20%)", width: '95%', }}>
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
                  src={companyLogo}
                  fit="contain"
                  width="100%"
                  height="100%"
                  duration="0"
                  sx={{
                    borderRadius: "50%"
                  }}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                ml:4
              }}
            >
              <Typography fontWeight="600" fontSize="18px" variant="h6">
                {jobTitle}
              </Typography>
              <Typography fontWeight="300" fontSize="20px" variant="h5">
                {companyName}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", padding: "10px", minWidth: "50%" }}>
            <Typography sx={style1}>{salary}</Typography>
            <Typography sx={style1}>{location}</Typography>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}
