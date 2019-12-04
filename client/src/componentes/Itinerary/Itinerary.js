import React, { Component } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import "./Itinerary.css";
import Card from "./card.js";

export default class Iti extends Component {
  state = {
    itinerary: [],
    hashtags: [],
    expand: false
  };

  componentDidMount() {
    this.setState({
      itinerary: this.props.itinerary,
      hashtags: this.props.itinerary.hashtags
    });
  }

  render() {
    const { itinerary, expand, hashtags } = this.state;
    return (
      <div className="containerItinerary">
        <div className="wrapperItinerary">
          <div className="profilePicture">
            <img src={itinerary.pictureId} alt="imageProfile" id="imageProfile" />
            {itinerary.author}
          </div>
          <div className="infoItinerary">
            {itinerary.title}
            <div className="inlineInfo">
              <span>Likes: {itinerary.rating}</span>
              <span>Duration: {itinerary.duration}</span>
              <span>Price: {itinerary.price}</span>
                <FormControlLabel
                  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                />
            </div>
            <div className="w-100 d-flex flex-row flex-wrap">
              {hashtags.map((hash, i) => (
                <span key={i} className="badge badge-secondary m-1">{hash}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="containerActivities">
          <div className="d-flex justify-content-center pb-2">
            <button className="btn btn-outline-info" onClick={() => this.setState({ expand: !this.state.expand })}>
              View All
          </button>
          </div>
          <div className="containerActivitiesExpand">
            {expand && <Card className="viewsImg" Activities={itinerary.activities} comments={itinerary.comments}  />}
          </div>
        </div>
      </div>
    );
  }
} 