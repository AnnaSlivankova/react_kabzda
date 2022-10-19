import React from 'react';

type TopCarsType = {
    manufactured: string
    model: string
}

type TopCarsTypeArr = {
    cars: TopCarsType[]
}

export const topCars = [
    {manufactured: "BMW", model: "m5cs"},
    {manufactured: "Mercedes", model: "e63s"},
    {manufactured: "Audi", model: "rs6"},
]

export const NewComponent = (props: TopCarsTypeArr) => {
    return (
        <table>
            {props.cars.map((cars, index) => {
                return (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{cars.manufactured}</td>
                        <td>{cars.model}</td>
                    </tr>
                )
            })
            }
        </table>
    )
}