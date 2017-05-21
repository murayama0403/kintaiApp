// TouchTapEventで２回クリックされたような動きを抑制するため、
// 常にpreventDefaultを呼び出すための実装。
// 参考: https://github.com/callemall/material-ui/issues/5070

import * as React from "react"

export function forceTouchTapPreventDefault() {
    const react: any = React
    const orig = react.createElement

    // 型を厳密にするTypeScriptでthisの型を定義する時には先頭パラメータとしてthisを使う
    // 参考: https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
    react.createElement = function(this: any, type: any, props: any, ...children: any[]) {

        // only wrap native elements (string-ish `type`) which have an onTouchTap prop
        if (typeof type === "string" && props && props.onTouchTap) {

            const onTouchTap: any = props.onTouchTap

            props = {
                ...props,
                // thisによる型定義は変数名を変えられないので仕方ないのでtslintを無視設定する
                // tslint:disable-next-line
                onTouchTap(this: any, e: any) {
                    e.preventDefault()
                    return onTouchTap.apply(this, arguments)
                },
            }
        }

        return orig.call(this, type, props, ...children)
    }
}
