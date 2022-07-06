import React, { useState, useContext } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { number, string } from 'yargs';
import { GlobalContext } from './GlobalState';
import Register from './Register';
import { RegisterFormUser } from '../models/register-form-user';

// class MainAccs{
//     private accId: number;
//     private firstName: string;
//     private lastName: string;
//     private username: string;
//     private password: string;
//     private age: Date;
//     private Subscription: number;

//     constructor(accId: number, firstName: string, lastName: string, username: string, password: string, age: Date, Subscription: number){
//         this.accId = accId;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.username = username;
//         this.password = password;
//         this.age = age;
//         this.Subscription = Subscription;
//     }  
// }


export default function Settings(props: {}){
    const user = useContext(GlobalContext)
    const [MainAccData, setMainAccData] =
    useState({
        accId: undefined,
        firstName: '', 
        lastName: '', 
        username: '', 
        password: '', 
        age: '', 
        Subscription: undefined
    });
    console.log(user.user)
    // useEffect(() => {
    //     fetch(`localhost:5000/MovieApp/main/`)
    //     .then(resp => resp.json()).then(data => (
    //         console.log(data)
    //     ));

    // }, []);
    
    return (
        // const loggedInUser = user.map(({firstName, lastName, age, email, password}: RegisterFormUser) => (
            <>
            <div className = 'settingsHead'>
                <h1>Settings</h1>
            </div>
            <div className = 'Settingsbody'>
                <h2>Profile</h2>
                <p>Name: {user.user.firstName} {user.user.lastName} </p>
                <p>Username: {user.user.email}</p>
                <p>Password: {user.user.password}</p>
                <p>Age: {user.age}</p>
                <p>Subscription: </p>
            </div>
            <div className = 'settingsButton'>
                <Grid container justifyContent={"center"}>
                    <Button variant="contained" color="error" href="#contained-buttons">
                    Logout
                </Button>
                </Grid>
                
            </div>
        </>
            
        )
        // );
    //     <div>
    //     {user.map((user: RegisterFormUser) => (
    //         <><div className='settingsHead'>
    //             <h1>Settings</h1>
    //         </div><div className='Settingsbody'>
    //                 <h2>Profile</h2>
    //                 <p>Name: user.firstName {lastName} </p>
    //                 <p>Username: {email}</p>
    //                 <p>Password: {password}</p>
    //                 <p>Age: {age}</p>
    //                 <p>Subscription: </p>
    //             </div><div className='settingsButton'>
    //                 <Grid container justifyContent={"center"}>
    //                     <Button variant="contained" color="error" href="#contained-buttons">
    //                         Logout
    //                     </Button>
    //                 </Grid>

    //             </div></>
    //     ))}
            {/* <div className = 'settingsHead'>
                <h1>Settings</h1>
            </div>
            <div className = 'Settingsbody'>
                <h2>Profile</h2>
                <p>Name: </p>
                <p>Username: </p>
                <p>Password: </p>
                <p>Age: </p>
                <p>Subscription: </p>
            </div>
            <div className = 'settingsButton'>
                <Grid container justifyContent={"center"}>
                    <Button variant="contained" color="error" href="#contained-buttons">
                    Logout
                </Button>
                </Grid>
                
            </div> */}
        // </div>

    // )
}




// function useState<T>(arg0: { firstName: string; lastName: string; username: string; password: string; Age: undefined; Subscription: undefined; }): [any] {
//     throw new Error('Function not implemented.');
// }

