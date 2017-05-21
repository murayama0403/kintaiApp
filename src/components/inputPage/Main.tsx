import { TouchTapEvent } from "material-ui"
import RaisedButton from "material-ui/RaisedButton"
import CallHomeIcon from "material-ui/svg-icons/action/settings-phone"
import BatteryChargIcon from "material-ui/svg-icons/device/battery-charging-50"
import MorningExerciseIcon from "material-ui/svg-icons/maps/directions-run"
import CafeIcon from "material-ui/svg-icons/maps/local-cafe"
import RestrantIcon from "material-ui/svg-icons/maps/restaurant-menu"

import WorkIcon from "material-ui/svg-icons/notification/airline-seat-recline-normal"
import TextField from "material-ui/TextField"
import * as React from "react"
import { RootProps } from "../../RootProps"
import { getDayKintaiOrDefault } from "../../utils/KintaiUtils"
import { IN, OUT, TimeInput } from "./TimeInput"

export class Main extends React.Component<RootProps, {}> {
    public render() {
        const currentKintai = getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate)
        const restButtonStyle = { height: "70px", margin: 5}

        const rest2Icon = currentKintai.noRest2 ? <WorkIcon /> : <CafeIcon />
        const rest3Icon = currentKintai.noRest3 ? <WorkIcon /> : <RestrantIcon />
        const rest4Icon = currentKintai.noRest4 ? <WorkIcon /> : <CallHomeIcon />
        const rest5Icon = currentKintai.noRest5 ? <WorkIcon /> : <BatteryChargIcon />
        const rest6Icon = currentKintai.noRest6 ? <WorkIcon /> : <MorningExerciseIcon />

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
             
                <div>
                    <RaisedButton
                        label={<div style = {{textAlign: "center"}}>17:45<br />18:00</div>}
                        icon={rest2Icon}
                        secondary={currentKintai.noRest2}
                        onTouchTap={(event) => this.handleRest2Toggle(event)}
                        style={restButtonStyle}/>
                   <RaisedButton
                        label={<div style = {{textAlign: "center"}}>19:30<br />20:00</div>}
                        icon={rest3Icon}
                        secondary={currentKintai.noRest3}
                        onTouchTap={(event) => this.handleRest3Toggle(event)}
                        style={restButtonStyle}/>
                    <RaisedButton
                        label={<div style = {{textAlign: "center"}}>22:30<br />23:00</div>}
                        icon={rest4Icon}
                        secondary={currentKintai.noRest4}
                        onTouchTap={(event) => this.handleRest4Toggle(event)}
                        style={restButtonStyle}/>
                    <RaisedButton
                        label={<div style = {{textAlign: "center"}}>02:30<br />03:00</div>}
                        icon={rest5Icon}
                        secondary={currentKintai.noRest5}
                        onTouchTap={(event) => this.handleRest5Toggle(event)}
                        style={restButtonStyle}/>
                    <RaisedButton
                        label={<div style = {{textAlign: "center"}}>8:30<br />9:00</div>}
                        icon={rest6Icon}
                        secondary={currentKintai.noRest6}
                        onTouchTap={(event) => this.handleRest6Toggle(event)}
                        style={restButtonStyle}/>
                </div>
                        	
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

    private handleRest2Toggle(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.toggleRest(this.props.value.view.currentDate, 2)
    }

    private handleRest3Toggle(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.toggleRest(this.props.value.view.currentDate, 3)
    }

    private handleRest4Toggle(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.toggleRest(this.props.value.view.currentDate, 4)
    }

    private handleRest5Toggle(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.toggleRest(this.props.value.view.currentDate, 5)
    }

    private handleRest6Toggle(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.toggleRest(this.props.value.view.currentDate, 6)
    }

    private handleMemoChange(value: string) {
        this.props.actions.inputMemo(this.props.value.view.currentDate, value)
    }

}
