import React, { useEffect, useState } from "react";

const Demo = () => {
  const [context, setContext] = useState();

  const [useeff, setUseeff] = useState();

  useEffect(() => {
    alert("call");
  }, [useeff]);
  return <div>Demo</div>;
};

export default Demo;
