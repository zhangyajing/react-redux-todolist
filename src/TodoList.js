import React,{Component} from 'react';
import {Input,Button,List} from 'antd';
import {connect} from 'react-redux';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreator';

class TodoList extends Component {
    render() {
        const {inputValue,list,changeInputValue,addItemList,deleteItem} = this.props;

        return (
            <div style={{marginLeft:'10px'}}>
                <div>
                    <Input 
                        value={inputValue} 
                        onChange={changeInputValue}
                        placeholder="todo info" 
                    />
                    <Button
                        onClick={addItemList}
                        type="primary"
                    >提交</Button>
                </div>
                <List
                    style={{marginTop:'10px'}}
                    size="small"
                    dataSource={list}
                    renderItem={item => <List.Item onClick={deleteItem}>{item}</List.Item>}
                />
                {/* <ul>
                    {
                        list.map((item,index)=>{
                            return <li 
                                        key={index} 
                                        onClick={deleteItem}
                                    >
                                     {item}
                                    </li>
                        })
                    }
                </ul> */}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeInputValue(e){
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        addItemList(){
            const action = getAddItemAction();
            dispatch(action);
        },
        deleteItem(index){
            const action = getDeleteItemAction(index);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
