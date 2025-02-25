import React from "react";
import { useParams } from "react-router-dom";
// Esto esta en sucio y pseudo-codigo
export const ContactDetails = () => {
    const params = useParams();
    if (params.mode === "edit") {
        fetch(`/api/contactos/${params.contactId}`)
        setContactInformation(data)
    }
    return (
        <div>
            <input type="text" value={params.mode === "edit" ? ContactDetails.name : ""} readOnly={params.mode !== "add"} />
            <input type="text" value={params.mode === "edit" ? ContactDetails.tlf : ""} readOnly={params.mode !== "add"} />
        </div>
    );
}