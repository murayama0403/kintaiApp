// TouchTapEventで２回クリックされたような動きを抑制するため、
// 常にpreventDefaultを呼び出すための実装。
// 参考: https://github.com/callemall/material-ui/issues/5070

import * as React from "react"

export function forceTouchTapPreventDefault() {
    const react: any = React
    let orig = react.createElement

    react.createElement = function(this: any, type: any, props: any, ...children: any[]) {

        // only wrap native elements (string-ish `type`) which have an onTouchTap prop
        if (typeof type === "string" && props && props.onTouchTap) {

            const orig: any = props.onTouchTap;

            props = {
                ...props,
                onTouchTap: function(this: any, e: any) {
                    e.preventDefault();
                    return orig.apply(this, arguments);
                }
            }
        }

        return orig.call(this, type, props, ...children);
    }
}
