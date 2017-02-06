import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InputPage } from "./components/inputPage/InputPage"
import { ListPage } from "./components/listPage/ListPage"
import { SendPage } from "./components/sendPage/SendPage"
import store from "./Store";
import { DispatchActions } from "./DispatchActions";
import { Provider, connect } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Dispatch } from "redux";
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as moment from 'moment'
import 'moment/locale/ja'

injectTapEventPlugin()

moment.locale('ja')

const connector = connect(
    (store: any) => { return { value: store } },
    (dispatch: Dispatch<any>) => { return { actions: new DispatchActions(dispatch) } }
)

const InputPageComponent = connector(InputPage)
const ListPageComponent = connector(ListPage)
const SendPageComponent = connector(SendPage)

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history}>
                <Route path="/" component={InputPageComponent} />
                <Route path="/list" component={ListPageComponent} />
                <Route path="/send" component={SendPageComponent} />
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('app')
);