import BlogList from "./BlogList"
import useFetch from "./useFetch"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()


    const handleClick = () => {
        navigate("/create")
    }

    const {data:blog, isPending, error} = useFetch("http://localhost:8000/blogs")

    return(
        <div>
            {error && <h1 className="page-head"> {error} </h1>}
            {isPending && <h1 className="page-head"> Loading... </h1>}
            {blog && <h1 className="page-head">HomePage</h1>}
            {blog && <button onClick={handleClick}>Create Blog</button>}
            {blog && <BlogList blogs = {blog} />}
        </div>
    )
}

export default Home;