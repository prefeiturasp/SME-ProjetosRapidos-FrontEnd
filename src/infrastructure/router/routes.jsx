import React from 'react';
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from 'pages/Home/Home';
import ProjectRequestForm from 'pages/ProjectRequest/ProjectRequestForm';
import Animate from 'components/shared/animate/Animate';

const PageLayout = ({ children }) => children;

const RoutesManage = () => {
  const AnimationLayout = () => {
    return (
      <PageLayout>
        {/* <Animate animation="transition.fadeIn" delay={500}> */}
          <Outlet />
        {/* </Animate> */}
      </PageLayout>
    );
  };

	const routeList = [
		{
			path: '/',
			exact: true,
			component: <Home/>,
		},
		{
			path: '/solicitar',
			exact: true,
			component: <ProjectRequestForm/>,
		},
	];
    return (
		<Routes>
      <Route element={<AnimationLayout/>}>
			{routeList.map((route, index) => (
				<Route
					key={route.path + index}
					exact={!!route.exact}
					path={route.path}
					element={route.component}
				/>
			))}
      </Route>
		</Routes>
    );
};

export default RoutesManage;
