import { Grid, Typography } from "@mui/material";
import CV1 from "./CV/CV1";
import fakedata from '../assets/fakedata.json'

export default function ManageCV() {
    console.log(JSON.parse(fakedata.aboutMeCV))
    return (<>
        <Grid
            container
            sx={{
                background: "#f1f2f7",
                p:3,
                columnGap: 4
            }}
        >
            <Grid
                item
                xs={6}>
                <CV1 data={fakedata} print={true}/>
            </Grid>
            <Grid
                xs={4}
                item
                sx={{
                    ml:15,
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