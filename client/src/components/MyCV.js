import { Grid, Typography } from "@mui/material";
import CV1 from "./CV/CV1";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
export default function MyCV({ user }) {

    const loggedUserId = user.user._id

    const { data, loading, error } = useFetch(`/candidate/${loggedUserId}/resume`);

    // useEffect(() => {
    //     async function getData() {
    //         let rs = await axios.get(`/candidate/${loggedUserId}/resume`);
    //         return rs;
    //     }
    //     getData().then((res) => {
    //         console.log(res)
    //     });
    // }, []
    // )

    return (<>
        {loading ? "Loading" :
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
                    <CV1 data={data.cv}  print={true} />
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
        }
    </>)
}