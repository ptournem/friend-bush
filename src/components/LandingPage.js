import React from 'react';
import UserConnection from '../containers/UserConnection';

const Main = ({user, current}) => {
	return (
		<section className="hero is-light is-bold is-fullheight">

			<div className="hero-head">
		    <nav className="navbar">
		      <div className="container">
		        <div className="navbar-brand">
		          <div className="navbar-item is-brand-name">
		            Friend<span>Bush</span>
						</div>
		        </div>
		      </div>
		    </nav>
		  </div>

		  <div className="hero-body">
		    <div className="container has-text-centered">
		      <h1 className="title is-brand-name">
		        Friend<span>Bush</span>
		      </h1>
		      <h2 className="subtitle">
		        Manage your spendings easily
		      </h2>
					<div className="hero-buttons has-text-centered">
						<UserConnection/>
						<a className="button" href="http://paypal.me/ptournem" rel="noopener noreferrer" target="_blank">
							<span className="icon">
								<i className="zmdi zmdi-paypal"></i>
							</span>
							<span>Support dev</span>
						</a>
					</div>

		    </div>
		  </div>
		</section>
	);
};

export default Main;
