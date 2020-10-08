import React, { useRef, useLayoutEffect } from "react";
const Avatar = require('../../libs/avatar');

const AvatarComponent = ({ name }) => {
  const ref = useRef();

  useLayoutEffect(() => {
    new Avatar({
      target: ref.current,
      props: {
        name
      }
    });
  }, []);

  return <span ref={ref}></span>;
};

export default AvatarComponent;