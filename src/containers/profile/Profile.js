import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import { requestRobots } from '../../actions'

const mapStateToProps = (state) => {
  let robotid = 1
  return {
    robot: state.robotsRequest.robots.find((robo) => robo.id === robotid),
    isPending: state.robotsRequest.isPending,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class Profile extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { robot, isPending } = this.props;
    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <div className="profilePage">
          { isPending || robot === undefined
          ? <p>no robot yet</p>
          : <div className="profile">
              <div className="column headshot">
                <div>
                  <img alt={robot.name} src={`//robohash.org/${robot.id}?size=200x200`} />
                </div>
                <h2>{robot.name}</h2>
              </div>
              <div className="column address">
                <h3>Address</h3>
                <p>
                  { robot.address.street },&nbsp;
                  { robot.address.suite }
                </p>
                <p>{ robot.address.city }</p>
                <p>{ robot.address.zipcode }</p>
                <a className="button" href={`mailto:${robot.email}`}>Email</a>
              </div>
            </div>
          }
        </div>
        
      </div>
    );
  }
}

Profile.propTypes = {
  robot: PropTypes.object,
  isPending: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
