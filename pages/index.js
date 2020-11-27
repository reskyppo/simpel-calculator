import { useState } from "react";

import Button from "../components/Button";

import React, { Component } from "react";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  handleValue = (val) => {
    this.setState({ input: this.state.input + val });
  };
  handleResult = () => {
    this.setState({ input: eval(this.state.input) });
  };
  handleDeleteAll = () => {
    this.setState({ input: "" });
  };
  handleDelete = () => {
    this.setState({ input: this.state.input.slice(0, -1) });
  };

  render() {
    return (
      <div className="flex justify-center items-center pt-4 ">
        <div className="flex-row  border-yellow-900 border p-4">
          <h1 className="text-black dark:text-white text-4xl">Calculator</h1>

          <div className="pt-12">
            <div className="w-64 h-24 flex items-center justify-end">
              <p className="text-black dark:text-white text-4xl">
                {this.state.input}
              </p>
            </div>
            <div className="flex">
              <Button
                val="C"
                className="flex-row"
                onClick={this.handleDeleteAll}
              />
              <Button
                val="⌫"
                className="flex-row"
                onClick={this.handleDelete}
              />
            </div>
            <div className="flex">
              <Button val="7" className="flex-row" onClick={this.handleValue} />
              <Button val="8" className="flex-row" onClick={this.handleValue} />
              <Button val="9" className="flex-row" onClick={this.handleValue} />
              <Button val="+" className="flex-row" onClick={this.handleValue} />
            </div>
            <div className="flex">
              <Button val="4" className="flex-row" onClick={this.handleValue} />
              <Button val="5" className="flex-row" onClick={this.handleValue} />
              <Button val="6" className="flex-row" onClick={this.handleValue} />
              <Button val="-" className="flex-row" onClick={this.handleValue} />
            </div>
            <div className="flex">
              <Button val="1" className="flex-row" onClick={this.handleValue} />
              <Button val="2" className="flex-row" onClick={this.handleValue} />
              <Button val="3" className="flex-row" onClick={this.handleValue} />
              <Button val="*" className="flex-row" onClick={this.handleValue} />
            </div>
            <div className="flex">
              <Button val="0" className="flex-row" onClick={this.handleValue} />
              <Button val="." className="flex-row" onClick={this.handleValue} />
              <Button
                val="="
                className="flex-row"
                onClick={this.handleResult}
              />
              <Button val="/" className="flex-row" onClick={this.handleValue} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
