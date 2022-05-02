import React, { useState } from 'react';
import Navigations from './Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';

import './style.scss';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

const HomePage = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [profile, setProfile] = useState('John');
	const [picture, setPicture] = useState('');
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div className='HSWrapper'>
			<div className='HSNav'>
				
				<div className='HSWelcome'>
					<div className='title'>Welcome Tony Stark,</div>
				</div>
				<Navigations />
			</div>
		</div>
	);
};

export default HomePage;
