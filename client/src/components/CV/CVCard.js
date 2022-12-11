import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CVCard({ title, image }) {
    return (
        <Card
            sx={{
                boxShadow: "-10px 4px 10px 0px #0000002e",
                "&:hover":{
                    opacity: "0.6"
                }
                
            }}
        >
            <CardMedia
                component="img"
                height="190"
                image={image}
            />
        </Card>
    )
}