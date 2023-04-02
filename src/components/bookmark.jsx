import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ id, bookmark, onBookmark }) => {
    return (
        <>
            {bookmark === true ? (
                <i
                    onClick={() => onBookmark(id)}
                    className="bi bi-bookmark-star-fill"
                ></i>
            ) : (
                <i
                    onClick={() => onBookmark(id)}
                    className="bi bi-bookmark-star"
                ></i>
            )}
        </>
    );
};

BookMark.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bookmark: PropTypes.bool,
    onBookmark: PropTypes.func
};

export default BookMark;
