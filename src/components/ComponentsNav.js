import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '../Layout/styles.module.scss';
import component from '../complib/list.js';

const ComponentLink = ({component}) => 
    <li><NavLink to={`/${component.name}`}>{component.name}</NavLink></li>;

const ComponentsNav = () => {
    return (
        <div className={styled.CompnentsNav}>
           <ul>
               {component.map(component => 
                <ComponentLink component={component} key={component.id}/>)}
           </ul>
        </div>
    )
}

export default ComponentsNav
