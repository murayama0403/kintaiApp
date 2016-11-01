import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from "./Components/App";
import store from "./Store";
import { DispatchActions } from "./DispatchActions";
import { Provider, connect } from "react-redux";
import { Dispatch } from "redux";
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin()

const AppComponent = connect(
    (store: any) => { return { value: store.kintai } },
    (dispatch: Dispatch<any>) => { return { actions: new DispatchActions(dispatch) } }
)(App);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <AppComponent />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('app')
);