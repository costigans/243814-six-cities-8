import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray">
      <h1>404 Not Found</h1>
      <p>
        You can <Link to="/">go to main page</Link>
      </p>
    </div>
  );
}

export default NotFound;
