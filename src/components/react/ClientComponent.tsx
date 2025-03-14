import React, { useEffect } from "react";

function ClientComponent() {
    console.log("I'm in a React component");

    let text = "I'm in a React component";

    useEffect(() => {
        console.log("I'm in a React component and I'm using useEffect");
        text = "I'm in a React component and I'm using useEffect";
    }
    , []);

    return <div>{text}</div>;
}

export default ClientComponent;