import * as React from "react";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MapsPlace from 'material-ui/svg-icons/navigation/more-vert';

export class IconMenuAll extends React.Component<{}, {}> {
    render() {
        return (
            <IconMenu
                iconButtonElement={<IconButton><MapsPlace /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem primaryText="Home" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Sign out" />
            </IconMenu>
        )
    }
}