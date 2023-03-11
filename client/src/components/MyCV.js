import { Divider, Grid, Typography, Button } from "@mui/material";
import CV1 from "./CV/CV1";
import CV2 from "./CV/CV2";
import CV3 from "./CV/CV3";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
export default function MyCV() {
    const navigate = useNavigate()
    const id = location.pathname.split("/")[2]

    const { data, loading, error } = useFetch(`/candidate/${id}/resume`);
    const [print, setPrint] = useState(false);
    console.log(data)
    return (<>
        {loading ? <Loading /> :
            data && data.cv ? <Grid
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
                    {data.cv.cvTemplate === "CV1" && <CV1 editable={false} print={print} setPrint={setPrint} data={data.cv} />}
                    {data.cv.cvTemplate == "CV2" && <CV2 editable={false} print={print} setPrint={setPrint} data={data.cv} />}
                    {data.cv.cvTemplate == "CV3" && <CV3 editable={false} print={print} setPrint={setPrint} data={data.cv} />}

                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{
                        alignSelf: "center",
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        mt: 4
                    }}
                >
                    <Button variant="contained" color="error" onClick={() => { navigate(-1) }}>
                        Trở lại
                    </Button>
                    <Button variant="contained" color="success" onClick={() => setPrint(true)}>
                        Xuất CV
                    </Button>
                </Grid>
            </Grid> : "Chua co cv"


        }
    </>)
}