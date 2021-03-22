
import './App.css';
import cal from './cal.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ThemedDigitalClock from 'themed-digital-clock';



function App() {

 


  return (

    <div id="background" className="aa">
      <div className="App">
        <div className="clock">


          <img width="60%" id="cal" src={cal} />

          <ThemedDigitalClock
            description="Mark The Date & Fill the Form "
            timezoneName="India/New_Delhi"
            useDarkTheme={true}
            size={200}

          />

        </div>
      </div>
      <div className="form">
        <form type="submit">
          <TextField
            id="a"
            label="Enter Name"
            type="name"
            autoComplete="current-password"
          />
          <br />
          <TextField 
            id="b"
            label="Enter Branch"
            type="name"
            autoComplete="current-password"
          />
          <br />
          <TextField
            id="c"
            label="Enter Year"
            type="name"
            autoComplete="current-password"
          />
          <br />
          <TextField
            id="d"
            label="Enter Reg Number"
            type="name"
            autoComplete="current-password"
          /><br />
          <TextField
            id="e"
            label="Enter Qualifications"
            type="name"
            autoComplete="current-password"
          />
        <br/>
        <br/>
        <Button variant="contained"  type="submit" color="primary">
        Submit
      </Button>


        
        </form>
      </div>



    </div>
  );
}


export default App;
