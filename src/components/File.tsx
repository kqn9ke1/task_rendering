import React from "react";
import "./File.css";
interface Props {
  isTrue: boolean;
}

const File: React.FC<Props> = ({ isTrue }) => {
  return (
    <div>{isTrue ? <h1>This is the true</h1> : <h1>This is the false</h1>}</div>
  );
};

export default File;
