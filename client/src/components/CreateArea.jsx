import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const CreateArea = ({onAdd}) => {
  const [obj, setObj] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setObj((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
    console.log(obj);
  };
  const handleClick = () => {
    onAdd(obj);
    setObj({
      title: "",
      content: "",
    });
  }

  return (
    <div className="relative w-full max-w-5xl p-6 rounded-lg bg-white drop-shadow mx-auto">
      <input
        onChange={handleChange}
        name="title"
        placeholder="Title"
        value={obj.title}
        className="w-full border-none p-1 outline-none text-lg font-[inherit]"
      />
      <textarea
        onChange={handleChange}
        name="content"
        placeholder="Take a note..."
        rows="4"
        value={obj.content}
        className="w-full border-none p-1 outline-none text-lg font-[inherit]"
      />
      <Fab
        style={{ position: "absolute", right: "24px", height: "44px", width: "44px", backgroundColor: "#f5ba13", bottom: "-18px", color: "white" }}
        onClick={handleClick}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default CreateArea;
