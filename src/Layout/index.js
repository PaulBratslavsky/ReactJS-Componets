import React from 'react'
import ComponentsNav from '../components/ComponentsNav'
import { AppRoutes } from '../routes/AppRoutes'
import SwitchRoutes from './SwitchRoutes'

import styles from './styles.module.scss'

const Layout = () => (
    <div className={styles}>
        <ComponentsNav />
        <SwitchRoutes routes={AppRoutes} />
    </div>
)

export default Layout
