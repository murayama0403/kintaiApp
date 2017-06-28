import { TouchTapEvent } from "material-ui"
import RaisedButton from "material-ui/RaisedButton"
import Sunny from "material-ui/svg-icons/image/wb-sunny"
import Hotel from "material-ui/svg-icons/maps/hotel"
import RestrantIcon from "material-ui/svg-icons/maps/restaurant-menu"
import WorkIcon from "material-ui/svg-icons/notification/airline-seat-recline-normal"
import PlacesFreeBreakfast from "material-ui/svg-icons/places/free-breakfast"
import PlacesHotTub from "material-ui/svg-icons/places/hot-tub"
import TextField from "material-ui/TextField"
import * as React from "react"
import { RestNumber } from "../../constants/KintaiConstants"
import { RootProps } from "../../RootProps"
import { getDayKintaiOrDefault, isRestAvailable } from "../../utils/KintaiUtils"
import { IN, OUT, TimeInput } from "./TimeInput"

export class Main extends React.Component<RootProps, {}> {
    public render() {
        const currentKintai = getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate)
        const rest2Icon = currentKintai.noRest2 ? <WorkIcon /> : <PlacesFreeBreakfast />
        const rest3Icon = currentKintai.noRest3 ? <WorkIcon /> : <RestrantIcon />
        const rest4Icon = currentKintai.noRest4 ? <WorkIcon /> : <PlacesHotTub />
        const rest5Icon = currentKintai.noRest5 ? <WorkIcon /> : <Hotel />
        const rest6Icon = currentKintai.noRest6 ? <WorkIcon /> : <Sunny />
        const showRest2 = isRestAvailable(currentKintai.outTime, 2)
        const showRest3 = isRestAvailable(currentKintai.outTime, 3)
        const showRest4 = isRestAvailable(currentKintai.outTime, 4)
        const showRest5 = isRestAvailable(currentKintai.outTime, 5)
        const showRest6 = isRestAvailable(currentKintai.outTime, 6)
        currentKintai.noRest2 = !showRest2 ? false : currentKintai.noRest2
        currentKintai.noRest3 = !showRest3 ? false : currentKintai.noRest3
        currentKintai.noRest4 = !showRest4 ? false : currentKintai.noRest4
        currentKintai.noRest5 = !showRest5 ? false : currentKintai.noRest5
        currentKintai.noRest6 = !showRest6 ? false : currentKintai.noRest6

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
                <span style={{ display: showRest2 ? "" : "none" }}>
                    <RaisedButton
                        label={<div style={{ textAlign: "center" }}>17:45<br />18:00</div>}
                        icon={rest2Icon}
                        secondary={currentKintai.noRest2}
                        onTouchTap={(event) => this.handleRestToggle(event, 2)}
                        style={{ height: "70px", margin: 5 }} />
                </span>
                <span style={{ display: showRest3 ? "" : "none" }}>
                    <RaisedButton
                        label={<div style={{ textAlign: "center" }}>19:30<br />20:00</div>}
                        icon={rest3Icon}
                        secondary={currentKintai.noRest3}
                        onTouchTap={(event) => this.handleRestToggle(event, 3)}
                        style={{ height: "70px", margin: 5 }} />
                </span>
                <span style={{ display: showRest4 ? "" : "none" }}>
                    <RaisedButton
                        label={<div style={{ textAlign: "center" }}>22:00<br />22:15</div>}
                        icon={rest4Icon}
                        secondary={currentKintai.noRest4}
                        onTouchTap={(event) => this.handleRestToggle(event, 4)}
                        style={{ height: "70px", margin: 5 }} />
                </span>
                <span style={{ display: showRest5 ? "" : "none" }}>
                    <RaisedButton
                        label={<div style={{ textAlign: "center" }}>02:30<br />03:00</div>}
                        icon={rest5Icon}
                        secondary={currentKintai.noRest5}
                        onTouchTap={(event) => this.handleRestToggle(event, 5)}
                        style={{ height: "70px", margin: 5 }} />
                </span>
                <span style={{ display: showRest6 ? "" : "none" }}>
                    <RaisedButton
                        label={<div style={{ textAlign: "center" }}>08:30<br />09:00</div>}
                        icon={rest6Icon}
                        secondary={currentKintai.noRest6}
                        onTouchTap={(event) => this.handleRestToggle(event, 6)}
                        style={{ height: "70px", margin: 5 }} />
                </span>
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

    private handleRestToggle(event: TouchTapEvent, restNumber: RestNumber) {
        event.preventDefault()
        this.props.actions.toggleRest(this.props.value.view.currentDate, restNumber)
    }
}
