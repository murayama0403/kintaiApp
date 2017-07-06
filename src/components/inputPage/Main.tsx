import IconButton from "material-ui/IconButton"
import IconMenu from "material-ui/IconMenu"
import MenuItem from "material-ui/MenuItem"
import RaisedButton from "material-ui/RaisedButton"
import SelectField from "material-ui/SelectField"
import Sunny from "material-ui/svg-icons/image/wb-sunny"
import Hotel from "material-ui/svg-icons/maps/hotel"
import RestrantIcon from "material-ui/svg-icons/maps/restaurant-menu"
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert"
import WorkIcon from "material-ui/svg-icons/notification/airline-seat-recline-normal"
import PlacesFreeBreakfast from "material-ui/svg-icons/places/free-breakfast"
import PlacesHotTub from "material-ui/svg-icons/places/hot-tub"
import TextField from "material-ui/TextField"
import * as React from "react"
import { HOLIDAYS, SPECIAL_NOTES } from "../../constants/Holidays"
import { RestNumber } from "../../constants/KintaiConstants"
import { RootProps } from "../../RootProps"
import { getDayKintaiOrDefault, isRestAvailable } from "../../utils/KintaiUtils"
import { undefinedToEmpty } from "../../utils/Strings"
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

        const specialNoteMenus = []
        specialNoteMenus.push(<MenuItem key="" value="" primaryText="" />)
        for (const specialNote of SPECIAL_NOTES) {
            specialNoteMenus.push(<MenuItem
                key={specialNote.text}
                value={specialNote.text}
                primaryText={specialNote.text} />)
        }

        const holidayMenus = []
        holidayMenus.push(<MenuItem key="" value={undefined} primaryText="" />)
        for (const holiday of HOLIDAYS) {
            holidayMenus.push(<MenuItem
                key={holiday.value}
                value={holiday.value}
                primaryText={holiday.value + ": " + holiday.text} />)
        }

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

                <div style={{ display: showRest2 ? "" : "none" }} >
                    <span style={{ display: showRest2 ? "" : "none" }}>
                        <RaisedButton
                            label={<div style={{ textAlign: "center" }}>17:45<br />18:00</div>}
                            icon={rest2Icon}
                            secondary={currentKintai.noRest2}
                            onTouchTap={() => this.handleRestToggle(2)}
                            style={{ height: "70px", margin: 5 }} />
                    </span>
                    <span style={{ display: showRest3 ? "" : "none" }}>
                        <RaisedButton
                            label={<div style={{ textAlign: "center" }}>19:30<br />20:00</div>}
                            icon={rest3Icon}
                            secondary={currentKintai.noRest3}
                            onTouchTap={() => this.handleRestToggle(3)}
                            style={{ height: "70px", margin: 5 }} />
                    </span>
                    <span style={{ display: showRest4 ? "" : "none" }}>
                        <RaisedButton
                            label={<div style={{ textAlign: "center" }}>22:00<br />22:15</div>}
                            icon={rest4Icon}
                            secondary={currentKintai.noRest4}
                            onTouchTap={() => this.handleRestToggle(4)}
                            style={{ height: "70px", margin: 5 }} />
                    </span>
                    <span style={{ display: showRest5 ? "" : "none" }}>
                        <RaisedButton
                            label={<div style={{ textAlign: "center" }}>02:30<br />03:00</div>}
                            icon={rest5Icon}
                            secondary={currentKintai.noRest5}
                            onTouchTap={() => this.handleRestToggle(5)}
                            style={{ height: "70px", margin: 5 }} />
                    </span>
                    <span style={{ display: showRest6 ? "" : "none" }}>
                        <RaisedButton
                            label={<div style={{ textAlign: "center" }}>08:30<br />09:00</div>}
                            icon={rest6Icon}
                            secondary={currentKintai.noRest6}
                            onTouchTap={() => this.handleRestToggle(6)}
                            style={{ height: "70px", margin: 5 }} />
                    </span>
                </div>

                <SelectField
                    hintText="休暇"
                    value={currentKintai.holiday}
                    onChange={(_, __, value) => this.handleHolidayChange(value)}
                    style={{ width: "200px" }}
                    labelStyle={{ height: "48px" }}
                >
                    {holidayMenus}
                </SelectField>

                <br />

                <TextField
                    multiLine={false}
                    fullWidth={false}
                    hintText="特記事項"
                    value={undefinedToEmpty(currentKintai.specialNote)}
                    onChange={(_, value) => this.handleSpecialNoteChange(value)} />

                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    onChange={(_, value) => this.handleSpecialNoteChange(value)}
                    useLayerForClickAway={true} >
                    {specialNoteMenus}
                </IconMenu>

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

    private handleSpecialNoteChange(value: string) {
        this.props.actions.inputSpecialNote(this.props.value.view.currentDate, value)
    }

    private handleHolidayChange(value?: number) {
        this.props.actions.selectHoliday(this.props.value.view.currentDate, value)
    }

    private handleMemoChange(value: string) {
        this.props.actions.inputMemo(this.props.value.view.currentDate, value)
    }

    private handleRestToggle(restNumber: RestNumber) {
        this.props.actions.toggleRest(this.props.value.view.currentDate, restNumber)
    }
}
