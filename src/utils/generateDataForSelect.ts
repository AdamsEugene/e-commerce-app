const generateData = (
  number: number
): { key: string; value: string; label: string }[] => {
  const data = [];

  for (let i = 1; i <= number; i++) {
    const key = `key${i}`;
    const value = `value${i}`;
    const label = `Label ${i}`;

    data.push({ key, value, label });
  }

  return data;
};

export default generateData;

export const chartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 8000,
    pv: 1398,
    amt: 3210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 8000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 4500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

type ChartData = (typeof chartData)[0];

export function filterNameUVandPV(
  data: ChartData[]
): { name: string; uv: number; pv: number }[] {
  return data.map(({ name, uv, pv }) => ({ name, uv, pv }));
}

// Function to return an array of objects with only 'name' and 'uv' properties
export function filterNameAndUV(
  data: ChartData[]
): { name: string; uv: number }[] {
  return data.map(({ name, uv }) => ({ name, uv }));
}
