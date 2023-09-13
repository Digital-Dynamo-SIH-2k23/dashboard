import React from 'react'
import classes from "./userlist.module.css"

export const UserListComponent = () => {

    const TempUsers = [
        {
            name:"sam",
            type:"SELLER",
            contact:"9098098900",
            address:"xys, sycx, ydas",
            rating:5
        },
        {
            name:"sam",
            type:"SELLER",
            contact:"9098098900",
            address:"xys, sycx, ydas",
            rating:5
        },
        {
            name:"sam",
            type:"SELLER",
            contact:"9098098900",
            address:"xys, sycx, ydas",
            rating:5
        },
        {
            name:"sam",
            type:"SELLER",
            contact:"9098098900",
            address:"xys, sycx, ydas",
            rating:5
        },
        {
            name:"ram",
            type:"BUYER",
            contact:"9098098900",
            address:"xys, sycx, ydas",
            rating:5
        },
        {
            name:"ram",
            type:"BUYER",
            contact:"9098098900",
            address:"xys, sycx, ydas",
            rating:5
        },
        {
            name:"ram",
            type:"BUYER",
            contact:"9098098900",
            address:"xys, sycx, ydas",
            rating:5
        },
        {
            name:"ram",
            type:"BUYER",
            contact:"9098098900",
            address:"xys, sycx, ydas",
            rating:5
        },
        {
            name:"ram",
            type:"BUYER",
            contact:"9098098900",
            address:"xys, sycx, ydas",
            rating:5
        },
        {
            name:"ram",
            type:"BUYER",
            contact:"9098098900",
            address:"xys, sycx, ydas",
            rating:5
        },
    ]

    return (
        <div className={classes.majorContainer}>
            <div className={classes.userDisplay}>
                <div className={classes.displayHead}>
                    <p>Name</p>
                    <p>Type</p>
                    <p>Contact</p>
                    <p>Address</p>
                    <p>Rating</p>
                </div>
                {
                    TempUsers.map((u)=>(
                        <div className={classes.displayBody}>
                            <p>{u.name}</p>
                            <p>{u.type}</p>
                            <p>{u.contact}</p>
                            <p>{u.address}</p>
                            <p>{u.rating}/5</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
