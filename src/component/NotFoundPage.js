const Router = require('react-router-dom')
const NotFoundPage = () => (
  <div>
    No Page Found 404 - <Router.Link to="/">Go To Home</Router.Link>
  </div>
);
export default NotFoundPage;