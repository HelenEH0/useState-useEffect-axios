import React from 'react'

const Data = ({data}) => {
    console.log(data)
    if(data){
        return (
            <div>
                <h2> Data Coming from API</h2>
                {data.map((e) => (
                    <h4 key={e.id}> {e.name} <br/> </h4>
                ))}
            </div>
        )
    } else{
        return(
            <h2> Data Loading</h2>
        )
    }
}

export default Data
