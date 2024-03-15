import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs");

    const handleClick = () => {
        navigate("/create");
    }

    return (
        <div>
            {error && <h1 className="page-head"> {error} </h1>}
            {isPending && <h1 className="page-head"> Loading... </h1>}
            {blog && (
                <>
                    <h1 className="page-head">HomePage</h1>
                    <button onClick={handleClick}>Create Blog</button>
                    <BlogList blogs={blog} />
                </>
            )}
        </div>
    );
}

export default Home;
