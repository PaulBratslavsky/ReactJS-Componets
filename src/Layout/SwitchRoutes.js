import React from 'react'
import { Switch, Route } from 'react-router-dom'

const SwitchRoute = ({path, component, exact}) => <Route 
    path={path}
    component={component}
    exact={exact}
/>

const SwitchRoutes = ({routes}) => (
    <Switch>  
       {routes &&  routes.map(route => <SwitchRoute {...route} key={route.path} />)}      
    </Switch>
)
        
export default SwitchRoutes
