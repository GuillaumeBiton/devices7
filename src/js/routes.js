
import HomePage from '../pages/home.svelte';
import DevicesPage from '../pages/devices.svelte';
import DevicePage from '../pages/device.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/devices',
    component: DevicesPage,
  },
  {
    path: '/device/:id',
    component: DevicePage,
  }
];

export default routes;
