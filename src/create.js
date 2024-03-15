import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setisPending] = useState(false)
    const [submit, setSubmit] = useState(false)
    const navigate = useNavigate()


    const autoResize = () => {
        const textarea = document.getElementById("myTextarea");
        textarea.style.height = "auto";
        textarea.style.height = (textarea.scrollHeight + 10) + "px"; // Add additional padding to match CSS padding
        
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        setisPending(true)
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        .then(() => { 
            setisPending(false)
            setSubmit(true)
            setTimeout(() => {
                setSubmit(false)
                navigate("/")
            }, 3000)
        })
        .catch((e) => {
            console.log(e)
            alert("an error occured")
        })
        
    }

    return (
        <div>
            <form className="blog-form" onSubmit={handleSubmit}>
                <input type="text" className="title-inp" placeholder="Title" 
                required
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                />
                <div className="author-create-container">
                    <label>Written By &nbsp;</label>
                    <input type="text" className="author-inp" placeholder="Name"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="body-button-create-container">
                    <article className="blog-body-create-container">
                        <textarea id="myTextarea" onInput={autoResize} 
                        placeholder="what would you like to share"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}/>
                        
                    </article>
                    <div className="blog-button-create-container">
                        {!isPending && <button>Submit</button>}
                        {isPending && <p>Loading...</p>}
                        {submit && <p>Submitted</p>}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;
