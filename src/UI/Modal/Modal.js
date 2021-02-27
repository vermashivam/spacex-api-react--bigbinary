import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <React.Fragment>
    <Backdrop show = {props.show} clicked ={props.modalClosed}/>
    <div
        className = {classes.Modal}
        style = {{
        transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity : props.show ? '1' : '0',
        height : props.height ? props.height : null
        }}>
        {props.children}
    </div>
  </React.Fragment>
);

export default modal;