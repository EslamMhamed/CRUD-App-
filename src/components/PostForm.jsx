import { useState } from "react"

function PostForm({onSubmit, intialValue}) {

    const [post, setPost] = useState({
        title: intialValue.title || "",
        body: intialValue.body ||  ""
    })

    function handleChangeInput(e){
        const {name, value} = e.target
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
    }))
}

    const renderFiled = (label)=>(
        <div>
            <label htmlFor={label} >{label}</label>
            <input id={label} type="text" name={label.toLowerCase()} value={post[label.toLowerCase()] } onChange={handleChangeInput} />
        </div>
    )

    function handleSubmit(e){
        e.preventDefault()
        onSubmit(post)
        setPost({
            title: "",
            body: ""
        })
    }

  return (
    <form onSubmit={handleSubmit} >
        {renderFiled("title")}
        {renderFiled("body")}
        <button>Submit</button>
    </form>
)
}

export default PostForm