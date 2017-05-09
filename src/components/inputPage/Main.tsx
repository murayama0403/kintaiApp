import { TouchTapEvent } from "material-ui"
import CafeIcon from "material-ui/svg-icons/maps/local-cafe"
import RestrantIcon from "material-ui/svg-icons/maps/restaurant-menu"
import WorkIcon from "material-ui/svg-icons/notification/airline-seat-recline-normal"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import * as React from "react"
import { RootProps } from "../../RootProps"
import { getDayKintaiOrDefault } from "../../utils/KintaiUtils"
import { IN, OUT, TimeInput } from "./TimeInput"

export class Main extends React.Component<RootProps, {}> {
    public render() {
        const currentKintai = getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate)
        const rest1Icon = currentKintai.noRest1 ? <WorkIcon /> : <CafeIcon />
        const rest2Icon = currentKintai.noRest2 ? <WorkIcon /> : <RestrantIcon />
        const rest3Icon = currentKintai.noRest3 ? <WorkIcon /> : <CafeIcon />
        const rest4Icon = currentKintai.noRest4 ? <WorkIcon /> : <RestrantIcon />
        return (
            <div className="content">
                <TimeInput
                    type={IN}
                    value={currentKintai.inTime}
                    onSelected={(value) => this.handleInSelected(value)} />
                <TimeInput
                    type={OUT}
                    value={currentKintai.outTime}
                    onSelected={(value) => this.handleOutSelected(value)} />
                <RaisedButton
                    label={<div style={{textAlign:"center"}}>17:45<br />18:00</div>}
                    icon={rest1Icon}
                    secondary={currentKintai.noRest1}
                    onTouchTap={(event) => this.handleRest1Toggle(event)}
                    style={{ height: "auto", margin: 5}}/>
                <RaisedButton
                    label={<div style={{textAlign:"center"}}>18:45<br />19:00</div>}
                    icon={rest2Icon}
                    secondary={currentKintai.noRest2}
                    onTouchTap={(event) => this.handleRest2Toggle(event)}
                    style={{ height: "auto", margin: 5}}/>
                <RaisedButton
                    label={<div style={{textAlign:"center"}}>19:45<br />20:00</div>}
                    icon={rest3Icon}
                    secondary={currentKintai.noRest3}
                    onTouchTap={(event) => this.handleRest3Toggle(event)}
                    style={{ height: "auto", margin: 5}}/>
                <RaisedButton
                    label={<div style={{textAlign:"center"}}>20:45<br />21:00</div>}
                    icon={rest4Icon}
                    secondary={currentKintai.noRest4}
                    onTouchTap={(event) => this.handleRest4Toggle(event)}
                    style={{ height: "auto", margin: 5}}/>
                <TextField
                    multiLine={true}
                    fullWidth={true}
                    hintText="メモ（勤務表には反映されません）"
                    value={currentKintai.memo}
                    onChange={(_, value) => this.handleMemoChange(value)} />
            </div>
        )
    }

    private handleInSelected(value: string) {
        this.props.actions.selectIn(this.props.value.view.currentDate, value)
    }

    private handleOutSelected(value: string) {
        this.props.actions.selectOut(this.props.value.view.currentDate, value)
    }

    private handleMemoChange(value: string) {
        this.props.actions.inputMemo(this.props.value.view.currentDate, value)
    }

    private handleRest1Toggle(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.toggleRest1(this.props.value.view.currentDate)
    }
	
	private handleRest2Toggle(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.toggleRest2(this.props.value.view.currentDate)
    }
	
	private handleRest3Toggle(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.toggleRest3(this.props.value.view.currentDate)
    }

    private handleRest4Toggle(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.toggleRest4(this.props.value.view.currentDate)
    }

}
