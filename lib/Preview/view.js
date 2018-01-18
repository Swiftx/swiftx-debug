"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var style = require('./style.css');
/**
 * 视图组件
 */
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    View.prototype.renderStyle = function () {
        var style = {};
        if ('height' in this.props)
            style["height"] = this.props.height;
        if (undefined !== this.props.width)
            style["width"] = this.props.width;
        if (undefined !== this.props.top)
            style["marginTop"] = this.props.top;
        return style;
    };
    View.prototype.render = function () {
        var options = this.renderStyle();
        return (React.createElement("div", { className: style.container, style: options }, this.props.children));
    };
    return View;
}(React.Component));
exports.View = View;
