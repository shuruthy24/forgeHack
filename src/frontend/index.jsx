import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { DynamicTable, Link, LineChart } from "@forge/react";

///////////////// GRAPH /////////////////////
const objectData = [
  {
    xAxis: 'January', // x value
    value: 1000, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'Feburary', // x value
    value: 1020, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'March', // x value
    value: 2907, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'April', // x value
    value: 3000, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'May', // x value
    value: 4000, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'June', // x value
    value: 5402, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'July', // x value
    value: 6030, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'August', // x value
    value: 6792, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'September', // x value
    value: 8002, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'October', // x value
    value: 9021, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'November', // x value
    value: 10020, // y value
    person: 'Shuruthy', // color value
  },
  {
    xAxis: 'December', // x value
    value: 13000, // y value
    person: 'Shuruthy', // color value
  },

  {
    xAxis: 'January', // x value
    value: 10, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'Feburary', // x value
    value: 20, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'March', // x value
    value: 30, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'April', // x value
    value: 40, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'May', // x value
    value: 50, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'June', // x value
    value: 800, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'July', // x value
    value: 1030, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'August', // x value
    value: 3000, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'September', // x value
    value: 4000, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'October', // x value
    value: 5000, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'November', // x value
    value: 5302, // y value
    person: 'Thomas', // color value
  },
  {
    xAxis: 'December', // x value
    value: 10000, // y value
    person: 'Thomas', // color value
  },

  {
    xAxis: 'January', // x value
    value: 1000, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'Feburary', // x value
    value: 1020, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'March', // x value
    value: 2907, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'April', // x value
    value: 4000, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'May', // x value
    value: 4400, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'June', // x value
    value: 5902, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'July', // x value
    value: 7000, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'August', // x value
    value: 7809, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'September', // x value
    value: 8002, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'October', // x value
    value: 9001, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'November', // x value
    value: 9020, // y value
    person: 'Sophia', // color value
  },
  {
    xAxis: 'December', // x value
    value: 10000, // y value
    person: 'Sophia', // color value
  },

  {
    xAxis: 'January', // x value
    value: 3000, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'Feburary', // x value
    value: 4030, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'March', // x value
    value: 5400, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'April', // x value
    value: 6590, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'May', // x value
    value: 7839, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'June', // x value
    value: 8920, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'July', // x value
    value: 9083, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'August', // x value
    value: 10000, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'September', // x value
    value: 12000, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'October', // x value
    value: 13020, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'November', // x value
    value: 14038, // y value
    person: 'Kaira', // color value
  },
  {
    xAxis: 'December', // x value
    value: 15302, // y value
    person: 'Kaira', // color value
  },

  {
    xAxis: 'January', // x value
    value: 0, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'Feburary', // x value
    value: 687, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'March', // x value
    value: 983, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'April', // x value
    value: 1920, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'May', // x value
    value: 2009, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'June', // x value
    value: 2809, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'July', // x value
    value: 4302, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'August', // x value
    value: 5489, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'September', // x value
    value: 6980, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'October', // x value
    value: 7082, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'November', // x value
    value: 7394, // y value
    person: 'Trisha', // color value
  },
  {
    xAxis: 'December', // x value
    value: 7589, // y value
    person: 'Trisha', // color value
  },
];

export const LineChartWithObjectDataExample = () => {
  return <LineChart 
    data={objectData} 
    xAccessor={'xAxis'} 
    yAccessor={'value'} 
    colorAccessor={'person'}
  />;
}


///////////////// PUBLIC LEADERBOARD /////////////////////

const createKey = (input) => {
  return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
}

export const Atlassians = [
  {
    id: 1,
    name: "Jemma Swaak",
    role: "Product Manager",
    score: 1000,
  },
  {
    id: 2,
    name: "Melissa Paisley",
    role: "Developer Advocate",
    score: 1020,
  },
  {
    id: 3,
    name: "Lara Holmes",
    role: "Recruiter",
    score: 2907,
  },
  {
    id: 4,
    name: "Scott Farquhar",
    role: "CEO",
    score: 3000,
  },
  {
    id: 5,
    name: "Violet Murphey",
    role: "Software Engineer",
    score: 987,
  },
  {
    id: 6,
    name: "Mike Cannon-Brookes",
    role: "CEO",
    score: 1900,
  },
  {
    id: 7,
    name: "Shuruthy Dhushiyandan",
    role: "Intern",
    score: 1590,
  },
  {
    id: 8,
    name: "Kaira Dumasia",
    role: "Intern",
    score: 1378,
  },
  {
    id: 9,
    name: "Thomas Jefferson",
    role: "Intern",
    score: 930,
  },
  {
    id: 10,
    name: "Sophia Wiggins",
    role: "Intern",
    score: 1999,
  },
  {
    id: 11,
    name: "Trisha Chari",
    role: "Intern",
    score: 199,
  },
];

