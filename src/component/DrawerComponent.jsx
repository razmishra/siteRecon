import React, { useState } from "react";
import Notes from "./Notes";
import { RxCross2 } from "react-icons/rx";
import { data } from "../../data";
import Card from "./Card";

const DrawerComponent = ({ open, setOpen, onClose }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardOpen = (index) => {
    selectedCard !== null ? setSelectedCard(null) : setSelectedCard(index);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <div
      className={`bg-white no-scrollbar p-2 border-l border-gray-300 transform transition-transform ${
        open ? "translate-x-0" : "translate-x-full "
      }`}
    >
      <div className="flex text-center items-center">
        <div className=" text-zinc-800 text-base font-medium">
          <span className="text-xl">Notes</span>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={handleClose}
        >
          <RxCross2 size={20} />
        </button>
      </div>
      <Notes />
      {data.map((obj, index) => (
        <Card
          icon={obj.icon}
          title={obj.title}
          description={obj.description}
          name={obj.name}
          comment={obj.comment}
          index={index}
          isOpen={selectedCard === index}
          onOpen={() => handleCardOpen(index)}
        />
      ))}
    </div>
  );
};

export default DrawerComponent;
