import React,{Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class feedback extends Component {
  constructor() {
      super();

      this.state = {
        TrainNumber:null,
        Punctuality:1,
        Cleanliness:1,
        Pantry:1,
        Overall:1,
        Issues:""
      };
    }


    onStarClickPunctuality(nextValue, prevValue, name) {

      this.setState({Punctuality: nextValue});
    }
    onStarClickCleanliness(nextValue, prevValue, name) {
      this.setState({Cleanliness: nextValue});
    }
    onStarClickPantry(nextValue, prevValue, name) {
      this.setState({Pantry: nextValue});
    }
    onStarClickOverall(nextValue, prevValue, name) {
      this.setState({Overall: nextValue});
    }
    handleSubmit=event=>{
      //event.preventDefault();
      const data={
        TrainNumber:this.state.TrainNumber,
        Punctuality:this.state.Punctuality,
        Cleanliness:this.state.Cleanliness,
        Pantry:this.state.Pantry,
        Overall:this.state.Overall,
        Issues:this.state.Issues
      };
     axios.post('http://localhost:4000/feedback/fillFeedback',data)
      .then(data=>{
        console.log(data);
        toast.success('feedback noted');
      })
      .catch(err=>{
        console.log(err);
        toast.error('Fill the train number');
      });
    };
    ChangeText=e=>{
      console.log(e.target.value);
      this.setState({Issues:e.target.value})
    }
    onChangeTrainNo=e=>{
      console.log(e.target.value);
      this.setState({TrainNumber:e.target.value})
    }

    render() {
      const { Punctuality,Cleanliness,Pantry,Overall } = this.state;

      return (
        <div>

        <input
          type="text"
          name="TrainNumber"
          placeholder="Train Number"
          onChange={this.onChangeTrainNo}
        /><br/>
          Punctuality: <StarRatingComponent
            name="Punctuality"
            starCount={5}
            value={Punctuality}
            onStarClick={this.onStarClickPunctuality.bind(this)}
          />
          <br/>
          Cleanliness: <StarRatingComponent
            name="Cleanliness"
            starCount={5}
            value={Cleanliness}
            onStarClick={this.onStarClickCleanliness.bind(this)}
          />
          <br/>
          Pantry:
          <StarRatingComponent
            name="Pantry"
            starCount={5}
            value={Pantry}
            onStarClick={this.onStarClickPantry.bind(this)}
          />
          <br/>
          Overall Experience:
          <StarRatingComponent
            name="Overall"
            starCount={5}
            value={Overall}
            onStarClick={this.onStarClickOverall.bind(this)}
          />
          <br/>
          <textarea onChange={this.ChangeText} placeholder="Comments">
           </textarea>
          <button onClick={this.handleSubmit}>Submit</button>
          <ToastContainer/>
        </div>
      );
    }

}
export default feedback;
