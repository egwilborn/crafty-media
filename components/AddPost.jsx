import { useState } from "react";

export default function AddPost() {
  const [isForm, setForm] = useState(false);

  function handleClick() {
    setForm(true);
  }

  if (isForm) {
    return (
      <div className="h-fit w-full pb-5 bg-liteGreen flex direction-col items-center justify-center">
        <div>
          <form action="">
            <input type="file" />
            <label> caption</label>
            <input type="textbox" />
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-fit w-full pb-5 bg-liteGreen flex direction-col items-center justify-center">
        <button
          onClick={handleClick}
          className="h-20 w-60 bg-navy rounded-xl flex direction-col items-center justify-center button hover:bg-hoverNavy cursor-pointer"
        >
          <h3 className="text-pink text-3xl">+ New Post</h3>
        </button>
      </div>
    );
  }
}
