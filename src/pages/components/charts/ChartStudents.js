import React from 'react';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
} from "recharts";


const data = [
	{
		name: 'Jan', Applied: 22, Left: 20, amt: 25,
	},
	{
		name: 'Feb', Applied: 20, Left: 15, amt: 20,
	},
	{
		name: 'Mar', Applied: 30, Left: 25, amt: 20,
	},
	{
		name: 'Apr', Applied: 20, Left: 15, amt: 20,
	},
	{
		name: 'May', Applied: 15, Left: 10, amt: 20,
	},
	{
		name: 'Jun', Applied: 10, Left: 5, amt: 25,
	},
	{
		name: 'Jul', Applied: 20, Left: 15, amt: 20,
    },
    {
		name: 'Sep', Applied: 15, Left: 10, amt: 25,
	},
	{
		name: 'Oct', Applied: 22, Left: 15, amt: 20,
	},
	{
		name: 'Nov', Applied:15, Left: 5, amt: 20,
	},
	{
		name: 'Dec', Applied: 20, Left: 15, amt: 20,
	},
	
];






export default function ChartStudents() {
    return (
        <>
            <div style={{position: "absolute", }}>
                <Typography style={{marginTop: "30px",fontWeight:550}}> Students number change per month </Typography>
                <Divider color="lightgrey" width='900px' variant="fullWidth" style={{marginTop: "20px"}} />
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={data}
                margin={{
                    top: 30, right: 60, left: 0, bottom: 5,
                }}
            >
                <CartesianGrid 
                strokeDasharray="3 9" 
                vertical={false}
                horizontal={false}
                />
                <XAxis 
                dataKey="name"
                padding={{ left: 20, right: 20 }} 
                axisLine={false}
                tickLine={false}
                />
                <YAxis
                padding={{ bottom: 10, top: 50 }}
                axisLine={false}
                tickLine={false}
                />
                <Tooltip />
                <Legend 
                align='right'
                verticalAlign='top'
                iconSize={8}
                iconType='circle'
                />
                <Bar 
                dataKey="Applied"
                fill="#8884d8" 
                barSize={5}
                radius={20}
                />
                <Bar 
                dataKey="Left" 
                fill="#FF7A00" 
                barSize={5}
                radius={20}
                />
                </BarChart>
            </ResponsiveContainer>
        </>        
            )
        }
