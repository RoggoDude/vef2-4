import React from 'react';

const Layout =({children}) =>{
    return(
        <>
        <div>
            <h1>Viðburðasíðan</h1>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;