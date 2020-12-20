import React from 'react';
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';
import me from './me.jpg';

function Sidebar() {
	const recentItem = (topic) => {
		return (
			<div className="sidebar__recentItem">
				<span className="sidebar__hash">#</span>
				<p>{topic}</p>
			</div>
		);
	};

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<div className="bob">
					<img
						src="https://media.npr.org/assets/img/2020/08/27/nasa-goods-real_wide-9168d715c2d4c488d7a0e594b397d7abdd969d9d.png"
						alt="background"
					/>
				</div>
				<Avatar className="sidebar__avatar" />
				<h2>Walid Younis</h2>
				<h4>walid.com</h4>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who Viewed You</p>
					<p className="sidebar__statNumber">2,525</p>
				</div>
				<div className="sidebar__stat">
					<p>View on Posts</p>
					<p className="sidebar__statNumber">3,000</p>
				</div>
			</div>

			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('progress')}
				{recentItem('software engineering')}
				{recentItem('design')}
				{recentItem('developer')}
			</div>
		</div>
	);
}

export default Sidebar;
