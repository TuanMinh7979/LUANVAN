import Grid from '@mui/material/Grid'
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography, createTheme, Paper, Select, MenuItem, Button } from '@mui/material'
import useFetch from '../../hooks/useFetch'
import Loading from "../Loading"
import { useEffect, useState } from 'react'
export default function CandidateMn() {
    const theme = createTheme()
    const status = ["Mới", "Đã duyệt"]
    const [toggle, setToggle] = useState(true)
    const { data, setData, loading } = useFetch("/jobpost/all")
    const deleteItem = function (index) {
        data.splice(index, 1)
        let temp = data
        setData(temp)
        setToggle(!toggle)
        console.log(data)
    }
    return (
        <>
            <Grid container spacing={0}>
                <Grid
                    item
                    xs={12}
                >
                    {loading ? <Loading /> : <TableContainer
                        sx={{ maxHeight: 700 }}
                        component={Paper}
                    >
                        <Table >
                            <TableHead
                                sx={{
                                    background: theme.palette.primary.dark,
                                }}
                            >
                                <TableRow sx={{ fontWeight: 600 }}>
                                    <TableCell><Typography variant="body2" fontWeight={600} sx={{ color: "white" }}>Tên Ứng viên</Typography></TableCell>
                                    <TableCell><Typography variant="body2" fontWeight={600} sx={{ color: "white" }}>Chức Danh</Typography></TableCell>
                                    <TableCell><Typography variant="body2" fontWeight={600} sx={{ color: "white", minWidth: "150px" }}>Ngày sinh</Typography></TableCell>
                                    <TableCell><Typography variant="body2" fontWeight={600} sx={{ color: "white" }}>Địa chỉ</Typography></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((value, index) => (
                                    <TableRow>
                                        <TableCell>{value.title}</TableCell>
                                        <TableCell>{value.companyId.name}</TableCell>
                                        <TableCell>{new Date(value.endDate).toLocaleDateString()}</TableCell>
                                        <TableCell>{value.fullAddress}</TableCell>
                                        <TableCell>
                                            <Button variant="text" color="error" onClick={() => {
                                                deleteItem(index)
                                            }}>
                                                Xóa
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>}
                </Grid>
            </Grid>
        </>
    )
}
