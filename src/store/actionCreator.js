import {CHANGE_INPUT_VALUE,ADD_ITEM_LIST,DELETE_ITEM} from './actionType';

export const getInputChangeAction = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value
});
export const getAddItemAction = ()=>({
    type: ADD_ITEM_LIST,
});
export const getDeleteItemAction = (index)=>({
    type: DELETE_ITEM,
    index
});