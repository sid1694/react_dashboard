import { CardHeader, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { BarChart } from '@mui/x-charts/BarChart';
import { error, primary } from '../theme/palette';

const valueFormatter = (value) => `${value}%`;


export default function BarChartWidget({ title, subheader, data }) {
    const valuesArray = data.map((item) => item.disk_usage)
    const barColors = valuesArray.map((val) => {
        return val >= 90 ? error.main : primary.main
    })
    return (
        <Card sx={{ borderRadius: 5 }}>
            <CardHeader title={title} subheader={subheader} sx={{ paddingBottom: 0 }} />
            <Divider />
            <Box sx={{ mx: 3, mt: 0 }}>
                <BarChart
                    dataset={data}
                    yAxis={[{
                        scaleType: 'band', dataKey: 'disk', disableLine: true, disableTicks: true, categoryGapRatio: 0.3,
                    }]}
                    xAxis={[{
                        disableLine: true, disableTicks: true, colorMap: {
                            type: 'ordinal',
                            values: valuesArray,
                            colors: barColors
                        }
                    }]}
                    series={[{ dataKey: 'disk_usage', label: (location) => { if (location === 'tooltip') return 'Disk Usage' }, valueFormatter, }]}
                    layout="horizontal"
                    barLabel="value"
                    height={400}
                    borderRadius={10}
                    sx={{
                        [`.MuiBarLabel-root`]: {
                            fill: 'white',
                            fontSize: 14,
                        },
                    }}
                />
            </Box>
        </Card>
    )
}