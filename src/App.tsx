import React from 'react';
import './App.css';
import {Rating} from "./components/rating";
import {Accordion} from "./components/accordion";
import {NewComponent} from "./components/mapMethod";
import {topCars} from "./components/mapMethod";

function App() {
    return (
        <div>
            <NewComponent cars={topCars}/>

            <Title title={"Hello"}/>
            <ul>Rating one</ul>
            <Rating value={1}/>
            <Title title={"My friend"}/>
            <ul>Rating two</ul>
            <Rating value={5}/>
            <ul>Rating three</ul>
            <Rating value={510}/>
            <Accordion titleValue={"Accordion title One"} collapsed={false}/>
            <Accordion titleValue={"Accordion title Two"} collapsed={true}/>
        </div>
    );
}

type TitleType = {
    title: string
}

const Title = (props: TitleType) => {
    return (
        <div>{props.title}</div>
    )
}

export default App;
