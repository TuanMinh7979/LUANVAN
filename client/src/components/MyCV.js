import { Divider, Grid, Typography } from "@mui/material";
import CV1 from "./CV/CV1";
import CV2 from "./CV/CV2";
import CV3 from "./CV/CV3";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
export default function MyCV({ user }) {

    const loggedUserId = user.user._id

    const { data, loading, error } = useFetch(`/candidate/${loggedUserId}/resume`);
    

    return (<>
        {loading ? <Loading /> :
            <Grid
                container
                sx={{
                    background: "#f1f2f7",
                    p: 3,
                    columnGap: 4,
                    justifyContent: "center"
                }}
            >
                <Grid
                    item
                    xs={6}>
                    {data.cv.cvTemplate === "CV1" && <CV1 editable={false} data={data.cv} />}
                    {data.cv.cvTemplate == "CV2" && <CV2 editable={false} data={data.cv} />}
                    {data.cv.cvTemplate == "CV3" && <CV3 editable={false} data={data.cv} />}

                </Grid>
            </Grid>
        }
    </>)
}