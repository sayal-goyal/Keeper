import React from "react";

const Note = ({id, title, content, onDelete}) => {
  return (
    <div className="flex flex-col bg-white rounded-md drop-shadow py-3 px-5 w-72">
      <h1 className="text-lg font-semibold text-slate-500">{title}</h1>
      <p className="text-base whitespace-pre-wrap break-words">
        {content}
      </p>
      <button
        onClick={() => {
          onDelete(id);
        }}
        className="self-end mr-9 text-[#f5ba13] border-none">
        DELETE
      </button>
    </div>
  );
};

export default Note;
