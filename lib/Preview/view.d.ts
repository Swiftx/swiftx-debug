/// <reference types="react" />
import * as React from "react";
import { Props } from "./props";
/**
 * 视图组件
 */
export declare class View extends React.Component<Props> {
    renderStyle(): {
        margin: string;
        paddingTop: string;
    };
    render(): JSX.Element;
}
