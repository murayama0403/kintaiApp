import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import * as React from "react"
import * as ReactDOM from "react-dom"
import {connect, Provider} from "react-redux"
import {hashHistory, IndexRoute, Route, Router} from "react-router"
import {syncHistoryWithStore} from "react-router-redux"
import * as injectTapEventPlugin from "react-tap-event-plugin"
import {Dispatch} from "redux"
import {InputPage} from "./components/inputPage/InputPage"
import {ListPage} from "./components/listPage/ListPage"
import {Root} from "./components/root/Root"
import {SendPage} from "./components/sendPage/SendPage"
import {DispatchActions} from "./DispatchActions"
import store from "./Store"

injectTapEventPlugin()

const connector = connect(
    (store: any) => ({ value: store }),
    (dispatch: Dispatch<any>) => ({ actions: new DispatchActions(dispatch) }),
)

const RootComponent = connector(Root)
const InputPageComponent = connector(InputPage)
const ListPageComponent = connector(ListPage)
const SendPageComponent = connector(SendPage)

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history}>
                <Route path="/" component={RootComponent}>
                    <Route path="/list" component={ListPageComponent} />
                    <Route path="/send" component={SendPageComponent} />
                    <IndexRoute component={InputPageComponent} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById("app"),
)
