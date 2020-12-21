import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      fullName: "Roger Federer",
      isshow: false,
      ct: 0,
      bio: "né le 8 août 1981 à Bâle, est un joueur de tennis suisse",
      imgSrc: "/images/RogerFederer.jpg",
      profession: "Joueur de tennis",
    };
  }
  timer() {
    this.setState({
      ct: this.state.ct + 1,
    });
    if (this.state.ct < 1) {
      clearInterval(this.interval);
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.timer.bind(this), 1000);
  }
  componentWillMount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <h3>List of Famous People</h3>
        <button
          className="btn"
          onClick={() => {
            this.setState({ isshow: !this.state.isshow });
          }}
        >
          hide/show {this.state.ct}
        </button>
        {this.state.isshow == true ? (
          <div>
            <section className="handleName">
              <div key={this.state.id} className="Profile">
                <img className="img" src={this.state.imgSrc} alt="..." />
                <h1>{this.state.fullName}</h1>
                <p>{this.state.bio}</p>
                <h3>{this.state.profession}</h3>
              </div>
            </section>
          </div>
        ) : (
          <h1></h1>
        )}
      </div>
    );
  }
}
export default Profile;

