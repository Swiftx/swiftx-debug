import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { View } from "./view";

ReactDOM.render(
    <View height={100} width={100} >
        <div style={{
            background : "#eee",
            width : "100%",
            height : "100%",
            lineHeight : "50px",
            textAlign : "center"
        }}>模拟组件</div>
    </View>,
    document.getElementById('root')
);