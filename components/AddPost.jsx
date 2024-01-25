import { useState } from "react";

export default function AddPost() {
  const [isForm, setForm] = useState(false);

  function handleClick() {
    setForm(true);
  }

  if (isForm) {
    return (
      <div className="h-fit w-full pb-5 bg-liteGreen flex flex-col items-center justify-center gap-5">
        <div className="bg-navy p-5 rounded-xl w-5/12">
          <form
            action=""
            className="flex flex-col items-center justify-center gap-5"
          >
            <input type="file" className="text-pink" />
            <div>
              <label className="text-pink"> Caption: </label>
              <input type="textbox" className="w-8/12" />
            </div>
            <button className="bg-liteGreen text-navy text-lg p-2 rounded-lg hover:bg-hoverLiteGreen">
              Post
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-fit w-full pb-5 bg-liteGreen flex flex-col items-center justify-center">
        <button
          onClick={handleClick}
          className="h-20 w-60 bg-navy rounded-xl flex flex-col items-center justify-center button hover:bg-hoverNavy cursor-pointer"
        >
          <h3 className="text-pink text-3xl">+ New Post</h3>
        </button>
      </div>
    );
  }
}
