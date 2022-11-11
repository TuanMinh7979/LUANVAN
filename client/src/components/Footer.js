import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import Image from "mui-image";
import logo from '../assets/logo_banner.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3
      }}
    >
      {/* logo */}
      <Box
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Image
          src={logo}
          sx={{ maxWidth: 150, maxHeight: 200 }}
        >
        </Image>
      </Box>
      {/* nav */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '50%', }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            cursor: 'pointer',
            color: "#2E7D32"
          }}
        >
          Việc làm
        </Typography>
        <Typography

          sx={{
            fontSize: "16px",
            cursor: 'pointer',
            color: "#2E7D32"
          }}
        >
          Hồ sơ & CV
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            cursor: 'pointer',
            color: "#2E7D32"
          }}
        >
          Công cụ
        </Typography>
        <Typography

          sx={{
            fontSize: "16px",
            cursor: 'pointer',
            color: "#2E7D32"
          }}
        >
          Đăng tuyển & tìm hồ sơ
        </Typography>
      </Box>
      {/* social icon */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '20%', my: 3 }}
      >
        <FacebookIcon
          sx={{
            color: '#2E7D32'
          }}
        ></FacebookIcon>
        <TwitterIcon
          sx={{
            color: '#2E7D32'
          }}
        ></TwitterIcon>
        <InstagramIcon
          sx={{
            color: '#2E7D32'
          }}
        ></InstagramIcon>
        <LinkedInIcon
          sx={{
            color: '#2E7D32'
          }}
        ></LinkedInIcon>
      </Box>
      <Typography variant="p"
        sx={{
          fontSize: "14px",
          color: '#2E7D32'
        }}
      >
        © 2022 ViecLamNhanh. All rights reserved.
      </Typography>
    </Container>
  )
}