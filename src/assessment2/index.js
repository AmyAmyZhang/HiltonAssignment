import React from 'react';
import CheckBox from './Checkbox';
import './index.scss';

export default class CheckForm extends React.Component {

    constructor(props) {
        super(props);
        // State 'show' is to add class to component Checkbox, then it will 
        // change background when you check or uncheck; 'check' is to define
        // if the room can be selected
        this.state = {
            show: ['true','true','true'],
            check: ['true', '', '', ''],
            // seleted1: [1, 0],
            // selected2: [1, 0], 
            // selected3: [1, 0]
        }
        this.handleClick = this.handleClick.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // change the state if click one block
    handleClick(title, check) {
        let number = parseInt(title);
        let checkedChange = check === 'true' ? '' : 'true';

        let newChecked = this.state.check.map ((item, index) => {
            // if the room has been checked, then the rooms before it will be checked
            if (checkedChange === 'true') {
                if (index < number && index > 0) {
                    return checkedChange;
                } else if (index === 0) {
                    return 'true';
                } else {
                    return item;
                }
            } 
            // if the room has been unchecked, then the rooms after it will be unchecked
            else {
                if ((index + 1) >= number) {
                    return '';
                }  else {
                    return item;
                }
            }
            
        })
        // To set the state to change the display
        this.setState({
            check: newChecked,
        })    
    }

    // handleChange1 (value, title) {
    //     let number = parseInt(title);
    //     let index = number - 1; 
    //     console.log(value);
    // }

    // handleChange2 (value, title) {
    //     console.log(value);
    // }

    // It click the submit button, the state will be reset and the value will be stored
    handleSubmit () {
        this.setState({
            show: ['true','true','true'],
            check: ['true', '', '', ''],
        })
    }

    render() {
        const { show, check } = this.state;
        return (
            <div>
                <h2>Assessment 2</h2>
                <div className="checkform">
                    <CheckBox  title='1' display = 'inline' check = {check[0]} />
                    <CheckBox  title='2' box = 'true' display = {show[0]} check= {check[1]} 
                        handleClick={this.handleClick} />
                    <CheckBox  title='3' box = 'true' display = {show[1]} check= {check[2]}  
                        handleClick={this.handleClick} />
                    <CheckBox  title='4' box = 'true' display = {show[2]} check= {check[3]}  
                        handleClick={this.handleClick} />
                </div>
                <input className="submit" type="submit"  value="Submit"  onClick={this.handleSubmit}/>
            </div>
        );
    }
}