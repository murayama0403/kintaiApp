import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from "./Components/App";
import store from "./Store";
import { DispatchActions } from "./DispatchActions";
import { Provider, connect } from "react-redux";
import { Dispatch } from "redux";
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500, cyan700,
  pinkA200,
  deepOrange900, grey300,
  white, darkBlack, fullBlack,red500,red800,indigo500,lightBlue900
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

injectTapEventPlugin()

const AppComponent = connect(
    (store: any) => { return { value: store.kintai } },
    (dispatch: Dispatch<any>) => { return { actions: new DispatchActions(dispatch) } }
)(App);

const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: lightBlue900,
    primary2Color: cyan700,
    primary3Color: red800,
    accent1Color: deepOrange900,
    accent2Color: indigo500,
    accent3Color: red500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: grey300,
    borderColor: lightBlue900,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(white, 0.07),
    shadowColor: fullBlack,
  },
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <AppComponent />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('app')
);