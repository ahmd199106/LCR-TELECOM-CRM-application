

import React from 'react';
import { Typography,Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import {
    PieChart, Pie, Sector, Cell, ResponsiveContainer,Legend
  } from 'recharts';
  import MenuTasksChart from '../chartmenus/MenuTasksChart';

const data = [
	{ name: 'Completed', value: 60 },
	{ name: 'Ended', value: 10 },
	{ name: 'Active', value: 30 },
	
];
const COLORS = ['#2ED47A', '#F7685B', '#FFB946'];

export default function ChartTasks() {
	
		return (
            <>
            <div>
                <Grid container>
                    <Grid item xs={1}>
                    <Typography style={{marginLeft: "12px",fontWeight:550}}>Tasks</Typography>
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={4}>
                    <MenuTasksChart />
                    </Grid>
                </Grid>
                <Divider color="lightgrey" width='525px' variant="fullWidth" style={{marginBottom: "10px",marginTop: "10px"}} />
            </div>
            <ResponsiveContainer height="100%" width="100%">
                    <PieChart 
                    margin={{top: -70,}}
                    >
                    
                        <Legend 
                            layout="vertical"
                            align='right'
                            verticalAlign='middle'
                            iconSize={8}
                            iconType='circle'
                            wrapperStyle={{position:'absolute',top:'25%',left:"60%",lineHeight:"2.5"}}
                            />
                        <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={100}
                            outerRadius={110}
                            fill="#8884d8"
                            paddingAngle={0}
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                    </PieChart>
               </ResponsiveContainer>
               <Typography style={{fontSize:50,color:'#2ED47A',position:"relative",top:-200,left:"15%",}} >
                   60%
               </Typography>
            </>        
            )
        }