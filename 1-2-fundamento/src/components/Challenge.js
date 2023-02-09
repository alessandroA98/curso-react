import React from 'react'

const Challenge = () => {
    let a = 5;
    let b = 10;

    return (
        <div >
                <p>
                    valor 1 = {a}
                </p>
                <p>
                    valor 2 = {b}
                </p>
            <button onClick={() => {
                console.log(a + b)
            }}>
                challenge no console</button>

        </div>
    )
}

export default Challenge