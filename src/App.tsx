import React, { useState } from "react";
import Loader from "./components/Loader";
import File from "./components/File";
function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // setTimeout(() => {
  //   setIsLoading(true);
  // }, 3000);
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div>
      {/* {isLoading ? <h1>Hello World!</h1> : <Loader />} */}
      <File isTrue={isTrue} />
    </div>
  );
}

export default App;
