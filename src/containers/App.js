import {connect} from 'react-redux';
import AppComponent from '../components/App';

const mapStateToProps = (state,ownProps) => {
	return  {};
}

const mapDispatchToProps = dispatch => {
	return {};
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
