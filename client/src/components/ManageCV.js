import { Grid, Typography } from "@mui/material";
import CV1 from "./CV/CV1";
import defaultCvData from '../assets/defaultCvData.json'
import { useSelector } from "react-redux";
import {Button} from "@mui/material";
export default function ManageCV({ user }) {

    const loggedUserId = user.user._id

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
                <CV1 data={defaultCvData}  print={true} />
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
            console.log(cvData)

            const res = await axios.post(`/candidate/${loggedUserId}/resume`, cvData)
            console.log("___________)()()()(")
            console.log(res)
            if (res.data.status && res.data.status != 200) {
                toast.warning("Tạo cv thất bại")
            } else {
                console.log(res)
                toast.success("Tạo cv thành công")
            }
        }} >SAVE</Button>
    </>)
}