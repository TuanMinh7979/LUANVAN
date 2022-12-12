import { Container, LinearProgress, Box } from "@mui/material";


export default function Loading() {
    return (
        <Box
            sx={{
                mt: 2,
                width: "100%"
            }}>
            <LinearProgress color="success"></LinearProgress>
        </Box>
    )
}