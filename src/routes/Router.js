import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';
import Service from '../pages/Home/Service';
import Project from '../pages/Home/Project';
import Contact from '../pages/Home/Contact';

const Router = () => {

    const RouteWithRole = ({ Element }) => {
        return (
          <>
            <Element/>
          </>
        );
      }

  return (
    <div>
        <Routes>
            <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
            <Route exact path={ROUTES.Service} element={<RouteWithRole Element={Service} />}></Route>
            <Route exact path={ROUTES.Project} element={<RouteWithRole Element={Project} />}></Route>
            <Route exact path={ROUTES.Contact} element={<RouteWithRole Element={Contact} />}></Route>
        </Routes>
    </div>
  )
}

export default Router