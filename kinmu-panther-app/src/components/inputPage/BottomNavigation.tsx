import * as React from "react"
import FontIcon from 'material-ui/FontIcon';
import {} from 'material-ui/BottomNavigation';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionPermContactCalendar from 'material-ui/svg-icons/action/perm-contact-calendar';
import SvgIcon from 'material-ui/SvgIcon';
import {DatePickers} from './Calendar';

const nearbyIcon = <IconLocationOn />;
const calendarIcon = <ActionPermContactCalendar/>;
const iconStyles = {
  marginRight: 24,
};
const HomeIcon = (props:any) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

export class BottomNavi extends React.Component<{}, {}> {
    state = {
        selectedIndex: 0,
    };

    select = (index:any) => this.setState({selectedIndex: index});
  
    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Home"
                        icon={<HomeIcon style={iconStyles} />}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Calendar"
                        icon={calendarIcon}
                        onTouchTap={() => this.select(1)}
                        onClick={function(){}}
                    />
                    <BottomNavigationItem
                        label="Nearby"
                        icon={nearbyIcon}
                        onTouchTap={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        )
    }
}