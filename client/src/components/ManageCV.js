import { Grid } from "@mui/material";
import CV1 from "./CV/CV1";


export default function ManageCV() {
    return (<>
        <Grid
            container
            sx={{
                background: "#f1f2f7",
                p:3
            }}
        >
            <Grid
                item
                xs={6}>
                <CV1 print={true}/>
            </Grid>
        </Grid>
    </>)
}