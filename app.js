//const heading = React.createElement(
   // 'h1',
    //{ id:'abc'},
    //'This is a heading.'
//);
//const heading = <h1 id='abc'>This is a heading</h1>

//ReactDOM.render(
    //heading,
    //document.getElementById('react-container')
//);

//const paragraph = React.createElement(
    //'p',
   // null,
    //'This is a test paragraph which is created by React. This paragraph has no attribute and is contained inside a div which is also created by React.'
//);

//const paragraph = <p>This is a test paragraph which is created by React. 
//This paragraph has no attribute and is contained inside a div which is also created by React.</p>

//const box = React.createElement(
   // 'div',
    //{ className: 'box'},
   // heading,
    //paragraph,
//);

//const box = (
    //<div className='box'>
       // <h1 id='abc'>This is a heading</h1>
        //<p>This is a test paragraph which is created by React. 
       // This paragraph has no attribute and is contained inside a div which is also created by React.</p>

    //</div>
//);


//const Box = (props) => {
class Box extends React.Component {
    state = {color: "black"};
    //changColor(color) {
        //console.log(color);
    //}

    //changeColor(color) {
        //this.state.color =color;
    //}
    changeColor(color) {
        this.setState({color:color});
    }
    render(){
    return (
        <div className='box'>
        <h1 className = {this.state.color}>{this.props.heading}</h1>
        <p>This is a test paragraph which is created by React. 
        This paragraph has no attribute and is contained inside a div which is also created by React.</p>
        <button onClick={()=>this.changeColor("red")}>Red</button>
        <button onClick={()=>this.changeColor("yellow")}>Yellow</button>
        <button onClick={()=>this.changeColor("blue")}>Blue</button>
        <button onClick={()=>this.changeColor("green")}>Green</button>
        </div>

        );
    }
};

const App = () => {
    return (
        <div className='row'>
            <div className='col'>
                <Box heading='First Heading'/>
            </div>
            <div className='col'>
                <Box heading='Second Heading'/>
            </div>
            <div className='col'>
                <Box heading='Third Heading'/>
            </div>
            <div className='col'>
                <Box heading='Fourth Heading'/>
            </div>
        </div>
          
        
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('react-container')
);

//ReactDOM.render(
   // <Box />,

    //document.getElementById('react-container')
//);