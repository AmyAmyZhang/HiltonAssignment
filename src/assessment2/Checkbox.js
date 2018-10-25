import React from 'react';
import './index.scss';

export default class CheckBox extends React.Component {

    render() {
        const { title, box, check} = this.props;
        const display  = check === 'true' ? '' : 'true';
        return (
            <div className = {'checkbox' + ( check === 'true' ? '' : ' checkbox_disabled')}>
                <div className="checkbox_title">
                    { box ?  
                        <input type="checkbox" value={title} checked={check} onClick ={() => this.props.handleClick(title, check)}/>
                        : '' 
                    }
                    <h3>Room {title}</h3> 
                </div>
                
                <div className="checkbox_side">
                    <div>
                        <p style={{marginBottom: '0px'}}>Adult</p>
                        <p style={{marginTop: '0px', marginBottom: 0}}>(18+)</p>
                        <select style={{marginTop: '5px'}}  >
                            <option name="number" value="1" disabled={display} selected={display} >1</option>
                            <option name="number" value="2" disabled={display} >2</option>
                        </select>
                    </div>
                    <div>
                        <p style={{marginBottom: '0px'}}>Children</p>
                        <p style={{marginTop: '0px', marginBottom: 0}}>(0-17)</p>
                        <select style={{marginTop: '5px'}} >
                            <option key="0" value="0" disabled={display} selected={display} >0</option>
                            <option key="1" value="1" disabled={display}  >1</option>
                            <option key="2" value="2" disabled={display}  >2</option>
                        </select>
                    </div>
                </div>
                
            </div>
        );
    }
}