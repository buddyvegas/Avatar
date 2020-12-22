import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import "../../libs/avatar";

import "./Avatar.scss";

const AvatarComponent = ({ name }) => {
  // const ref = useRef();
  // const avatar = useRef();

  // useLayoutEffect(() => {
  //   avatar.current = new Avatar({
  //     target: ref.current,
  //     props: {
  //       name,
  //     },
  //   });
  // }, []);

  // useEffect(() => {
  //   if (avatar.current) {
  //     avatar.current.update({ name });
  //   }
  // }, [name]);

  // return <div style={{ width: '60px', height: '60px' }} ref={ref}></div>;

  return (
    <div className="container">
      <div style={{ width: "60px", height: "60px" }}>
        <af-avatar name={name} />
      </div>
      <span className="label">{name}</span>
    </div>
  );
};

export default AvatarComponent;
