import { TouchTapEvent } from "material-ui"
import RaisedButton from "material-ui/RaisedButton"
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

        const rest2Icon = currentKintai.noRest2 ? <WorkIcon /> : <CafeIcon />
        const rest3Icon = currentKintai.noRest3 ? <WorkIcon /> : <RestrantIcon />
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
                        label="17:45-18:00"
                        icon={rest2Icon}
                        secondary={currentKintai.noRest2}
                        onTouchTap={(event) => this.handleRest2Toggle(event)} />&nbsp;
        
                    <RaisedButton
                        label="19:30-20:00"
                        icon={rest3Icon}
                        secondary={currentKintai.noRest3}
                        onTouchTap={(event) => this.handleRest3Toggle(event)} />&nbsp;
                    <RaisedButton label="22:30-23:00" icon={<CafeIcon />} />&nbsp;
                    <RaisedButton label="2:30-3:00" icon={<CafeIcon />} />&nbsp;
                    <RaisedButton label="8:30-9:00" icon={<CafeIcon />} />&nbsp;
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
        this.props.actions.toggleRest2(this.props.value.view.currentDate)
    }

    private handleRest3Toggle(event: TouchTapEvent) {
        event.preventDefault()
        this.props.actions.toggleRest3(this.props.value.view.currentDate)
    }

    private handleMemoChange(value: string) {
        this.props.actions.inputMemo(this.props.value.view.currentDate, value)
    }

}
