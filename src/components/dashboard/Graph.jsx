import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: 'Jan',
    cleaner: 4000,
    user: 2400,
    
  },
  {
    date: 'Feb',
    cleaner: 3000,
    user: 1398,
    
  },
  {
    date: 'Mar',
    cleaner: 2000,
    user: 9800,
    
  },
  {
    date: 'Apr',
    cleaner: 2780,
    user: 3908,
    
  },
  {
    date: 'May',
    cleaner: 1890,
    user: 4800,
    
  },
  {
    date: 'Jun',
    cleaner: 2390,
    user: 3800,
    
  },
  {
    date: 'Jul',
    cleaner: 3490,
    user: 4300,
    
  },
  {
    date: 'Aug',
    cleaner: 2000,
    user: 9800,
    
  },
  {
    date: 'Sep',
    cleaner: 2780,
    user: 3908,
    
  },
  {
    date: 'Oct',
    cleaner: 1890,
    user: 4800,
    
  },
  {
    date: 'Nov',
    cleaner: 2390,
    user: 3800,
  },
  {
    date: 'Dec',
    cleaner: 3490,
    user: 4300,
    
  },
];


const Graph = () => {
    return (
        <ResponsiveContainer  width="100%" height="100%" style={{ backgroundColor: '#1c1c1c', borderRadius: "10px", padding: "8px" }}>
          <LineChart
            width={700}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            
          >
            {/* <YAxis /> */}
            <Legend />
            <Line type="monotone" dataKey="user" stroke="#c00000" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      );
}

export default Graph