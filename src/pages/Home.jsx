import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReportIcon from '@mui/icons-material/Report';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BarChartWidget from '../components/bar-chart-widget';
import CardWidget from '../components/card-widget';
import PieChartWidget from '../components/pie-chart-widget';

import TimelineWidget from '../components/timeline-widget';
import Updates from '../components/updates-widget';
import { error, info, secondary, success, warning } from '../theme/palette';

const total = 4
const disks = 4
export default function HomePage() {
    return (
        <Container maxwidth="xl">
            <Typography variant='h4' sx={{ mb: 5, mt: 5 }}>
                Hi, Welcome 👋
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardWidget
                        title="Users Active"
                        total={100}
                        icon={<PeopleAltIcon sx={{ color: info.dark }} style={{ fontSize: '64px' }} />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardWidget
                        title="Build Exports Delayed"
                        total={total}
                        icon={<SmsFailedIcon sx={{ color: total > 0 ? error.main : success.dark }} style={{ fontSize: '64px' }} />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardWidget
                        title="Manager Notifications"
                        total={80}
                        icon={<NotificationsIcon sx={{ color: secondary.dark }} style={{ fontSize: '64px' }} />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardWidget
                        title="Disks Threshold Exceeded"
                        total={disks}
                        icon={<ReportIcon sx={{ color: disks > 0 ? warning.dark : success.dark }} style={{ fontSize: '64px' }} />}
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <Updates
                        title="Exports"
                        subheader="(x) total build exports"
                        list={
                            [
                                {
                                    id: 1,
                                    title: "Export1",
                                    description: 'export_label1 is exported at /path/1',
                                    datetime: "2024-07-17 09:02:17"
                                },
                                {
                                    id: 2,
                                    title: "Export2",
                                    description: 'export_label2 is exported at /path/2',
                                    datetime: "2024-07-17 09:03:28"
                                },
                                {
                                    id: 3,
                                    title: "Export3",
                                    description: 'export_label3 is exported at /path/3',
                                    datetime: "2024-07-17 09:04:40"
                                },
                                {
                                    id: 4,
                                    title: "Export4",
                                    description: 'export_label4 is exported at /path/4',
                                    datetime: "2024-07-30 23:30:28"
                                },
                                {
                                    id: 5,
                                    title: "Export5",
                                    description: 'export_label5 is exported at /path/5',
                                    datetime: "2024-07-17 09:02:17"
                                },
                            ]
                        }
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <PieChartWidget
                        type="padded"
                        title="Jenkins"
                        subheader="(y) total projects"
                        data={[
                            { label: 'Success', value: 100 },
                            { label: 'Failed', value: 4 },
                            { label: 'In-Progress', value: 5 },
                        ]
                        }
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    {/* Display notification types proportions (PieChartWithCustomizedLabel) */}
                    <PieChartWidget
                        type="customizedLabel"
                        title="Notifications"
                        subheader="+(50) alerts overall"
                        data={[
                            { label: 'User Access', value: 10 },
                            { label: 'Disk Space', value: 10 },
                            { label: 'Disk Quota', value: 30 },
                        ]
                        } />
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <BarChartWidget
                        title="Disk Usage"
                        subheader={disks > 0 ? `(${disks} disks) exceeding threshold` : 'All disks within threshold'}
                        data={[
                            { disk: '/grid/cva/dhsk/abc', disk_usage: 80 },
                            { disk: '/def', disk_usage: 27 },
                            { disk: '/ghi', disk_usage: 70 },
                            { disk: '/ijk', disk_usage: 100 },
                            { disk: '/jkl', disk_usage: 30 },
                            { disk: '/lmn', disk_usage: 90 },
                            { disk: '/mno', disk_usage: 90 },
                            { disk: '/opq', disk_usage: 50 },
                            { disk: '/pqr', disk_usage: 30 },
                            { disk: '/rst', disk_usage: 60 },
                            { disk: '/tuv', disk_usage: 89 }
                        ]}
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    {/* Display Jenkins build failures for each project */}
                    <Updates
                        title="Jenkins Build Failures"
                        subheader="(x) total failures"
                        list={
                            [
                                {
                                    id: 1,
                                    title: "Build1",
                                    description: 'Build got triggered by an SCM change and last passed build number is 809',
                                    datetime: "2024-07-31T11:57:10.000Z"
                                },
                                {
                                    id: 2,
                                    title: "Build 2",
                                    description: 'Build got triggered by user x and last passed build number is 5477',
                                    datetime: "2024-07-28T18:50:09.000Z"
                                },
                                {
                                    id: 3,
                                    title: "Build3",
                                    description: 'Build got triggered by an SCM change and last passed build number is 102',
                                    datetime: "2024-07-17 09:02:17"
                                },
                                {
                                    id: 4,
                                    title: "Build4",
                                    description: 'Build got triggered by an SCM change and last passed build number is 198',
                                    datetime: "2024-07-17 09:03:28"
                                },
                                {
                                    id: 5,
                                    title: "Build5",
                                    description: 'Build got triggered by user y and last passed build number is 90',
                                    datetime: "2024-07-17 09:02:17"
                                },
                            ]
                        }
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    {/* Display timeline for disk usage alerts with severity levels and timestamps */}
                    <TimelineWidget
                        title="Notifications Timeline"
                        list={[
                            { id: 1, type: "item1", title: "User access alert for example user1", time: "2024-02-22 00:00:00" },
                            { id: 2, type: "item2", title: "User access alert for example user2", time: "2024-07-23 10:20:10" },
                            { id: 3, type: "item3", title: "{Severity} disk usage alert for example disk", time: "2024-08-01 12:22:00" },
                            { id: 4, type: "item4", title: "Disk quota alert for example work-disk", time: "2024-02-22 00:00:00" },
                            { id: 5, type: "item5", title: "{Severity} disk usage alert for example disk7", time: "2024-02-22 00:00:00" },
                        ]}

                    />
                </Grid>

            </Grid>
        </Container>
    );
}