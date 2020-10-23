import Welcome from '../pages/Welcome';
import InputFilter from '../complib/input-filter';
import ClassComponent from '../complib/class-component';
import TreeSelect from '../complib/tree-select';
export const AppRoutes = [
    { path: '/', component: Welcome, exact: true },
    { path: '/input-filter', component: InputFilter, exact: true },
    { path: '/class-component', component: ClassComponent, exact: true },
    { path: '/tree-select', component: TreeSelect, exact: true },
]