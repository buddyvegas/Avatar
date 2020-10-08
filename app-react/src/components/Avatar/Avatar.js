import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import Avatar from "../../libs/avatar";

const AvatarComponent = ({ name }) => {
  const ref = useRef();
  const avatar = useRef();

  useLayoutEffect(() => {
    avatar.current = new Avatar({
      target: ref.current,
      props: {
        name,
      },
    });
  }, []);

  useEffect(() => {
    if (avatar.current) {
      avatar.current.update({ name });
    }
  }, [name]);

  return <span ref={ref}></span>;
};

export default AvatarComponent;
