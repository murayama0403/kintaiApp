import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from "./Components/App";
import { InputPage } from "./components/inputPage/InputPage"
import { ListPage } from "./components/listPage/ListPage"
import store from "./Store";
import { DispatchActions } from "./DispatchActions";
import { Provider, connect } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Dispatch } from "redux";
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as moment from 'moment'
import 'moment/locale/ja'

injectTapEventPlugin()

moment.locale('ja')

const connector = connect(
    (store: any, ownProps: any) => { return {
            value: store,
            location: ownProps.location
    }},
    (dispatch: Dispatch<any>) => { return { actions: new DispatchActions(dispatch) } }
)

const AppComponent = connector(App)
const InputPageComponent = connector(InputPage)
const ListPageComponent = connector(ListPage)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history}>
                <Route path="/" component={AppComponent}>
                    <IndexRoute component={InputPageComponent} />
                    <Route path="list" component={ListPageComponent} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('app')
);