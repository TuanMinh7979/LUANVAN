import Grid from '@mui/material/Grid'
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography, createTheme, Paper, Select, MenuItem, Button } from '@mui/material'
import useFetch from '../../hooks/useFetch'
export default function JobMn() {
  const theme = createTheme()
  const status = ["Mới", "Đã duyệt"]
  const {data, setData, loading} = useFetch("/jobpost")
  return (
    <>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
        >
          <TableContainer
            component={Paper}
          >
            <Table>
              <TableHead
                sx={{
                  background: theme.palette.primary.dark,
                }}
              >
                <TableRow sx={{ fontWeight: 600 }}>
                  <TableCell><Typography variant="body2" fontWeight={600} sx={{ color: "white" }}>Tên công việc</Typography></TableCell>
                  <TableCell><Typography variant="body2" fontWeight={600} sx={{ color: "white" }}>Tên công ty</Typography></TableCell>
                  <TableCell><Typography variant="body2" fontWeight={600} sx={{ color: "white" }}>Ngày hết hạn</Typography></TableCell>
                  <TableCell><Typography variant="body2" fontWeight={600} sx={{ color: "white" }}>Địa chỉ</Typography></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>TEST TEST ETSSTSytYTYTYTUY</TableCell>
                  <TableCell>TEST TEST ETSSTSytYTYTYTUY</TableCell>
                  <TableCell>TEST TEST ETSSTSytYTYTYTUY</TableCell>
                  <TableCell>TEST TEST ETSSTSytYTYTYTUY</TableCell> 
                  <TableCell sx={{minWidth: "150px"}}>
                    <Select
                      defaultValue={status[1]}
                      size="small"
                      onChange={(e) => handleStatusChange(e, 2)}
                    >
                      {status.map((item) => {
                        return (
                          <MenuItem value={item}>{item}</MenuItem>
                        )
                      })}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button variant="text" color="error">
                      Xóa
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}
