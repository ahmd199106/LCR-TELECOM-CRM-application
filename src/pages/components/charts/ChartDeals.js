import React from 'react';
import { Typography,Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import {
    ResponsiveContainer,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Area
} from "recharts";
import MenuDealsChart from '../chartmenus/MenuDealsChart';


const data = [
	{
		name: '1 Dec', 'Closed Deals': 50, Left: 20, amt: 25,
	},
	{
		name: '', 'Closed Deals': 100, Left: 10, amt: 20,
	},
	{
		name: '8 Dec', 'Closed Deals': 150, Left: 15, amt: 20,
	},
	{
		name: '', 'Closed Deals': 75, Left: 15, amt: 20,
    },
    {
		name: '16 Dec', 'Closed Deals': 50, Left: 10, amt: 20,
    },
    {
		name: '', 'Closed Deals': 150, Left: 10, amt: 20,
    },
    {
		name: '31 Dec', 'Closed Deals': 170, Left: 10, amt: 20,
	},
];



export default function ChartDeals() {
    return (
        <>
            <div >
                <Grid container>
                    <Grid item xs={1}>
                    <Typography style={{marginLeft: "12px",fontWeight:550}}>Deals</Typography>
                    </Grid>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={3}>
                    <MenuDealsChart />
                    </Grid>
                </Grid>
                <Divider color="lightgrey" width='525px' variant="fullWidth" style={{marginBottom: "10px",marginTop: "10px"}} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart
                data={data}
                margin={{
                    top: 0, right: 0, left: 0, bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="dealsGradient" x1="0%" y1="0%" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A7F9F9" />
                        <stop offset="100%" stopColor="#FCFFFF" />
                    </linearGradient>
                </defs>
                <CartesianGrid 
                strokeDasharray="3 9" 
                vertical={false}
               horizontal={false}
                />
                <XAxis 
                dataKey="name"
                padding={{ left: 0, right: 0 }} 
                axisLine={false}
                tickLine={false}
                mirror
                />
                <YAxis
                tickMargin={25}
                padding={{ bottom: 20, top: 10 }}
                axisLine={false}
                tickLine={false}
                />
                <Tooltip />
                <Legend 
                align='left'
                verticalAlign='top'
                height={36}
                iconSize={8}
                iconType='circle'
                />
                <Area 
                type="basis"
                dataKey="Closed Deals"
                fill="url(#dealsGradient)" 
                barSize={5}
                radius={20}
                />
                </AreaChart>
            </ResponsiveContainer>
        </>        
            )
        }
