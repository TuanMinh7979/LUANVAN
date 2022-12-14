import { Grid, Paper, Table, TableContainer, Typography, Box, TableHead, TableRow, TableCell, TableBody, Select, MenuItem, } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArticleIcon from "@mui/icons-material/Article";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import { useSelector } from "react-redux";
export default function CandidateCVs() {
    // có thể lưu status dạng int là 0, 1, 2, mặc định là 0, xuống đây dựa dô cái mảng cvstatus dưới này mà lấy

    const user = useSelector((state) => state.user);
    const cvstatus = ["Chưa xem", "Không phù hợp", "Phù hợp"]

    function handleStatusChange(e, cvID) {
        console.log(e.target.value, cvID)
    }
    const resumeId = location.pathname.split("/")[location.pathname.split("/").length - 1];
    if (resumeId) {
        console.log("abc")
    }

    const { data, setData, loading, error } = useFetch(`/rec/${user.user._id}/allappliedcandidates`);
    
    console.log(data, error)
    return (
        <>{loading ? <Loading /> :
            <Grid
                width={"95%"}
                container
                sx={{ m: 3 }}
            >
                <Grid
                    item
                    xs={12}>
                    <Box
                        sx={{
                            p: 2,
                            borderBottom: "1px solid rgba(0,0,0,0.1)",
                            display: "flex",
                            alignItems: "center",
                            background: "#fff",
                        }}
                    >
                        <ArticleIcon />
                        <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
                            Quản lý CV ứng viên
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{ mt: 2 }}
                >
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Tên ứng viên
                                    </TableCell>
                                    <TableCell>
                                        Chức danh
                                    </TableCell>
                                    <TableCell>
                                        Công việc ứng tuyển
                                    </TableCell>
                                    <TableCell sx={{ width: "20%" }}>
                                        Trạng thái
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            {/* Map CV ra, truyền trạng thái dô default chỗ select cho nó hiện ra, hàm handleStatusChange này truyền vào ID của cv để đổi trạng thái */}
                            <TableBody>
                                {data.map(item => {
                                    return (<TableRow>
                                        <TableCell>
                                            Nguyễn Quốc Anh
                                        </TableCell>
                                        <TableCell>
                                            Lập trình viên
                                        </TableCell>
                                        <TableCell >
                                            Fresher .Net
                                        </TableCell>
                                        <TableCell>
                                            <Select
                                                defaultValue={cvstatus[0]}
                                                size="small"
                                                onChange={(e) => handleStatusChange(e, 1)}
                                            >
                                                {cvstatus.map((item) => {
                                                    return (
                                                        <MenuItem value={item}>{item}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </TableCell>
                                    </TableRow>)
                                })}


                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>}
        </>

    )
}