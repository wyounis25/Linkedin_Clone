import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import linkedin from './linkdin.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import me from './me.jpg';
function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img src={linkedin} alt="linkedin" />
				<div className="header__search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header__right" />
			<HeaderOption Icon={HomeIcon} title="Home" />
			<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
			<HeaderOption Icon={BusinessCenterIcon} title="Home" />
			<HeaderOption Icon={ChatIcon} title="My Network" />
			<HeaderOption Icon={NotificationsIcon} title="My Network" />
			<HeaderOption profile={me} />
		</div>
	);
}

export default Header;
