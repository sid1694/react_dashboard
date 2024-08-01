import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { styled } from '@mui/material/styles';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { error, info, primary, success, warning } from '../theme/palette';


const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

export default function PieChartWidget({ type, title, subheader, data }) {

    let palette = [];
    let paddingAngle;
    let outerRadius;
    let innerRadius;

    if (type === 'padded') {
        palette = [success.main, error.main, primary.main];
        paddingAngle = 7;
        outerRadius = '60%';
        innerRadius = '80%'
    }
    if (type === 'customizedLabel') {
        palette = [info.main, warning.main, primary.main];
        paddingAngle = 5;
        outerRadius = 130;
        innerRadius = 0;
    }

    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
    const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
    };

    function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left + width / 2} y={top + height / 2}>
                {children}
            </StyledText>
        );
    }
    return (
        <Card sx={{ borderRadius: 5, }}>
            <CardHeader title={title} subheader={subheader} sx={{ paddingBottom: 0 }} />
            <Divider />
            <PieChart
                colors={palette}
                series={[
                    {
                        paddingAngle: paddingAngle,
                        outerRadius: outerRadius,
                        innerRadius: innerRadius,
                        data,
                        highlightScope: { fade: 'global', highlight: 'item' },
                        faded: { opacity: 0.3 },
                        highlighted: { opacity: 1 },
                        arcLabel: getArcLabel,
                    },
                ]}
                height={400}
                slotProps={{
                    legend: {
                        direction: 'row',
                        position: { vertical: 'bottom' },
                        labelStyle: {
                            fontSize: 12
                        },
                    }
                }}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'white',
                        fontSize: 14,
                    },
                }}
            >
                {type === 'padded' && (<PieCenterLabel>{`(${TOTAL}) Total Builds`}</PieCenterLabel>)}
            </PieChart>
        </Card>
    );
}


