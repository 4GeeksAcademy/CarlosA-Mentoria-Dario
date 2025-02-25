import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Patata = () => {

    const { store, dispatch } = useGlobalReducer();
    const [agendaName, setAgendaName] = useState("");

    let contactos = [
        {contactName: "John Doe", contactTlf: "123456789"},
        {contactName: "Jane Doe", contactTlf: "98765" }
    ];

    useEffect(() => {
        let localSlug = localStorage.getItem('slug');
        localSlug ? dispatch({ type: 'set_slug', payload: localSlug }) : "";
    }, []);

    return (
        <div className="container">
            <h1>Patata</h1>
            <p>Patata is a tasty vegetable with a soft, crispy texture.</p>
            <div className="row">
                {contactos.map((contact, index) => (
                    <Card key={index} contactName={contact.contactName} contactTlf={contact.contactTlf} />
                ))}
            </div>
            <h1>Hola { store.slug ? store.slug : "desconocido"} </h1>
            <input type="text" placeholder="Enter Contact Name" value={agendaName} onChange={(e) => setAgendaName(e.target.value)} />
            <button onClick={() => dispatch({ type: 'set_slug', payload: agendaName })}>Add Contacts</button>
        </div>
    )
}
