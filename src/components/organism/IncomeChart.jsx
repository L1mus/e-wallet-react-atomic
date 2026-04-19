import { useState, useRef, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import cn from "../../utils/cn";

const IncomeChart = ({ data }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("7 Days");
  const [selectedType, setSelectedType] = useState("Income");
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  const chartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chartRef.current && !chartRef.current.contains(event.target)) {
        setIsPeriodOpen(false);
        setIsTypeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={chartRef}
      className="w-full bg-white sm:border sm:border-grey-light rounded-xl p-4 sm:p-6 shadow-sm flex flex-col"
    >
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-black text-base sm:text-lg">
          Income Chart
        </h3>
        <div className="flex gap-2">
          <div className="relative">
            <button
              onClick={() => {
                setIsPeriodOpen(!isPeriodOpen);
                setIsTypeOpen(false);
              }}
              className="flex items-center justify-between gap-2 bg-grey-light px-3 py-2 rounded-lg text-xs sm:text-sm font-medium w-24 sm:w-28 cursor-pointer"
            >
              {selectedPeriod}
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform",
                  isPeriodOpen && "rotate-180",
                )}
              />
            </button>
            {isPeriodOpen && (
              <div className="absolute top-full right-0 mt-1 w-full bg-white border border-grey-light rounded-lg shadow-xl z-20">
                {["7 Days", "30 Days"].map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setSelectedPeriod(opt);
                      setIsPeriodOpen(false);
                    }}
                    className="px-3 py-2 text-sm hover:bg-primary/10 cursor-pointer"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => {
                setIsTypeOpen(!isTypeOpen);
                setIsPeriodOpen(false);
              }}
              className="flex items-center justify-between gap-2 bg-grey-light px-3 py-2 rounded-lg text-xs sm:text-sm font-medium w-24 sm:w-28 cursor-pointer"
            >
              {selectedType}
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform",
                  isTypeOpen && "rotate-180",
                )}
              />
            </button>
            {isTypeOpen && (
              <div className="absolute top-full right-0 mt-1 w-full bg-white border border-grey-light rounded-lg shadow-xl z-20">
                {["Income", "Expense"].map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setSelectedType(opt);
                      setIsTypeOpen(false);
                    }}
                    className="px-3 py-2 text-sm hover:bg-primary/10 cursor-pointer"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-75 sm:h-87.5 md:h-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={40}
            margin={{ top: 10, right: 0, left: 0, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E8E8E8"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#808080" }}
              dy={15}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#808080" }}
              tickFormatter={(val) => (val >= 1000 ? `${val / 1000}k` : val)}
            />
            <Tooltip
              cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
              contentStyle={{ borderRadius: "8px", border: "none" }}
            />
            <Bar dataKey="value" fill="#2948FF" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeChart;
