import { Grid, Typography } from "@mui/material";
import CV1 from "./CV/CV1";
import fakedata from '../assets/fakedata.json'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
export default function ManageCV({ user }) {
    const navigate = useNavigate()
    const navigateTo = function (location) {
        navigate(location)
    }
    useEffect(()=>{
        if(user.user.role!="candidate"){
            navigateTo("/login")
        }
    })
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
                <CV1 data={fakedata} print={true} />
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
    </>)
}