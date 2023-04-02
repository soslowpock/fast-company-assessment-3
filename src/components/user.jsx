import React from "react";
import BookMark from "./bookmark";
import Quality from "./quality";
import PropTypes from "prop-types";

const User = ({ user, onBookmark, onDelete }) => {
    return (
        <tr>
            <th>{user.name}</th>
            <td>
                {user.qualities.map((quality) => (
                    <Quality
                        key={quality._id}
                        name={quality.name}
                        color={quality.color}
                    />
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} / 5</td>
            <td>
                <BookMark
                    id={user._id}
                    bookmark={user.bookmark}
                    onBookmark={onBookmark}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(user._id)}
                >
                    DELETE
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    onBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
