import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import './style.scss';

const TestTab = () => {
    const [value, setValue] = React.useState(2);

    return (
        <div
           
        >
            <Paper square>
                <Tabs
                    className="tabs"
                    value={value}
                    textColor="black"
                    indicatorColor="primary"
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <Tab label="Me" />
                    <Tab label="My People" />
                </Tabs>
            </Paper>
        </div>
    );
};

export default TestTab;