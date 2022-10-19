import React from 'react';

type AccordionType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionType) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody collapsedBody={props.collapsed}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }
}


type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3>{props.title}</h3>
    )
}

type AccordionBodyType = {
    collapsedBody: boolean
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}