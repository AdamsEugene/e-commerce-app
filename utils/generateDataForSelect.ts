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
