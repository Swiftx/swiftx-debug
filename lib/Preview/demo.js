"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = require("react-dom");
var React = require("react");
var view_1 = require("./view");
ReactDOM.render(React.createElement(view_1.View, { height: 100, width: 100 },
    React.createElement("div", { style: {
            background: "#eee",
            width: "100%",
            height: "100%",
            lineHeight: "50px",
            textAlign: "center"
        } }, "\u6A21\u62DF\u7EC4\u4EF6")), document.getElementById('root'));
