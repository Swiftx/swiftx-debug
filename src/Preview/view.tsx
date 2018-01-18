import * as React from "react";
import { Props } from "./props";


/**
 * 视图组件
 */
export class View extends React.Component<Props> {

    public renderStyle(){
        let style = {
            margin: "0 auto",
            paddingTop : "30px"
        };
        if ('height' in this.props)
            style["height"] = this.props.height;
        if (undefined !== this.props.width)
            style["width"] = this.props.width;
        if (undefined !== this.props.top)
            style.paddingTop = this.props.top+'px';
        return style;
    }

    public render() {
        let options = this.renderStyle();
        return <div style={options}>{this.props.children}</div>;
    }

}