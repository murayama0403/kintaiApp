import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import * as React from "react"
import * as ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {HashRouter} from "react-router-dom"
import * as injectTapEventPlugin from "react-tap-event-plugin"
import {Root} from "./components/root/Root"
import store from "./Store"
import {connect} from "./utils/Connector"
import {forceTouchTapPreventDefault} from "./utils/FixReactTouchTap"

injectTapEventPlugin()
forceTouchTapPreventDefault()

const RootComponent = connect(Root)

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <HashRouter>
                <RootComponent />
            </HashRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById("app"),
)
