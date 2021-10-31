import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <span>Link: </span>
      <Link to="/blogs">Blogs</Link>
    </div>
  );
};

export default Home;
