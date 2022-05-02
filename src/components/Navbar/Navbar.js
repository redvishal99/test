import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';
import TestTab from './Tab/Tab';
import './style.scss';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: '16px',
	},
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		color: 'white',
		borderRadius: '4px',
		bottom: '35.5rem',
		background: '#BB7047',
		position: 'fixed',
		zIndex: '1',
		height: '2rem',
		width: '2rem',	
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 1,
	},
	toolbar: {
		top: '4rem',
		display: 'inline-block',
	},
	drawerPaper: {
		width: drawerWidth,
		boxShadow: '3px 0px 10px #00000029',
	},
	drawerHeader: {
		margin: '0 0 0 5rem',
		// display: 'flex',
		// alignItems: 'center',
		// // necessary for content to be below app bar
		// ...theme.mixins.toolbar,
	},
	navBarLogo: {
		marginLeft: '0.7rem',
	},
	navBarClose: {
		position: 'relative',
		bottom: '2.9rem',
		left: '7rem',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

const Navbar = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<div className='NavBar'>
			<CssBaseline />
			<Toolbar className={classes.toolbar}>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					onClick={handleDrawerOpen}
					edge='start'
					className={clsx(classes.menuButton, open && classes.hide)}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<span >
						<p><b>my</b>view</p>
					</span>
					<IconButton
						className={classes.navBarClose}
						onClick={handleDrawerClose}
					>
						{theme.direction === 'ltr' ? <Close /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<div
				 style={{
					position: 'relative',
					width: '15rem',
					display: 'inline-block'
				}}
				>
                <TestTab />
				</div>
				<div className='navBar'>
					<div className='navBarWrap'>
						<List>
							<List className='listProp'>
								<ListItem className='listItemProp' button>
									<Link to='/'>
										<ListItemText primary={'My dashboard'} />
									</Link>
								</ListItem>
								<ListItem className='listItemProp' button>
									<Link to='/'>
										<ListItemText primary={'My expenses'} />
									</Link>
								</ListItem>
								<ListItem className='listItemProp' button>
									<Link to='/ToDoList'>
										<ListItemText primary={'To do list'} />
									</Link>
								</ListItem>
								<ListItem className='listItemProp' button>
									<Link to='/'>
										<ListItemText primary={'My pay'} />
									</Link>
								</ListItem>
								<ListItem className='listItemProp' button>
									<Link to='/'>
										<ListItemText primary={'My forms'} />
									</Link>
								</ListItem>
								<ListItem className='listItemProp' button>
									<Link to='/'>
										<ListItemText primary={'Onboarding'} />
									</Link>
								</ListItem>
								<ListItem className='listItemProp' button>
									<Link to='/'>
										<ListItemText primary={'Time management'} />
									</Link>
								</ListItem>
								<ListItem className='listItemProp' button>
									<Link to='/'>
										<ListItemText primary={'My team'} />
									</Link>
								</ListItem>
							</List>
						</List>
					</div>
				</div>
				<Divider />
			</Drawer>
		</div>
	);
};

export default Navbar;
