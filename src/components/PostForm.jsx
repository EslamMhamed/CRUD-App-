import { useState } from "react"

function PostForm() {

    const [post, setPost] = useState({
        title: "",
        body: ""
    })
    
    function handleChange(e){
        const {name, value} = e.target
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
    }))
}

    const renderFiled = (label)=>(
        <div>
            <label htmlFor={label} >{label}</label>
            <input id={label} type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]} onChange={handleChange} />
        </div>
    )

    function handleSubmit(e){
        e.preventDefault()
        console.log(post)
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