import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import { fToNow } from '../utils/format-time';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';
import ErrorIcon from '@mui/icons-material/Error';

const getStatusIcon = (status) => {
    return status.toLowerCase().includes("export") ? <DescriptionIcon sx={{ color: 'common.black' }} /> : <ErrorIcon sx={{ color: 'warning.main' }} />
}

export default function Updates({ title, subheader, list }) {
    return (
        <Card sx={{ borderRadius: 5 }}>
            <CardHeader title={title} subheader={subheader} sx={{ paddingBottom: 0 }} />
            <Divider />

            <Stack spacing={3} sx={{ p: 3, pr: 0 }} >
                {list.map((update) => (
                    <UpdateItem key={update.id} update={update} />
                ))}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Box sx={{ p: 2, textAlign: 'right' }}>
                <Button
                    size="small"
                    color="inherit"
                    endIcon={<ChevronRightIcon />}
                >
                    View all
                </Button>
            </Box>
        </Card>
    );
}

function UpdateItem({ update }) {
    const { title, description, datetime } = update
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton edge='start' disabled>
                {getStatusIcon(description)}
            </IconButton>

            <Box sx={{ minWidth: 240, flexGrow: 1 }}>
                <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
                    {title}
                </Link>

                <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    {description}
                </Typography>
            </Box>

            <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
                {fToNow(datetime)}
            </Typography>
        </Stack>
    );
}