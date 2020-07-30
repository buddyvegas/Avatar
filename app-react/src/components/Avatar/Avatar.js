import React, { useRef, useLayoutEffect } from "react";
import AvatarSvelte from "../../libs/avatar-svelte";

const Avatar = ({ name }) => {
  const ref = useRef();

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

export default Avatar;