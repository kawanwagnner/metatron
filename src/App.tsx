import React from "react";
import { Routers } from "./Routes/Routes";

const App: React.FC = () => {
  // useEffect(() => {
  //   const handleContextMenu = (event: Event) => {
  //     event.preventDefault();
  //   };

  //   const handleSelectStart = (event: Event) => {
  //     event.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("selectstart", handleSelectStart);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("selectstart", handleSelectStart);
  //   };
  // }, []);

  return (
    <>
      <Routers />
    </>
  );
};

export default App;
