import React from 'react'

function isReverse(reverse) {
    if(reverse){
        return(
            <>
                <div className="corpo"></div>
                <div className="borda"></div>
            </>
        )
    } else {
        return(
            <>
                <div className="borda"></div>
                <div className="corpo"></div>
            </>
        )
    }
}

function Barreira({ reverse }) {
    return (
        <div className="barreira">
            {isReverse(reverse)}
        </div>
    )
}

export default Barreira