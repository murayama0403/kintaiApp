import * as React from "react"
import {Route, Switch} from "react-router"
import { RootProps } from "../../RootProps"
import {connect} from "../../utils/Connector"
import { FooterTab } from "../common/FooterTab"
import {CommonPage} from "../commonPage/CommonPage"
import {InputPage} from "../inputPage/InputPage"
import {ListPage} from "../listPage/ListPage"
import {ProjectPage} from "../projectPage/ProjectPage"
import {SendPage} from "../sendPage/SendPage"
import { SendStatus } from "./SendStatus"

const ListPageComponent = connect(ListPage)
const CommonPageComponent = connect(CommonPage)
const ProjectPageComponent = connect(ProjectPage)
const SendPageComponent = connect(SendPage)
const InputPageComponent = connect(InputPage)

export class Root extends React.Component<RootProps, {}> {

    public render() {
        return (
            <div>
                <Switch>
                    <Route path="/list" component={ListPageComponent} />
                    <Route path="/common" component={CommonPageComponent} />
                    <Route path="/project" component={ProjectPageComponent} />
                    <Route path="/send" component={SendPageComponent} />
                    <Route component={InputPageComponent} />
                </Switch>
                <SendStatus {...this.props} />
                <FooterTab {...this.props} />
            </div>
        )
    }
}
