import React from 'react';
import {Menu,Image,Dropdown} from "semantic-ui-react";
import {Link} from "react-router-dom";

const SignedInMenu = ({signOut,currentUser}) => {
    const data = [{name: "Create Event"}, {name: "My Events"}, {name: "My Network"}, {name: "My PP"}, {name: "Settings"}]
    return (
        <Menu.Item position="right">
            <Image avatar spaced="right" src='/assets/user.png' />
            <Dropdown pointing="top left" text={currentUser}>
                <Dropdown.Menu>
                    {/*<Dropdown.Item text="Create Event" icon="plus" />*/}
                    {/*<Dropdown.Item text="My Events" icon="calendar" />*/}
                    {/*<Dropdown.Item text="My Network" icon="users" />*/}
                    {/*<Dropdown.Item text="My Profile" icon="user" />*/}
                    {/*<Dropdown.Item text="Settings" as={Link} to='/settings'icon="settings" />*/}

                    {data.map( d => (
                        <Dropdown.Item text={d.name}/>
                    ))}
                    <Dropdown.Item onClick = {signOut} text="Sign Out" icon="power" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
};

export default SignedInMenu;
