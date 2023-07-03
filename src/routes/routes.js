import Home from '../components/Home/Home';
import Customer from '../components/Customer/Customer';
import Logout from '../components/Logout';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    showInNavigation: true,
  },
  {
    path: '/customer',
    component: Customer,
    name: 'Customer',
    showInNavigation: true,
  },
  {
    path: '/logout',
    component: Logout,
    name: 'Logout',
    showInNavigation: false,
  },
];

export default routes;
