import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Autosuggest from 'react-autosuggest';
import {suggestions, categorydata, theme, useStyles} from './data.js';


class SmartApp extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            cat:'desktop',
            categories: categorydata,
            value: '',
            localid: 1000,
            suggestion: suggestions
        }
    }

    render(){
        const classes = useStyles();
        return (
            <div >


                <h1> im smart</h1>

          
            </div>
          

            
        )
    }




}
export default SmartApp;