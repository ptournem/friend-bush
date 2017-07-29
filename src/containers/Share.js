import {connect} from 'react-redux';
import {setShareWeight,addShare} from '../actions';
import ShareComponent from '../components/Share';
import {fromJS} from 'immutable';

function filterShare(shares,payement,friend){
  let ret = shares.find(share => share.get('payementId') === payement && share.get('owedById') === friend);
  if(typeof ret === "undefined" ){
    return fromJS({id : null, payementId : payement, owedById : friend, weight : 0});
  }
  return ret;
}

const mapStateToProps = (state,{payementId,friendId}) => {
  return {
    share : filterShare(state.shares.allIds.map(id => state.shares.byId.get(id)),payementId,friendId),
  };
};

const mapDispatchToProps = (dispatch,{payementId,friendId}) => {
  return {
    onSetWeight : (id,weight) => {
      if(id===null){
          dispatch(addShare(payementId,friendId,weight));
      } else {
          dispatch(setShareWeight(id,weight));
      }
    }
  };
};

const Share = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareComponent);

export default Share;
