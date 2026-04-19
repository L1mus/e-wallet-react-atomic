const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchDashboardData = async () => {
  await delay(800);

  return {
    chartData: [
      { day: "Sat", value: 15000 },
      { day: "Sun", value: 5000 },
      { day: "Mon", value: 90000 },
      { day: "Tue", value: 30000 },
      { day: "Wed", value: 45000 },
      { day: "Thu", value: 25000 },
      { day: "Fri", value: 18000 },
    ],
  };
};
