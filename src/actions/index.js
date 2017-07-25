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



/**
 * [actionCreator create an action]
 * @param  {String} type    [type]
 * @param  {Object} payLoad [payLoad object]
 * @return {Object}    [Action]
 */
const actionCreator = (type,payLoad) => {
  return {
    type : type,
    payLoad : payLoad
  };
};

// Friends

/**
 * [addFriend action creator to add a friend ]
 * @param {String} name [name]
 * @return {Object}    [Action]
 */
export const addFriend = name  => {
    return actionCreator(ADD_FRIEND,{
	    id : FRIEND_NAME + "_" + uuid(),
      name : name
    });
};

/**
 * [removeFriend action creator to remove a friend]
 * @param  {String} id [friend id]
 * @return {Object}    [Action]
 */
export const removeFriend = id  => {
    return actionCreator(REMOVE_FRIEND,{
        id : id
    });
};

// Payements

/**
 * [addPayement action creator to create a payement]
 * @param {String} label [label]
 * @param {Float} cost  [cost]
 * @return {Object}    [Action]
 */
export const addPayement = ()=> {
  return actionCreator(ADD_PAYEMENT,{
	   id : PAYEMENT_NAME + "_" + uuid()
  });
};

/**
 * [setPayementCost action creator to set a payement cost]
 * @param {String} id   [payement id]
 * @param {Float} cost [cost]
 * @return {Object}    [Action]
 */
export const setPayementCost = (id,cost)=> {
  return actionCreator(SET_PAYEMENT_COST,{
    id : id,
    cost:cost
  });
};

/**
 * [setPayementLabel action creator to set a payement label]
 * @param {String} id    [payement id]
 * @param {String} label [label]
 * @return {Object}    [Action]
 */
export const setPayementLabel = (id,label)=> {
  return actionCreator(SET_PAYEMENT_LABEL,{
    id : id,
    label : label
  });
};

/**
 * [setPayementPaidBy action creator to set a payement paid by user id ]
 * @param {String} id       [payement id]
 * @param {String} paidById [Paid by user id]
 * @return {Object}    [Action]
 */
export const setPayementPaidBy = (id,paidById)=> {
  return actionCreator(SET_PAYEMENT_LABEL,{
    id : id,
    paidById : paidById
  });
};

/**
 * [removePayement action creator to remove a payement]
 * @param  {String} id [payement id]
 * @return {Object}    [Action]
 */
export const removePayement = (id)=> {
  return actionCreator(REMOVE_PAYEMENT,{
    id : id
  });
};

/**
 * [addShare action creator to create a share]
 * @param {String} payementId [payement id]
 * @param {String} owedById [owed by user id]
 * @param {int} weight   [weight]
 * @return {Object}    [Action]
 */
export const addShare = (payementId, owedById,weight)=> {
  return actionCreator(ADD_SHARE,{
	  id: SHARE_NAME + "_" + uuid(),
    owedById : owedById,
    payementId : payementId,
	  weight: weight
  });
};

/**
 * [setShareWeight action creator to update a share weight]
 * @param {String} id     [share id]
 * @param {Object} weight [share weight]
 * @return {Object}    [action]
 */
export const setShareWeight = (id,weight)=> {
  return actionCreator(SET_SHARE_WEIGHT,{
    id : id,
	weight: weight
  });
};

/**
 * [removeShare action creator to remove a share]
 * @param  {String} id [share id]
 * @return {Object}    [action]
 */
export const removeShare = (id)=> {
  return actionCreator(REMOVE_SHARE,{
    id : id
  });
};
