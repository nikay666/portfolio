import React from 'react'

const Iframe = (props) =>  {
    return (<div className={props.classes} dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

export default Iframe
