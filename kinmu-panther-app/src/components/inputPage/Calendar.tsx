import * as React from 'react';
import DatePicker from 'material-ui/DatePicker';

export class DatePickers extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <DatePicker hintText="Portrait Dialog" />
            </div>
        )
    }
}