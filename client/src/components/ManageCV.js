import { Grid, Typography } from "@mui/material";
import CV1 from "./CV/CV1";
import defaultCvData from '../assets/defaultCvData.json'

import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { useSelector } from "react-redux";
export default function ManageCV({ user }) {

    const loggedUserId = user.user._id
    const [cvData, setCVDATA] = useState(defaultCvData)
    return (<>
        <Grid
            container
            sx={{
                background: "#f1f2f7",
                p: 3,
                columnGap: 4
            }}
        >
            <Grid
                item
                xs={6}>
                <CV1 data={cvData} print={true} setCVDATA={setCVDATA} />
            </Grid>
            <Grid
                xs={4}
                item
                sx={{
                    ml: 15,
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Typography variant="h4" color="initial">Hướng dẫn viết CV hiệu quả</Typography>
            </Grid>


        </Grid>
        <Button sx={{ marginLeft: "300px" }} onClick={async () => {


            const res = await axios.post(`/candidate/${loggedUserId}/resume`, cvData)


            if (res.data.status && res.data.status != 200) {
                toast.warning("Tạo cv thất bại")
            } else {
                console.log(res)
                toast.success("Tạo cv thành công")
            }
        }} >SAVE</Button>
    </>)
}