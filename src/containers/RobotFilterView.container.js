import { connect } from 'react-redux'
import { setSearchTerm, requestRobots } from '../actions'
import CardFilterView from '../components/CardFilterView'

const mapStateToProps = (state) => {
  const searchTerm = state.robotsSearch.searchTerm
  const filteredRobots = state.robotsRequest.robots.filter(
    robot => robot.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  return {
    searchTerm,
    robots: filteredRobots,
    isPending: state.robotsRequest.isPending,
  }
}

const mapDispatchToProps = dispatch => ({
  onSearchChange: evt => dispatch(setSearchTerm(evt.target.value)),
  getRobots: () => { dispatch(requestRobots()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(CardFilterView)
