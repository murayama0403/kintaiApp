import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from "material-ui/MenuItem"
import SelectField from "material-ui/SelectField"
import TextField from "material-ui/TextField"
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert"
import * as React from "react"
import { HOLIDAYS } from "../../constants/Holidays"
import { SPECIAL_NOTES } from "../../constants/SpecialNotes"
import { RootProps } from "../../RootProps"
import { getDayKintaiOrDefault } from "../../utils/KintaiUtils"
import { IN, OUT, TimeInput } from "./TimeInput"

export class Main extends React.Component<RootProps, {}> {

    public render() {
        const currentKintai = getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate)

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
                    onSelected={(event) => this.handleInSelected(event)} />
                <TimeInput
                    type={OUT}
                    value={currentKintai.outTime}
                    onSelected={(event) => this.handleOutSelected(event)} />

                <TextField
                    multiLine={false}
                    fullWidth={false}
                    hintText="特記事項"
                    value={currentKintai.specialNote}
                    onChange={(_, value) => this.handleSpecialNoteChange(value)} />

                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    onChange={(_, value) => this.handleSelectSpecialNote(value)}>
                    {specialNoteMenus}
                </IconMenu>

                <br />

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

    private handleSelectSpecialNote(value: string) {
        // TODO 自動で休暇や時刻も更新
        this.props.actions.inputSpecialNote(this.props.value.view.currentDate, value)
    }

    private handleSpecialNoteChange(value: string) {
        this.props.actions.inputSpecialNote(this.props.value.view.currentDate, value)
    }

    private handleHolidayChange(value?: number) {
        // TODO 自動で時刻も更新
        this.props.actions.selectHoliday(this.props.value.view.currentDate, value)
    }

    private handleMemoChange(value: string) {
        this.props.actions.inputMemo(this.props.value.view.currentDate, value)
    }

}
