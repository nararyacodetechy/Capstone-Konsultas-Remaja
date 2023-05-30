import HomePage from "../views/pages/home-page";
import RegisterPage from "../views/pages/register-page";
import LoginPage from "../views/pages/login-page";

import BookingPage from "../views/pages/booking-page";
import CheckoutPage from "../views/pages/checkout-page";

const routes = {
	"/": HomePage, // default page
	"/home-page": HomePage,
	"/register-page": RegisterPage,
	"/login-page": LoginPage,
	"/booking-page": BookingPage,
	"/checkout-page": CheckoutPage
};

export default routes;
