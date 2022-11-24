import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Grid, Paper, Box, Typography, createTheme } from '@mui/material'
import sampleImg from '../assets/logo_banner.png'
import logo from '../assets/companylogo_sample.png'
import Image from "mui-image"
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { useReactToPrint } from 'react-to-print'
import { RichTextDisplay } from "./RichText"
import fakedata from '../assets/test.json'
export default function CVManager({ user }) {
  const ref = useRef()
  const theme = createTheme()
  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: 'test',
    onAfterPrint: () => console.log("QA print")
  })
  const navigate = useNavigate()
  function navigateTo(location) {
    navigate(location)
  }
  useEffect(() => {
    if (user.user.role != "candidate") {
      navigateTo("/")
    }
  })

  return (
    <Grid
      container
      ref={ref}
      sx={{
        justifyContent: 'center',
        background: "#f1f2f7",
        pb:4
      }}
    >
      {/* Head */}
      <Grid xs={8}
        container
        component={Paper}
        sx={{
          rowGap: 3,
          justifyContent: 'center',
          p: 3
        }}
      >
        <Box>
          <Image
            src={sampleImg}
            width="1000px"
            height="300px"
            duration={0}
            fit="scale-down"
          />
        </Box>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: 2,
          }}
        >
          <Grid
            xs={2}
          >
            <Image
              src={logo}
              width="200px"
              height="200px"
              duration={0}
              fit="scale-down"
              sx={{
                borderRadius: '50%'
              }}
            />
          </Grid>
          <Grid
            xs={4}
          >
            <Typography variant="h4">Nguyễn Quốc Anh</Typography>
            <Typography variant="p">Web developer</Typography>
          </Grid>
          <Grid
            xs={3}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <SchoolIcon fontSize="large" />
              <Typography variant="h6" sx={{ ml: 1, fontWeight: 550 }}>Trường đại học Cần Thơ</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <WorkIcon fontSize="large" />
              <Typography variant="h6" sx={{ ml: 1, fontWeight: 550 }}>Chưa cập nhật công ty</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
      </Grid>
      {/* Hoc van */}
      <Grid
        xs={8}
        component={Paper}
        sx={{
          mt: 3,
          rowGap: 3,
          justifyContent: 'center',
          p: 3
        }}
      >
        <Typography variant="h6" fontWeight={550} >Học vấn</Typography>
        <RichTextDisplay data={fakedata}></RichTextDisplay>
      </Grid>
      {/* Muc tieu nghe nghiep */}
      <Grid
        xs={8}
        component={Paper}
        sx={{
          mt: 3,
          rowGap: 3,
          justifyContent: 'center',
          p: 3
        }}
      >
        <Typography variant="h6" fontWeight={550} >Mục tiêu nghề nghiệp</Typography>
        <RichTextDisplay data={fakedata}></RichTextDisplay>
      </Grid>
      {/* Hoat dong */}
      <Grid
        xs={8}
        component={Paper}
        sx={{
          mt: 3,
          rowGap: 3,
          justifyContent: 'center',
          p: 3
        }}
      >
        <Typography variant="h6" fontWeight={550} >Hoạt động</Typography>
        <RichTextDisplay data={fakedata}></RichTextDisplay>
      </Grid>
      {/* Chung chi */}
      <Grid
        xs={8}
        component={Paper}
        sx={{
          mt: 3,
          rowGap: 3,
          justifyContent: 'center',
          p: 3
        }}
      >
        <Typography variant="h6" fontWeight={550} >Chứng chỉ</Typography>
        <RichTextDisplay data={fakedata}></RichTextDisplay>
      </Grid>
    </Grid>

  )
}