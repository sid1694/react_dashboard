import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';


export default function CardWidget({ title, total, icon }) {
    return (
        <Card
            component={Stack}
            spacing={3}
            direction="row"
            sx={{
                px: 3,
                py: 5,
                borderRadius: 5,
                height: 140
            }}
        >
            {icon}
            <Stack spacing={0.5}>
                <Typography variant="h4">{total}</Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>{title}</Typography>
            </Stack>
        </Card>
    );
}