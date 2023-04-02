import React, { useState } from "react";
import API from "./api/index";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";

const App = () => {
    const userDataArray = API.users.fetchAll();
    const [users, setUsers] = useState(userDataArray);
    // console.log(users)

    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id));
    };

    const handleBookmark = (id) => {
        setUsers((prevState) =>
            prevState.map((user) =>
                user._id !== id ? user : { ...user, bookmark: !user.bookmark }
            )
        );
    };

    return (
        <React.StrictMode>
            <SearchStatus usersQuantity={users.length} />
            <Users
                usersArray={users}
                onDelete={handleDelete}
                onBookmark={handleBookmark}
            />
        </React.StrictMode>
    );
};

export default App;
