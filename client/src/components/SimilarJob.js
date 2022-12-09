import { Container, Grid, Paper, Typography } from "@mui/material";
import JobCard from "./JobCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export default function SimilarJob({ jobPostId }) {
    const [jobRecs, setJobRecs] = useState([]);

    useEffect(() => {
        async function getData() {

            const sugListIdFetch = await axios.get(
                `http://localhost:8000/getSimilarJob/${jobPostId}`
            );


            let suglistIdData = sugListIdFetch.data.sugList;
            console.log(",,,", suglistIdData)
            suglistIdData = suglistIdData.reverse();
            const sugListDbData = await axios.post(
                "http://localhost:8800/api/recommend/getJobByListId",
                { suglistIdData }
            );


            setJobRecs(sugListDbData.data);
        }
        getData();
    }, []);
    return (<>
        <Container
            maxWidth
            sx={{
                mb: 3
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    p: 3
                }}>
                <Grid
                    container
                    sx={{
                        rowGap: 2
                    }}
                >
                    <Grid
                        item
                        xs={12}>
                        <Typography variant="h5" fontWeight="600" gutterBottom sx={{ ml: 3 }}>
                            Việc làm tương tự
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}>
                        {jobRecs.map((item) => {
                            return (
                                <Grid item xs={3}>
                                    <JobCard job={item} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    </>)
}