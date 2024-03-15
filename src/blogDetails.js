import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams()
    let path = "http://localhost:8000/blogs/" + id
    const {data:blog, isPending, error} = useFetch(path) 
    const navigate = useNavigate()

    const handleDelete = (id) => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: 'DELETE',
        })
        .then(() => { 
            navigate("/")
        })
        .catch((e) => {
            console.log(e)
            alert("an error occured")
        })
    }
    
    return(
        <div>
            {error && <h1 className="page-head"> {error} </h1>}
            {isPending && <h1 className="page-head"> Loading... </h1>}
            {blog && <h1 className="page-head">{blog.title}</h1>}
            {blog && <p className='author-name'>Written By {blog.author}</p>}
            {blog && <article className="blog-body">
                <p>{ blog.body }</p>
            </article>}
            {blog && <div className="blog-button-create-container"><button onClick={() => handleDelete(blog.id)}>Delete</button></div>}
        </div>
    )
}

export default BlogDetails;