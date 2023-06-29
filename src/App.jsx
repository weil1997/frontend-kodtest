import React from "react";
import Home from "./components/home";
import Header from "./components/Header";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Customer from "./components/Customer";

export default function App() {
  return (
    <div className="flex w-[800px] flex-col gap-5">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/customer" component={Customer} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
