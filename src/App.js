import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import UserForm from './Components//UserForm.js';
import Feedback from './Components/feedback';
import TrainRank from './Components/TrainRank';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>

        <BrowserRouter>

          <Route exact path="/"><UserForm/></Route>
          <Route path="/feedback"><Feedback/></Route>
          <Route path="/rank"><TrainRank/></Route>
        </BrowserRouter>

      </div>


    );
  }
}
export default App;
