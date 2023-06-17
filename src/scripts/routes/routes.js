import HomePage from '../views/pages/home-page';
import RegisterPage from '../views/pages/register-page';
import LoginPage from '../views/pages/login-page';
import ListConsultantPage from '../views/pages/list-consultant-page';
import DetailConsultantPage from '../views/pages/detail-consultant-page';
import BookingPage from '../views/pages/booking-page';
import CheckoutPage from '../views/pages/checkout-page';
import ArticlePage from '../views/pages/arcticle-page';

const routes = {
  '/': HomePage, // default page
  '/home-page': HomePage,
  '/register-page': RegisterPage,
  '/login-page': LoginPage,
  '/list-consultant-page': ListConsultantPage,
  '/detail-consultant-page': DetailConsultantPage,
  '/booking-page': BookingPage,
  '/checkout-page': CheckoutPage,
  '/article-page': ArticlePage,
};

export default routes;
