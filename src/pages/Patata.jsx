import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Patata = () => {

    const { store, dispatch } = useGlobalReducer();
    const [agendaName, setAgendaName] = useState("");

    let contactos = [
        {contactName: "John Doe", contactTlf: "123456789", id:9},
        {contactName: "Jane Doe", contactTlf: "98765", id:10}
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
                    <div>
                        <Card contactName={contact.contactName} contactTlf={contact.contactTlf} />
                        <Link to={`/contactos/editar/${contact.id}`}> Editar </Link>
                    </div>
                ))}
            </div>
            <h1>Hola { store.slug ? store.slug : "desconocido"} </h1>
            <input type="text" placeholder="Enter Contact Name" value={agendaName} onChange={(e) => setAgendaName(e.target.value)} />
            <button onClick={() => dispatch({ type: 'set_slug', payload: agendaName })}>Add Contacts</button>
        </div>
    )
}
