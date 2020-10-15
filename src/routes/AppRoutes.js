import Welcome from '../pages/Welcome';
import InputFilter from '../complib/input-filter';

export const AppRoutes = [
    { path: '/', component: Welcome, exact: true },
    { path: '/input-filter', component: InputFilter, exact: true },
]