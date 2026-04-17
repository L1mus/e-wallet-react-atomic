import bankBri from "../assets/images/bankBri.png";
import IconTrash from "../assets/icons/Trash.svg?react";
import InputRadio from "../components/atoms/InputRadio";
import Table from "../components/organism/Table";
import DropdownMenu from "../components/molecules/DropdownMenu";

const Landingpage = () => {
  return (
    <>
      <div className="w-full">
        <InputRadio
          nameInput={"bankBri"}
          valueInput={"bri"}
          labelName={"Bank Rakyat Indonesia"}
          logo={bankBri}
        />
        <Table
          imageSrc={bankBri}
          name={"Ali Mustadji"}
          phoneNumber={"085156534946"}
          children={<IconTrash />}
          classNameIcon={"text-danger text-xl place-items-center mt-2"}
        />

        <DropdownMenu />
      </div>
    </>
  );
};

export default Landingpage;
