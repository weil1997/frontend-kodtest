import React from "react";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    // <div className="app-header">
    //   <div>
    //     <img
    //       src="https://avatars3.githubusercontent.com/u/37439169?s=200&v=4"
    //       alt="Bild 1"
    //       className="logo-image1"
    //     />
    //     <h1 className="dev-app">DEV APP</h1>
    //   </div>
    //   <img
    //     src="https://files.startdeliver.com/accid-aa909493a6679e232a361e2a501179b4/611d57c1d8af8f2671ed9c25fb38331b"
    //     alt="Bild 2"
    //     className="logo-image2"
    //   />
    // </div>

    <div className="flex w-full justify-between items-center border-b-2 border-[#a4aabd]">
      {/* Logo */}
      <div className="flex items-center gap-5">
        <img
          className="w-20 h-20"
          src="https://avatars3.githubusercontent.com/u/37439169?s=200&v=4"
          alt="Bild 1"
        />
        <h1 className="text-3xl text-[#1c2c54]">DEV APP</h1>
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customer">Customer</Link>
          </li>
        </ul>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-5">
        <img
          className="w-10 h-10 rounded-full"
          src="https://files.startdeliver.com/accid-aa909493a6679e232a361e2a501179b4/611d57c1d8af8f2671ed9c25fb38331b"
          alt="Bild 1"
        />
        <div>
          <p className="font-bold">John Zoidberg</p>
          <p className="text-sm text-[#a4aabd]">Customer Success Hero</p>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
