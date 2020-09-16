import React, { useRef, useLayoutEffect } from "react";
// import { Avatar } from '../../libs/avatar';
import AvatarSvelte from '../../libs/avatar';
// import { test } from '../../libs/avatar';

const AvatarComponent = ({ name }) => {
  const ref = useRef();

  // test();

  // console.log(AvatarSvelte);

  useLayoutEffect(() => {
    new AvatarSvelte({
      target: ref.current,
      props: {
        name
      }
    });
  }, []);

  return <span ref={ref}></span>;
};

export default AvatarComponent;