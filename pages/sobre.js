import React from 'react'
import Link from 'next/link'
function Title(props){
    return(
        <h1 style={ { color: props.color, fontFamily: props.fontFamily } }>{props.children}</h1>
    )
}

export default function Sobre(){
    return(
        <div>
            <header>
                <Title color="blue" fontFamily="sans-serif">Página Sobre</Title>
                <img src="..."/>
            </header>
            <Link href="/">
                <a>
                    Link para a home!
                </a>
            </Link>
            
        </div>
    )
}