import { Box, TextField, Typography } from "@mui/material";

export default function Login(){
    return (
        <Box>
            <Typography>Admin Login</Typography>
            <Box>
                <TextField
                    label="Username"
                />
                <TextField
                    label="Password"
                />
            </Box>
        </Box>
    )
}