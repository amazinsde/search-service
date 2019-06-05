import React from 'react';
import ReactDOM from 'react-dom';
import Search from './appbar.jsx';


window.Search = Search;


ReactDOM.render(<Search />, document.getElementById('searchbar'));




// window.Search = Search;
// const theme = {   
//   container: {position: 'relative'},   
//   input: {
//     width: 300,
//     height: 10,
//     padding: '10px 20px',
//     fontFamily: 'Helvetica, sans-serif',     
//     fontWeight: 300,     
//     fontSize: 16,     
//     border: '1px solid #aaa',   },   
//   inputFocused: {     
//     outline: 'none'   },   
//   inputOpen: {     
//     borderBottomLeftRadius: 0,     
//     borderBottomRightRadius: 0   },   
//   suggestionsContainer: {     
//     display: 'none'   },   
//     suggestionsContainerOpen: {     
//       display: 'block',     
//       position: 'absolute',     
//       top: 51,     
//       width: 300,     
//       border: '1px solid #aaa',     
//       backgroundColor: '#fff',     
//       fontFamily: 'Helvetica, sans-serif',     
//       fontWeight: 300,     
//       fontSize: 16,     
//       borderBottomLeftRadius: 4,    
//       borderBottomRightRadius: 4,     
//       zIndex: 2   },   
//     suggestionsList: {     
//       margin: 0,     
//       padding: 0,     
//       listStyleType: 'none',   },   
//     suggestion: {     
//       cursor: 'pointer',     
//       padding: '10px 20px'   },   
//     suggestionHighlighted: {     
//       backgroundColor: '#ddd'   } 
//     };

// const languages = [
//   {
//     name: 'C',
//     year: 1972
//   },
//   {
//     name: 'Elm',
//     year: 2012
//   },
  
// ];

// const suggestions = [
//   {
//     text: 'Apple'
//   },
//   {
//     text: 'Acar'
//   },
//   {
//     text: 'Aododod'
//   },
//   {
//     text: 'Adedede'
//   },
//   {
//     text: 'Banana'
//   },
//   {
//     text: 'Cherry'
//   },
//   {
//     text: 'Grapefruit'
//   },
//   {
//     text: 'Lemon'
//   }
// ];

// // Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : suggestions.filter(lang =>
//     lang.text.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };

// // When suggestion is clicked, Autosuggest needs to populate the input
// // based on the clicked suggestion. Teach Autosuggest how to calculate the
// // input value for every given suggestion.
// const getSuggestionValue = suggestion => suggestion.text;

// // Use your imagination to render suggestions.
// const renderSuggestion = (suggestion, { query, isHighlighted }) => (
//   <div>
//     {suggestion.text}
//   </div>
// );



// class Search extends React.Component {

//     constructor(props){
//       super(props);
//       this.state ={
//           categories: ['desktop', 'laptop','mesoputamia department'],
//           value: '',
//           suggestions: []
//       }
//       this.handleChange = this.handleChange.bind(this);
//       this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
//       this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
//       this.submit = this.submit.bind(this);
//     }

//     componentDidMount(){
  
//     }


//     handleChange(){
//         this.setState({value: event.target.value});
//     }


  
//     // Autosuggest will call this function every time you need to update suggestions.
//     // You already implemented this logic above, so just use it.
//     onSuggestionsFetchRequested ({value})  {
//       this.setState({
//         suggestions: getSuggestions(value)
//       });
//     };
  
//     // Autosuggest will call this function every time you need to clear suggestions.
//     onSuggestionsClearRequested  ()  {
//       this.setState({
//         suggestions: []
//       });
//     };
    
//     submit(e){
//       e.preventDefault();
//       this.props.setUuid(parseInt(this.state.value)||1001);
//     }
  
//     render(){
//       const { value, suggestions } = this.state;

//         const inputProps = {
//       placeholder: 'Type a programming language',
//       value,
//       onChange: this.handleChange
//     };
//       return (
        
//         <>
        
//         <div style={{height: '100px', backgroundColor:'red'}}>

//         <div style={{height:'100px',  width:'15%', backgroundColor:'#24547C', display:'inline-block', overflow:'auto'}}>
//         <img src="https://amazinsearchbar.herokuapp.com/logo.png" style={{display:'block', maxHeight:'100%',transform:'scale(1.3)', maxWidth:'100%', marginLeft: 'auto', marginRight: 'auto'}} ></img>
//         </div>

//         <div style={{height:'100px', width:'85%', display:'inline-block', backgroundColor:'#24547C'}}>
        
//         <form style={{height: '37px', minWidth: '600px', width: '80%', float:'left', marginTop:'20px'}}>
//         <select style={{height:'100%', maxWidth:'84px', fontSize:'12px',float:'left', fontFamily: 'sans-serif', color:'#555', backgroundColor:'f3f3f3'}}>
//            {this.state.categories.map(el => (<option value={el}>{el}</option>))}
//         </select>
//         {/* <Autosuggest
//           suggestions={suggestions}
//           onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//           onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//           getSuggestionValue={getSuggestionValue}
//           renderSuggestion={renderSuggestion}
//           inputProps={inputProps}
//           theme={theme}
//         /> */}
//         <input type="text" value={this.state.value} onChange={this.handleChange} style={{fontSize:'15px',height:'100%', minWidth:'400px', width:'70%', float:'left', borderRadius:'2px', fontFamily: 'sans-serif'}}/>
//         <button onClick={this.submit} style={{height: '100%', width: '50px',  backgroundColor: '#febd69', border:'1px solid #febd69', borderRadius:'2px', float:'left'}}><img style={{maxWidth: '100%', maxHeight: '100%', padding:'2px'}}src="https://png.icons8.com/search"></img></button>
//        </form>
        

//         </div>
//         {/* <div style={{height:'100px', minWidth:'200px',border:'1px solid black'}}></div> */}
//         </div>
        
    
       

       
       
//         </>
//       )
//     }
  
//   }

//   window.Search = Search;
  // window.Example = Example;
  // ReactDOM.render(<App />, document.getElementById('searchbar'));