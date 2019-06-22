import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Autosuggest from 'react-autosuggest';
import {suggestions, categorydata, theme, useStyles} from './data.js';




function ButtonAppBar() {
    const classes = useStyles();
    const [cat, setCat] = useState('desktop');
    const [categories, setCategories] = useState(categorydata);
    const [value, setValue] = useState('');
    const [localid, setLocalid] =useState(1000);
    const [suggestion, setSuggestion] = useState(suggestions)

    // Teach Autosuggest how to calculate suggestions for any given input value.
    const getSuggestions = value => {
    // console.log(value, 'this_is_get_suggestion()');
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : suggestions.filter(lang =>
          lang.text.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
  
  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
    const getSuggestionValue = (e) => {
    setLocalid(e.id);
    return e.text;
  
    
    
    };
  
  // Use your imagination to render suggestions.
    const renderSuggestion = (suggestion, { query, isHighlighted }) => (
        <div>
        {suggestion.text}
        </div>
    );


    function onSuggestionsFetchRequested ({value}){
        setSuggestion(getSuggestions(value));
    };
      
    function handleChange(e){ 
                e.persist();
                e.preventDefault();
                // console.log(e, 'this_is_handleChange()')
                setValue(e.target.value||e.target.innerText);
            }
    // Autosuggest will call this function every time you need to clear suggestions.
    function onSuggestionsClearRequested  ()  {
        // setSuggestion();
    };
    const inputProps = {
              placeholder: 'start typing WuwuwuWuwuwuw....',
              value,
              onChange: handleChange
            };
    function submitLocalid (e) {
        // e.preventDefault();
        console.log(localid,'this is local id')
        props.setUuid(localid);

    }
  return (
    <div className={classes.root}>
      
        <AppBar style={{backgroundColor: '#24547C'}}>
        <Toolbar>
          
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
          
          </IconButton> */}
         
          <Typography  variant="h6" className={classes.titleleft}>
      
          {/* <div style={{border:'1px solid green'}}> */}
          <img src="https://amazinsearchbar.herokuapp.com/logo.png" style={{height:'100px', transform:'scale(1.3)'}}></img>
          {/* </div> */}
          </Typography>
          <Typography className={classes.titleselect}>
          
          <select style={{height:'100%', width:'100%', fontSize:'12px', fontFamily: 'sans-serif', color:'#555', backgroundColor:'f3f3f3'}}>
           {categories.map(el => (<option value={el}>{el}</option>))}
          </select>
          </Typography>
       
          <Typography variant="h6" className={classes.titlemiddle}>
          <Autosuggest 
          suggestions={suggestion}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          theme={theme}
        />

          </Typography>
          <Button className={classes.titlebutton} onClick={submitLocalid}>
              <SearchIcon/>
          </Button>          
          <Typography variant="h6" className={classes.titleright}>
            
          </Typography>
          {/* <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;