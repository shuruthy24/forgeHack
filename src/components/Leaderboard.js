// src/components/Leaderboard.js
import React, { useState } from 'react';

const mockData = [
  { id: 1, name: 'Alice', points: 150 },
  { id: 2, name: 'Bob', points: 120 },
  { id: 3, name: 'Charlie', points: 100 },
  { id: 4, name: 'David', points: 80 },
  { id: 5, name: 'Eve', points: 60 },
];

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const thTdStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
};

const thStyle = {
  ...thTdStyle,
  backgroundColor: '#f2f2f2',
};

const leaderboardStyle = {
  margin: '20px',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const Leaderboard = () => {
  const [data, setData] = useState(mockData);

  return (
    <div style={leaderboardStyle}>
      <h2>Leaderboard</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Rank</th>
            <th style={thStyle}>User</th>
            <th style={thStyle}>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id}>
              <td style={thTdStyle}>{index + 1}</td>
              <td style={thTdStyle}>{user.name}</td>
              <td style={thTdStyle}>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;