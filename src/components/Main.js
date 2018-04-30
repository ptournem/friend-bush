import React from 'react';
import LandingPage from './LandingPage';
import AppPage from '../containers/AppPage';

const Main = ({user, current}) => {
	if(!user){
		return <LandingPage />;
	}
	return <AppPage />;

};

export default Main;
