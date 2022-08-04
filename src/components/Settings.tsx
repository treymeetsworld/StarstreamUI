import { LoggedInUserType } from '../models/logged-in-user';
import {Navigate} from 'react-router-dom';

interface ISettingsProps {
    currentUser: LoggedInUserType | undefined
  }

export default function Settings(props: ISettingsProps){

    return (
        !props.currentUser ? <Navigate to="/login"/> :
            <>
            <div className = 'settingsHead'>
                <h1>Settings</h1>
            </div>
            <div className = 'Settingsbody'>
                <h2>Profile</h2>
                <p>Name: {props.currentUser.authFirstName} {props.currentUser.authLastName} </p>
                <p>Username: {props.currentUser.authEmail}</p>
                <p>Password: {props.currentUser.authPassword}</p>
                <p> Age: {props.currentUser.authAge.toString()} </p>
                <p>Subscription: {props.currentUser.authSubscription} </p>
            </div>
            <div className = 'settingsButton'>
            </div>
        </>
            
        )
}
