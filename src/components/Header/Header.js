import React, { useState } from 'react';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
//Search
import { TextField } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import MaterialIcon from 'react-google-material-icons';
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';


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
const Header = (props) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<>
			<div class='header'>
				<div className='search'>
					<TextField
						placeholder="Employee Search"
						InputProps={{
							endAdornment: (
								<InputAdornment>
									<IconButton>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
				</div>
				<div className="notification">
					<InputAdornment>
						<IconButton>
							<NotificationsNoneOutlinedIcon />
						</IconButton>
					</InputAdornment>
				</div>
				<div className="helpNotification">
					<InputAdornment>
						<IconButton>
							<HelpOutlineOutlinedIcon />
						</IconButton>
					</InputAdornment>
				</div>
				<div className="profile">
					<InputAdornment>
						<IconButton>
							<AccountCircleOutlinedIcon />
						</IconButton>
					</InputAdornment>
				</div>
				<div className="profile">
					<InputAdornment>
						<IconButton>
							<AccountCircleOutlinedIcon />
						</IconButton>
					</InputAdornment>
				</div>
				<div className="powerSetting">
					<InputAdornment>
						<IconButton>
							<PowerSettingsNewOutlinedIcon />
						</IconButton>
					</InputAdornment>
				</div>
			</div>
		</>
	);
};

export default Header;
