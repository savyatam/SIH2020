import React,{Component} from 'react';

import axios from 'axios'

class feedback extends Component {

  state = {
  trains: []
}

componentDidMount() {
  axios.get(`http://localhost:4000/feedback/`)
    .then(res => {
      const trains = res.data;
      this.setState({ trains });
    })
}

render() {
  return (
    <ul>
      { this.state.trains.map(train => <li>TrainNumber:{train.TrainNumber} Rating:{train.Rank}</li>)}
    </ul>
  )
}

}
export default feedback;
