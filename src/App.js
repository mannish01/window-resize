import React, { useEffect, useState } from "react";

export const App = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    // CleanUp
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="wrapper">
      <div className="box">
        <p>Height : {size.height}</p>
        <p>Width : {size.width}</p>
      </div>
    </div>
  );
};
export default App;
