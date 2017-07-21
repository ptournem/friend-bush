import uuid from 'uuid/v1';

/*
 * Action types
 */

// Friends
export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

// Payements
export const ADD_PAYEMENT = 'ADD_PAYEMENT';
export const SET_PAYEMENT_COST = 'SET_PAYEMENT_COST';
export const SET_PAYEMENT_LABEL = 'SET_PAYEMENT_LABEL';
export const SET_PAYEMENT_PAID_BY = 'SET_PAYEMENT_PAID_BY';
export const REMOVE_PAYEMENT = 'REMOVE_PAYEMENT';

// Shares
export const ADD_SHARE = 'ADD_SHARE';
export const SET_SHARE_WEIGHT = 'SET_SHARE_WEIGHT';
export const REMOVE_SHARE = 'REMOVE_SHARE';

/**
 * other constant
 */

const FRIEND_NAME = 'friend';
const PAYEMENT_NAME = 'payement';
const SHARE_NAME = 'share';



/*
 * Action creators
 */
const actionCreator = (type,payLoad) => {
  return {
    type : type,
    payLoad : payLoad
  };
};

// Friends
export const addFriend = name  => {
    return actionCreator(ADD_FRIEND,{
	  id : FRIEND_NAME + "_" + uuid(),
      name : name
    });
};

export const removeFriend = id  => {
    return actionCreator(REMOVE_FRIEND,{
        id : id
    });
};

// Payements
export const addPayement = (label,cost)=> {
  return actionCreator(ADD_PAYEMENT,{
	id : PAYEMENT_NAME + "_" + uuid(),
    label : label,
    cost:cost
  });
};

export const setPayementCost = (id,cost)=> {
  return actionCreator(SET_PAYEMENT_COST,{
    id : id,
    cost:cost
  });
};

export const setPayementLabel = (id,label)=> {
  return actionCreator(SET_PAYEMENT_LABEL,{
    id : id,
    label : label
  });
};

export const setPayementPaidBy = (id,paidById)=> {
  return actionCreator(SET_PAYEMENT_LABEL,{
    id : id,
    paidById : paidById
  });
};

export const removePayement = (id)=> {
  return actionCreator(REMOVE_PAYEMENT,{
    id : id
  });
};

export const addShare = (owedById,weight)=> {
  return actionCreator(ADD_SHARE,{
	id: SHARE_NAME + "_" + uuid(),
    owedById : owedById,
	weight: weight
  });
};

export const setShareWeight = (id,weight)=> {
  return actionCreator(SET_SHARE_WEIGHT,{
    id : id,
	weight: weight
  });
};

export const removeShare = (id)=> {
  return actionCreator(REMOVE_SHARE,{
    id : id
  });
};
