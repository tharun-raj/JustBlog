import { Link } from "react-router-dom";
//const BlogList = ({ blogs }) => {...}  #t his can also be done # no need of const blog = props.blogs

const BlogList = (props) => {
    const blog = props.blogs
    

    return ( 
        <div className="blogs">
                { blog.map((blog) => (
                    <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }} key={ blog.id }>
                        <div className="blog-preview " key={ blog.id }>
                            <div className="blog-child">
                                <h1> { blog.title } </h1> 
                                <p> { blog.author } </p> 
                            </div> 
                        </div>
                    </Link>
                )) }
        </div>
     );
}
 
export default BlogList;