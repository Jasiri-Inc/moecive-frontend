import React, {Component} from 'react'

const list = [
    {"id": 1, "first_name": "Mahala", "last_name": "Thurley", "email": null, "gender": "Female", "country": "China"},
    {
        "id": 2,
        "first_name": "Emelita",
        "last_name": "Bittleson",
        "email": "ebittleson1@github.io",
        "gender": "Female",
        "country": "China"
    },
    {
        "id": 3,
        "first_name": "Cate",
        "last_name": "Edens",
        "email": "cedens2@upenn.edu",
        "gender": "Female",
        "country": "Kosovo"
    },
    {
        "id": 4,
        "first_name": "Merwyn",
        "last_name": "Genny",
        "email": "mgenny3@youtube.com",
        "gender": "Male",
        "country": "Guyana"
    },
    {
        "id": 5,
        "first_name": "Suzette",
        "last_name": "Durham",
        "email": null,
        "gender": "Female",
        "country": "Azerbaijan"
    },
    {
        "id": 6,
        "first_name": "Heriberto",
        "last_name": "Irdale",
        "email": "hirdale5@smh.com.au",
        "gender": "Male",
        "country": "China"
    }

]

class Footer extends Component {
    render() {

        return (
            <div>
                {list.map(function (item) {
                    return (
                        <div key={item.id}>
                            <br/>
                            <span>{item.first_name} {item.last_name}</span>
                            <br/>
                            <span>{item.country}</span>
                            <br/>
                            <span>{item.email}</span>
                            <br/>
                            <span>{item.gender}</span>
                            <br/>

                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Footer;