import Button from "../components/atoms/Button";
import IconArrow from "../assets/icons/arrow.svg?react";
import Sidebar from "../components/organism/Sidebar";

const Landingpage = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col gap-12 justify-around">
        <Button
          isHaveIcon={true}
          Icon={IconArrow}
          variant="rectangelBlue"
          children="Login"
        />
        <div className=" w-156 p-12 bg-primary flex justify-center">
          <Button
            isFullwidth={true}
            variant="rectangelWhite"
            children={"21412412412441515"}
          />
        </div>
        <Button
          isDisabled={true}
          typeButton="cicle"
          variant="cicleBlue"
          children={"Login"}
        />
        <Button
          isHaveIcon={true}
          Icon={IconArrow}
          iconClassName="text-red-900 stroke-current fill-current w-4 h-4"
          typeButton="cicle"
          variant="cicleBlue"
        />
        <Button typeButton="cicle" variant="cicleWhite" children={"Login"} />
      </div>
    </>
  );
};

export default Landingpage;
