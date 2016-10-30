import * as React from "react";
import * as ons from 'onsenui';
import * as Ons from 'react-onsenui';
import {GlobalState} from "../../States";
import {DispatchActions} from "../../DispatchActions"
import {padZero} from "../../Utils"

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export class TimeDialog extends React.Component<Props, {}> {

    render() {
        const timeList = this.createTimeList()

        return (
            <Ons.Dialog isOpen={this.props.value.timeDialogShown} onCancel={this.handleOnCancel.bind(this)}  style={{maxHeight: "80%", overflow: "auto"}}>
                <Ons.List dataSource={timeList} renderRow={this.renderRow.bind(this)} />
            </Ons.Dialog>
        )
    }

    private renderRow(row: string, index: number) {
        return (
            <Ons.ListItem key={index} style={{paddingLeft: "0px", justifyContent: "center"}} onClick={() => this.handleTimeClick(row)}>
                <div className="center">
                    {row}
                </div>
            </Ons.ListItem>
        )
    }

    private handleTimeClick(time: string) {
        // TODO 
        console.log(time)
    }

    private handleOnCancel() {
        this.props.actions.hideTimeDialog()
    }

    private createTimeList(): Array<String> {
        var list: Array<String> = [];
        for (var h = 0; h < 24; h++) {
            for (var t = 0; t < 60; t += 15) {
                if ((h == 9 && t == 0)
                        || (h == 17 && t == 45)) {
                    list.push('');
                    list.push('---');
                }

                var value = padZero(h, 2) + ':' + padZero(t, 2);
                list.push(value);
            }
        }
        return list;
    }
}