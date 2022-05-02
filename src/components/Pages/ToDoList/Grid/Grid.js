import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SelectSmall from '../Grid/Dropdown/Dropdown';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import LongMenu from '../Grid/KebabMenu/KebabMenu';

import './style.scss';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const BasicGrid = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className="basicGrid">
                <Grid item xs={12}>
                    <Item >
                        <div className="topGrid">
                            <div className="dropDown">
                                <SelectSmall />
                            </div>
                            <div className="buttonGrid">
                                <Stack direction="row" spacing={2}>
                                    <Button className="error" variant="outlined" startIcon={<DeleteIcon />}>
                                        Delete list
                                </Button>
                                    <Button className="edit" variant="outlined" startIcon={<EditIcon />}>
                                        Edit list
                                </Button>
                                    <Button className="addIcon" variant="contained" startIcon={<AddIcon />}>
                                        Create new list
                                </Button>
                                </Stack>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item className="gridItem">
                        <div className="avatar">
                            <span>
                                <Avatar>
                                    4
                       </Avatar>
                            </span>
                            <span className="titleGrid"><h2>To Do</h2></span>
                        </div>
                        <div className="card">
                            <Card sx={{ minWidth: 275, minHeight: 100 }}>
                                <CardActions>
                                    <Button className="addNewTask" variant="outlined" startIcon={<AddIcon />}>
                                        Add new task
                                </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div  className="card">
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent className="cardContet">
                                <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="test" control={<Radio />} label="Send Steve Rogers the new address and pay details of MyView" />
        </RadioGroup>
        <LongMenu />
        <div>
        <input type="date" id="date" name="date" />
        </div>
                                </CardContent>
                                <CardActions>
                                <AccountCircleOutlinedIcon />
                                Tony Stark
                                <p className="personal">Personal</p>
                                </CardActions>
                            </Card>
                        </div>
                        <div  className="card">
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent className="cardContet">
                                <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="test" control={<Radio />} label="Complete excel sheet of potential clients" />
        </RadioGroup>
        <LongMenu />
        <div>
        <input type="date" id="date" name="date" />
        </div>
                                </CardContent>
                                <CardActions>
                                <AccountCircleOutlinedIcon />
                                Natasha Romanoff
                                <p className="work">Work</p>
                                </CardActions>
                            </Card>
                        </div>
                        <div  className="card">
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent className="cardContet">
                                <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="test" control={<Radio />} label="Prepare Mailchimp compaign for Xmas" />
        </RadioGroup>
        <LongMenu />
        <div>
        <input type="date" id="date" name="date" />
        </div>
                                </CardContent>
                                <CardActions>
                                <AccountCircleOutlinedIcon />
                                Tony Stark
                                <p className="meetings">Meetings</p>
                                </CardActions>
                            </Card>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item className="gridItem">
                        <div className="avatar">
                            <span>
                                <Avatar>
                                    2
                       </Avatar>
                            </span>
                            <span className="titleGridLong"><h2>In Progress</h2></span>
                        </div>
                        <div  className="card">
                            <Card sx={{ minWidth: 275 ,minHeight: 100 }}>
                                <CardContent>

                                </CardContent>
                                <CardActions>
                                    <Button  className="addNewTask"  variant="outlined" startIcon={<AddIcon />}>
                                        Add new task
                                </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div  className="card">
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent className="cardContet">
                                <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="test" control={<Radio />} label="Review slides for presentation with client and agree on a 2022 qoute"/>
        </RadioGroup>
        <LongMenu />
        <div>
        <input type="date" id="date" name="date" />
        </div>
                                </CardContent>
                                <CardActions>
                                <AccountCircleOutlinedIcon />
                                Stephen strange
                                <p className="work">Work</p>
                                </CardActions>
                            </Card>
                        </div>
                        <div  className="card">
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent className="cardContet">
                                <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="test" control={<Radio />} label="Prepare Mailchimp compaign for Black Friday"/>
        </RadioGroup>
        <LongMenu />
        <div>
        <input type="date" id="date" name="date" />
        </div>
                                </CardContent>
                                <CardActions>
                                <AccountCircleOutlinedIcon />
                                Natasha Romanoff
                                <p className="work">Work</p>
                                </CardActions>
                            </Card>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item className="gridItem">
                        <div className="avatar">
                            <span>
                                <Avatar>
                                    1
                       </Avatar>
                            </span>
                            <span className="titleGridLong"><h2>Completed</h2></span>
                        </div>
                        <div  className="card">
                            <Card sx={{ minWidth: 275, minHeight: 100 }}>
                                <CardContent>

                                </CardContent>
                                <CardActions>
                                    <Button  className="addNewTask"  variant="outlined" startIcon={<AddIcon />}>
                                        Add new task
                                </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div  className="card">
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent className="cardContet">
                                <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="test" control={<Radio />} label="Send second round of emails for new promotion of black friday"/>
        </RadioGroup>
        <LongMenu />
        <div>
        <input type="date" id="date" name="date" />
        </div>
                                </CardContent>
                                <CardActions>
                                <AccountCircleOutlinedIcon />
                                Tony Stark
                                <p className="work">Work</p>
                                </CardActions>
                            </Card>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default BasicGrid;