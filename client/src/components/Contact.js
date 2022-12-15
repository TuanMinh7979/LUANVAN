import { Grid, Paper, Table, TableContainer, Typography, Box, TableHead, TableRow, TableCell, TableBody, Select, MenuItem, } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArticleIcon from "@mui/icons-material/Article";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { getValFromTitle, getTitleFromVal } from "./other/SelectDataUtils";
import { contactProcesses } from "../clientData/selectData";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export default function Contact() {
    // có thể lưu status dạng int là 0, 1, 2, mặc định là 0, xuống đây dựa dô cái mảng cvstatus dưới này mà lấy
    let [searchParams, setSearchParams] = useSearchParams();
    const user = useSelector((state) => state.user);

    function handleStatusChange(e, cvID) {
        console.log(e.target.value, cvID)
    }


    const [cvIdParam, setCvIdParam] = useState(searchParams.get('id'))

    const [data, setData] = useState([])
    // const { data, setData, loading, error } = useFetch(`/rec/${user.user._id}/allmycontacts`);

    // useEffect(() => {
    //     if (cvIdParam !== "") {
    //         console.log("______________right", cvIdParam, data)
    //         let temp = [...data];
    //         temp = temp.filter(item => {
    //             console.log("---", item._id)
    //             return item._id === cvIdParam
    //         })

    //         setData(temp)
    //     }
    // }, [cvIdParam]);


    useEffect(() => {
        async function getAllMyContact() {

            const allMyContact = await axios.get(
                `/rec/${user.user._id}/allmycontacts`
            );

            if (cvIdParam) {
                let temp = [...allMyContact.data];
                temp = temp.filter(item => {

                    return item._id === cvIdParam
                })

                setData(temp)
            } else {

                setData(allMyContact.data)
            }

        }
        getAllMyContact();

    }, [])
    console.log(data)
    return (
        <>{!data ? <Loading /> :
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
                            Quản lý ứng tuyển
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
                                            {item.candidateId.name}
                                        </TableCell>
                                        <TableCell>
                                            {item.candidateId.title}
                                        </TableCell>
                                        <TableCell >
                                            {item.jobPostId.title}
                                        </TableCell>
                                        <TableCell>
                                            <Select
                                                defaultValue={item.process}
                                                size="small"
                                                onChange={(e) => handleStatusChange(e, 1)}
                                            >
                                                {contactProcesses.map((el) => {
                                                    return (
                                                        <MenuItem value={el.val}>{el.title}</MenuItem>
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