// applied as rows in the form
export const rows = Atlassians.map((Atlassian, index) => ({
  key: `row-${index}-${Atlassian.name}`,
  cells: [
    {
      key: createKey(Atlassian.name),
      content: <Link href="">{Atlassian.name}</Link>,
    },
    {
      key: createKey(Atlassian.role),
      content: Atlassian.role,
    },
    {
      key: Atlassian.score,
      content: Atlassian.score,
    },
  ],
}));

export const head = {
  cells: [
    {
      key: "name",
      content: "Name",
      isSortable: true,
    },
    {
      key: "role",
      content: "Role",
      shouldTruncate: true,
      isSortable: true,
    },
    {
      key: "score",
      content: "Score",
      shouldTruncate: true,
      isSortable: true,
    },
  ],
};


///////////////// PERSONAL LEADERBOARD /////////////////////

const createKey2 = (input) => {
  return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
}

export const Jemma_Swaak = [
  {
    id: 1,
    name: "",
    month: "January",
    score: 1300,
    hours: 10,
    donations: 30,
  },
  {
    id: 2,
    name: "",
    month: "February",
    score: 2000,
    hours: 4,
    donations: 30,
  },
  {
    id: 3,
    name: "",
    month: "March",
    score: 4100,
    hours: 18,
    donations: 30,
  },
  {
    id: 4,
    name: "",
    month: "April",
    score: 5000,
    hours: 6,
    donations: 30,

  },
  {
    id: 5,
    name: "",
    month: "May",
    score: 5600,
    hours: 4,
    donations: 20,

  },
  {
    id: 6,
    name: "",
    month: "June",
    score: 6000,
    hours: 2,
    donations: 20,

  },
  {
    id: 7,
    name: "",
    month: "July",
    score: 6600,
    hours: 4,
    donations: 20,

  },
  {
    id: 8,
    name: "",
    month: "August",
    score: 6792,
    hours: 1,
    donations: 20,

  },
  {
    id: 8,
    name: "",
    month: "September",
    score: 6900,
    hours: 4,
    donations: 20,

  },
  {
    id: 10,
    name: "",
    month: "October",
    score: 9000,
    hours: 11,
    donations: 100,

  },
  {
    id: 11,
    name: "",
    month: "November",
    score: 10310,
    hours: 13,
    donations: 1,

  },
  {
  id: 12,
  name: "",
  month: "December",
  score: 12810,
  hours: 5,
  donations: 200
  },
];

// applied as rows in the form
export const rows2 = Jemma_Swaak.map((Jemma, index) => ({
  key: `row-${index}-${Jemma.name}`,
  cells: [
    {
      key: createKey2(Jemma.month),
      content: Jemma.month,
    },
    {
      key: Jemma.score,
      content: Jemma.score,
    },
    {
      key: Jemma.hours,
      content: Jemma.hours,
    },
    {
      key: Jemma.donations,
      content: Jemma.donations,
    },
  ],
}));

export const head2 = {
  cells: [
    {
      key: "month",
      content: "Month",
      isSortable: true,
    },
    {
      key: "score",
      content: "Score",
      shouldTruncate: true,
      isSortable: true,
    },
    {
      key: "hours",
      content: "Hours",
      shouldTruncate: true,
      isSortable: true,
    },
    {
      key: "donations",
      content: "Donations$$$",
      shouldTruncate: true,
      isSortable: true,
    },
  ],
};


///////////////// APP LAYOUT /////////////////////

const App = () => {

  return (
    <>
    <Text>Atlassian Sydney Leaderboard</Text>
      <DynamicTable
      head={head}
      rows={rows}
      defaultSortKey="score"
      defaultSortOrder="DESC"
    />
    <Text>Jemma Swaak's Monthly Scores</Text>
      <DynamicTable
        head={head2}
        rows={rows2}
        defaultSortKey="month"
        defaultSortOrder="ASC"
      />
      <Text>LockedIn's Monthly Graph</Text>
      <LineChartWithObjectDataExample
      />
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
