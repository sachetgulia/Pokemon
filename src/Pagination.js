import React from 'react'

function Pagination({ gotoNext , gotoPrev }) {
    return (
        <div>
            {gotoPrev && <button onClick={gotoPrev}>Prev</button>}
            {gotoNext && <button onClick={gotoNext}>Next</button>}
        </div>
    )
}

export default Pagination
