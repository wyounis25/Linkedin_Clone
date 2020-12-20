import React from 'react';
import './HeaderOption.css';
import Avatar from '@material-ui/core/Avatar';
function HeaderOption({ profile, Icon, title }) {
	return (
		
		<div className="headerOption">
			{/* if Icon is true than render the Icon */}
			{Icon && <Icon className="headerOption__icon" />}
			{profile && <Avatar className="headerOption__icon" alt="me" src={profile}  />}
			<h3 className="headerOption__title"> {title}</h3>
		</div>
	);

}

export default HeaderOption;
