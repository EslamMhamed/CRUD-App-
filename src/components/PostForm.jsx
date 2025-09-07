import { useState } from "react";

function PostForm({ onSubmit, intialValue }) {
  const [post, setPost] = useState({
    title: intialValue.title || "",
    body: intialValue.body || "",
  });

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  }

  const renderFiled = (label) => (
    <div className="flex rounded-md  bg-gray-100 my-3 ">
      <label className="text-xl p-3 " htmlFor={label}>
        {label}
      </label>
      <input
        className="w-full rounded-md outline-gray-500 bg-gray-100 p-3"
        id={label}
        type="text"
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
        placeholder={`Add Your ${label}...`}
        onChange={handleChangeInput}
      />
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(post);
    setPost({
      title: "",
      body: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {renderFiled("title")}
      {renderFiled("body")}
      <button className="px-4 py-2 mt-3 w-full text-3xl bg-gray-300 hover:bg-gray-500  rounded-md ">
        Submit
      </button>
    </form>
  );
}

export default PostForm;
