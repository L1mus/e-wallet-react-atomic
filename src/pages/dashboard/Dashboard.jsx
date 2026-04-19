import { useEffect, useState } from "react";
import CardBalance from "../../components/organism/CardBalance";
import IncomeChart from "../../components/organism/IncomeChart";
import CardHistory from "../../components/organism/CardHistory";
import Button from "../../components/atoms/Button";
import IconTransfer from "../../assets/icons/Send.svg?react";
import IconTopUp from "../../assets/icons/Upload.svg?react";
import { fetchDashboardData } from "../../services/apiMock";
import Balance from "../../assets/icons/balance.svg?react";
import MoneyWithdraw from "../../assets/icons/u_money-withdraw.svg?react";
import ArrowGrowth from "../../assets/icons/ArrowRise-s.svg?react";

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const mockTransactions = [
    {
      id: 1,
      name: "Robert Fox",
      status: "Transfer",
      imageSrc: "https://i.pravatar.cc/150?u=u2",
      amount: "+Rp50.000",
      type: "income",
    },
    {
      id: 2,
      name: "Floyd Miles",
      status: "Send",
      imageSrc: "https://i.pravatar.cc/150?u=u3",
      amount: "-Rp50.000",
      type: "expense",
    },
    {
      id: 3,
      name: "Ujang",
      status: "Send",
      imageSrc: "https://i.pravatar.cc/150?u=u4",
      amount: "-Rp50.000",
      type: "expense",
    },
    {
      id: 4,
      name: "Raulemons",
      status: "Transfer",
      imageSrc: "https://i.pravatar.cc/150?u=u5",
      amount: "+Rp50.000",
      type: "income",
    },
    {
      id: 5,
      name: "Reiva",
      status: "Transfer",
      imageSrc: "https://i.pravatar.cc/150?u=u6",
      amount: "+Rp50.000",
      type: "income",
    },
    {
      id: 6,
      name: "Thobie",
      status: "Send",
      imageSrc: "https://i.pravatar.cc/150?u=u7",
      amount: "-Rp50.000",
      type: "expense",
    },
  ];

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const response = await fetchDashboardData();
      setChartData(response.chartData);
      setIsLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pb-10">
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6 lg:gap-8 min-w-0">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <CardBalance
              title="Balance"
              balance="120.000"
              children={<Balance className={"w-6 h-6"} />}
              Icon={ArrowGrowth}
              iconStyle={"text-success"}
              growthIndicators="+2%"
              growthPeriod="3 Days Ago"
            ></CardBalance>
            <CardBalance
              title="Income"
              balance="2.120.000"
              children={<MoneyWithdraw className={"w-6 h-6"} />}
              Icon={ArrowGrowth}
              iconStyle={" text-success"}
              growthIndicators="+11.01%"
              growthPeriod="Today"
            ></CardBalance>
            <CardBalance
              title="Expense"
              balance="200.000"
              children={<MoneyWithdraw className={"rotate-180 w-6 h-6"} />}
              Icon={ArrowGrowth}
              iconStyle={"rotate-180 text-danger"}
              growthIndicators="-5.06%"
              growthPeriod="Today"
            ></CardBalance>
          </div>

          <div className="flex sm:flex-row justify-between items-center gap-4 sm:border sm:border-grey-light sm:rounded-xl sm:p-4 sm:px-6 sm:bg-white sm:shadow-sm">
            <h3 className="hidden sm:block font-bold text-black text-lg">
              Fast Service
            </h3>
            <div className="flex gap-3 w-full sm:w-auto">
              <Button
                variant="rectangelBlue"
                isHaveIcon={true}
                Icon={IconTopUp}
                iconClassName={"w-6 h-6"}
                className="flex-1 sm:flex-none h-11 px-4 sm:px-6 text-xs sm:text-sm whitespace-nowrap"
              >
                Top Up
              </Button>
              <Button
                variant="rectangelBlue"
                isHaveIcon={true}
                Icon={IconTransfer}
                iconClassName={"w-6 h-6"}
                className="flex-1 sm:flex-none h-11 px-4 sm:px-6 text-xs sm:text-sm whitespace-nowrap"
              >
                Transfer
              </Button>
            </div>
          </div>

          <div className="w-full">
            {isLoading ? (
              <div className="w-full h-87.5 sm:h-100 bg-white rounded-xl flex items-center justify-center border border-grey-light shadow-sm">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <IncomeChart data={chartData} />
            )}
          </div>
        </div>

        <div className="lg:col-span-4 xl:col-span-3 bg-white border border-grey-light rounded-xl p-5 shadow-sm flex flex-col h-screen">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-black text-sm">
              Transaction History
            </h3>
            <button className="text-primary text-xs xl:text-sm font-medium hover:underline cursor-pointer whitespace-nowrap">
              See All
            </button>
          </div>

          <div
            className="flex flex-col gap-5 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-gray-50
  [&::-webkit-scrollbar-thumb]:rounded-full
  hover:[&::-webkit-scrollbar-thumb]:bg-gray-300"
          >
            {mockTransactions.map((tx) => (
              <CardHistory
                key={tx.id}
                name={tx.name}
                status={tx.status}
                imageSrc={tx.imageSrc}
                amount={
                  <span
                    className={
                      tx.type === "income" ? "text-success" : "text-danger"
                    }
                  >
                    {tx.amount}
                  </span>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
