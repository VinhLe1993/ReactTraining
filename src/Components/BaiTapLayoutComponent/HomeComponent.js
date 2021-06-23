import React, { Component } from "react";
import ContentComponents from "./ContentComponents";
import NavigationComponent from "./NavigationComponent";
import HeaderComponents from "./HeaderComponents";
export default class HomeComponent extends Component {
  render() {
    return (
      <div classname="container-fuild">
        <div classname="row">
          <div classname="col-12">
            <HeaderComponents />

          </div>
          <div className="row">
            <div className="col-6">
              <NavigationComponent />

            </div>
            <div className="col-6">
                <ContentComponents />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
