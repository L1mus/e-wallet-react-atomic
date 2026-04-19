import { useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { Search, Star, Send } from "lucide-react";
import Table from "../../components/organism/Table";
import TableContent from "../../components/molecules/TableContent";
import Avatar from "../../components/atoms/Avatar";
import Stepper from "../../components/molecules/Stepper";

const Transfer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const navigate = useNavigate();

  const peopleData = [
    {
      id: 1,
      name: "Ghaluh 1",
      phone: "(239) 555-0108",
      avatar: "https://i.pravatar.cc/150?u=1",
      isVerified: true,
    },
    {
      id: 2,
      name: "Albert Flores",
      phone: "(480) 555-0103",
      avatar: "https://i.pravatar.cc/150?u=2",
      isVerified: false,
    },
    {
      id: 3,
      name: "Bessie Cooper",
      phone: "(225) 555-0118",
      avatar: "https://i.pravatar.cc/150?u=3",
      isVerified: true,
    },
  ];

  const filteredData = useMemo(() => {
    return peopleData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.includes(searchQuery),
    );
  }, [searchQuery]);

  const handleUserSelect = (user) => {
    navigate(`/dashboard/transfer/${user.id}`, { state: { user } });
  };

  return (
    <div className="w-full pb-10">
      <div className="mb-6">
        <div className="hidden md:flex items-center gap-2 mb-6 text-primary">
          <Send size={24} />
          <h1 className="text-xl font-bold text-black">Transfer Money</h1>
        </div>
        <div>
          <Stepper
            steps={["Find People", "Set Nominal", "Finish"]}
            activeStep={0}
          />
        </div>
      </div>

      <div className="w-full bg-white md:border md:border-grey-light md:rounded-xl md:shadow-sm p-3 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 px-4 md:px-0 gap-4">
          <div>
            <h2 className="font-bold text-black text-lg">Find People</h2>
            <p className="text-sm font-medium text-grey mt-1">
              {filteredData.length} Result Found{" "}
              {searchQuery && `For ${searchQuery}`}
            </p>
          </div>
          <div className="relative w-full md:w-87.5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                const value = e.target.value;
                if (value) {
                  setSearchParams({ search: value });
                } else {
                  searchParams.delete("search");
                  setSearchParams(searchParams);
                }
              }}
              placeholder="Enter Number Or Full Name"
              className="w-full border border-grey rounded-lg px-4 py-2.5 pr-10 outline-none text-sm text-grey font-medium focus:border-primary transition-all placeholder:text-grey placeholder:font-medium"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-grey w-4 h-4" />
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <Table>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <TableContent
                  key={item.id}
                  onClick={() => handleUserSelect(item)}
                  className={`cursor-pointer hover:bg-primary/5 transition-colors ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <td className="px-2 py-4 md:px-6">
                    <div className="flex items-center gap-3 md:gap-6">
                      <Avatar
                        imageSrc={item.avatar}
                        className="w-12 h-12 rounded-lg shrink-0"
                      />
                      <div className="flex flex-col">
                        <span className="text-grey font-bold md:font-medium">
                          {item.name}
                        </span>
                        <span className="text-grey-light text-sm md:hidden mt-0.5">
                          {item.phone}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cellpx-2 py-4 md:px-6 text-grey text-center">
                    {item.phone}
                  </td>
                  <td className="px-2 py-4 md:px-6 text-right">
                    <Star className="text-gray-400 hover:text-yellow-400 w-5 h-5 ml-auto" />
                  </td>
                </TableContent>
              ))
            ) : (
              <tr className="bg-white">
                <td colSpan="3" className="py-20 text-center text-grey italic">
                  No people found
                </td>
              </tr>
            )}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
