
function Child(props) {
    return (
        <div className="user-card">
            <h2>{props.name}</h2>
            <p>City: {props.city}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    );
}

export default Child;
