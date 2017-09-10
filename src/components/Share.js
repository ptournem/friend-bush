import React from 'react';

const Share = ({share, onSetWeight}) => {
  let input ;

  return(
  <td>
    <input type="text"
      value={share.get('weight')}
      className="share"
      onChange={(e)=>{
        e.preventDefault();
        if(input.value === ""){
            onSetWeight(share.get('id'),input.value);
            return ;
        }

        if(!parseInt(input.value,10)){
          return;
        }
        onSetWeight(share.get('id'),parseInt(input.value,10));
      }}
      ref={node => {input = node;}}
      />
  </td>);
}

export default Share;
