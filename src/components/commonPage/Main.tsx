import { TouchTapEvent } from "material-ui"
import MenuItem from "material-ui/MenuItem"
import SelectField from "material-ui/SelectField"
import TextField from "material-ui/TextField"
import * as React from "react"
import { RootProps } from "../../RootProps"

export class Main extends React.Component<RootProps, {}> {
    public render() {
        return (
            <div className="content">
                <TextField
                    hintText="部署コード"
                    value={this.props.value.kintai.person.departmentCode}
                    onChange={(_, value) => this.handleDepartmentCodeChange(value)} />
                <TextField
                    hintText="社員番号"
                    value={this.props.value.kintai.person.employeeNo}
                    onChange={(_, value) => this.handleEmployeeNoChange(value)} />
                <br />
                <TextField
                    hintText="姓"
                    value={this.props.value.kintai.person.lastName}
                    onChange={(_, value) => this.handleLastNameChange(value)} />
                <br />
                <TextField
                    hintText="名"
                    value={this.props.value.kintai.person.firstName}
                    onChange={(_, value) => this.handleFirstNameChange(value)} />
                <br />
                <SelectField
                    hintText="管理識別"
                    value={this.props.value.kintai.person.manageType}
                    onChange={(event, _, value) => this.handleManageTypeChange(event, value)}
                    labelStyle={{ height: "48px" }} >
                    <MenuItem value={""} primaryText="" />
                    <MenuItem value={"1"} primaryText="1: M等級" />
                    <MenuItem value={"2"} primaryText="2: D等級、E等級の営業職" />
                    <MenuItem value={"3"} primaryText="3: 一部契約社員" />
                    <MenuItem value={"4"} primaryText="4: 一部契約社員" />
                </SelectField>
            </div>
        )
    }

    private handleEmployeeNoChange(value: string) {
        this.props.actions.inputEmployeeNo(value)
    }

    private handleLastNameChange(value: string) {
        this.props.actions.inputLastName(value)
    }

    private handleFirstNameChange(value: string) {
        this.props.actions.inputFirstName(value)
    }

    private handleDepartmentCodeChange(value: string) {
        this.props.actions.inputDepartmentCode(value)
    }

    private handleManageTypeChange(event: TouchTapEvent, value: string) {
        event.preventDefault()
        this.props.actions.inputManageType(value)
    }

}
