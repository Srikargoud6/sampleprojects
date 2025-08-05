import React from "react";

type greetProps = {
  name?: string;
};

const Greet = (props: greetProps) => {
  return <div>Hello {props.name}</div>;
};

export default Greet;
