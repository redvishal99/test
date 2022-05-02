import React from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import BasicGrid from '../ToDoList/Grid/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './style.scss';


const ToDoList = (props) => {

	return (
		<>
			<div className="toDoList">
				<Header />
				<div>
					<Navbar />
					<div className="title">
						<h1>To do list</h1>
						<div className="buttonGridList">
							<Stack direction="row" spacing={2}>
								<Button className="questionMark" variant="outlined" startIcon={<QuestionMarkIcon />}>
								</Button>
								<Box
								>
									<ButtonGroup className="buttonGroup" variant="outlined" aria-label="outlined button group">
										<Button><LinkIcon/></Button>
										<Button><KeyboardArrowDownIcon /></Button>
									</ButtonGroup>
								</Box>
							</Stack>
						</div>
					</div>
				</div>
				<div className="basicGrid">
					<BasicGrid />
				</div>
			</div>
		</>
	);
};
export default ToDoList;
