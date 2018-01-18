import * as React from "react";
import { Props } from "./props";

const style = require('./style.css');

/**
 * 视图组件
 */
export class View extends React.Component<Props> {

    public renderStyle(){
        let style = {};
        if ('height' in this.props)
            style["height"] = this.props.height;
        if (undefined !== this.props.width)
            style["width"] = this.props.width;
        if (undefined !== this.props.top)
            style["marginTop"] = this.props.top;
        return style;
    }

    public render() {
        let options = this.renderStyle();
        return (
            <div className={style.container} style={options}>
                {this.props.children}
            </div>
        );
    }

}