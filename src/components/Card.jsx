export const Card = ({ contactName, contactTlf }) => (
    <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
            <h5 className="card-title"> {contactName} </h5>
            <p className="card-text">{contactTlf}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
)