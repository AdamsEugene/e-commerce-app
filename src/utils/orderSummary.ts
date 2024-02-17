type ORDER_SUMMARY = {
  name: string;
  amount: number;
  price: number;
};

const generateOrderSummaryData = (number: number): ORDER_SUMMARY[] => {
  const data: ORDER_SUMMARY[] = [];

  for (let i = 1; i <= number; i++) {
    data.push({
      name: `Product ${i}`,
      amount: Math.floor(Math.random() * 5) + 1,
      price: Math.random() * 50 + 10, // Generating a random price between 10 and 60
    });
  }

  return data;
};

export default generateOrderSummaryData;
