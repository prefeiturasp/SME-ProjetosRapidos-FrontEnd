import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import ProjectRequestForm from 'pages/ProjectRequest/ProjectRequestForm';

const RoutesManage = () => {
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
			{routeList.map((route, index) => (
				<Route
					key={route.path + index}
					exact={!!route.exact}
					path={route.path}
					element={route.component}
				/>
			))}
		</Routes>
    );
};

export default RoutesManage;
