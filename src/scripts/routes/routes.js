import HomePage from '../views/pages/home-page';
import RegisterPage from '../views/pages/register-page';
import LoginPage from '../views/pages/login-page';

const routes = {
  '/': HomePage, // default page
  '/home-page': HomePage,
  '/register-page': RegisterPage,
  '/login-page': LoginPage,
};

export default routes;
