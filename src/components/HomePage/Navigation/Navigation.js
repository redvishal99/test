import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import './style.scss';

const Navigation = (props) => {
	const useStyles = makeStyles((theme) => ({
		title: {
			margin: theme.spacing(2, 0, 0.5),
		},
	}));
	const classes = useStyles();
	return (
		<>
			<div className='nav'>
				
				<div className='navWrap'>
					<List className='listProp'>
						<ListItem className='listItemProp' button>
							<Link to='/ToDoList'>
								<ListItemText primary={'To Do List'} />
							</Link>
						</ListItem>
					</List>
				</div>

			
						</div>
		</>
	);
};
const mapStateToProps = (state) => {
	return {
		userGroup: '',
	};
};
export default connect(mapStateToProps)(Navigation);
