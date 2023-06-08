import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel } from 'victory';

const UserAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user/getUserAnalytics');
      const jsonData = response.data;
      setAnalyticsData(jsonData);
    } catch (error) {
      console.error('Error fetching user analytics:', error);
    }
  };

  return (
    <div>
      <h2>User Analytics</h2>
      {analyticsData ? (
        <VictoryChart
          domainPadding={{ x: 30 }}
          animate={{ duration: 500 }}
        >
          <VictoryAxis
            tickValues={['Student', 'Admin', 'Instructor']}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(tick) => tick}
          />
          <VictoryLabel
            text="User Count"
            x={225}
            y={30}
            textAnchor="middle"
          />
          <VictoryLine
            data={[
              { x: 'Student', y: analyticsData.studentCount },
              { x: 'Admin', y: analyticsData.adminCount },
              { x: 'Instructor', y: analyticsData.instructorCount },
            ]}
            style={{
              data: { stroke: 'blue' },
              labels: { fill: 'blue' },
            }}
          />
        </VictoryChart>
      ) : (
        <p>Loading user analytics...</p>
      )}
    </div>
  );
};

export default UserAnalytics;
