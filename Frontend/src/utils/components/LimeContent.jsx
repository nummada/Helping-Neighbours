import React, { useMemo, useState } from "react";

const LimeContent = (props) => {
    var content = props.content
    return (
        <div className="lime-page">
          {content}
        </div>
      );
}


export default LimeContent;
