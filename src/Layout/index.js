import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function Layout(props){
    return (
        <>
        <Header />
        <div style={{margin: "130px auto", width:1140, justifyItems:'center',alignItems:"center", justifyContent:"center"}}>
            {props.children}
        </div>
        <Footer/>
        </>
    )
}