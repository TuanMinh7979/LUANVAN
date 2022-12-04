import { Grid, Typography } from "@mui/material";
import CV1 from "./CV/CV1";
import defaultCvData from '../assets/defaultCvData.json'
import { useSelector } from "react-redux";
export default function ManageCV({ user }) {

  
    console.log(JSON.parse(defaultCvData.aboutMeCV))
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
                <CV1 data={defaultCvData} loggedUserId={user.user._id} print={true} />
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