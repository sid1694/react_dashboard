import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { fDateTime } from '../utils/format-time';

// ----------------------------------------------------------------------

export default function TimelineWidget({ title, subheader, list }) {
    return (
        <Card sx={{ borderRadius: 5 }}>
            <CardHeader title={title} subheader={subheader} sx={{ paddingBottom: 0 }} />

            <Timeline
                sx={{
                    m: 0,
                    p: 3,
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {list.map((item, index) => (
                    <Item key={item.id} item={item} lastTimeline={index === list.length - 1} />
                ))}
            </Timeline>
        </Card>
    );
}

// ----------------------------------------------------------------------

function Item({ item, lastTimeline }) {
    const { type, title, time } = item;
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot
                    color={
                        (type === 'item1' && 'primary') ||
                        (type === 'item2' && 'success') ||
                        (type === 'item3' && 'info') ||
                        (type === 'item4' && 'warning') ||
                        'error'
                    }
                />
                {lastTimeline ? null : <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
                <Typography variant="subtitle2">{title}</Typography>

                <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    {fDateTime(time)}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}
