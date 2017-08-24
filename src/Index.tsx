import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import * as React from "react"
import * as ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {HashRouter} from "react-router-dom"
import {Root} from "./components/root/Root"
import store from "./Store"
import {connect} from "./utils/Connector"

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
