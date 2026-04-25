function ProfileCard(props) {
    return (
        <div
            style={{
                border: "1px solid #444",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center",
                width: "220px",
                height: "440px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                margin: "10px",
                backgroundColor: "#222",
                color: "#fff",
            }}
        >
            {/* Upper half */}
            <div
                style={{
                    height: "80%",
                }}
            >
                {/* Profile picture */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: "8em",
                            height: "8em",
                        }}
                    >
                        <img style={{
                            border: "2px solid #444",
                            width: "100%",
                            height: "100%",
                            borderRadius: "25%",
                        }} src={props.profilePic} />
                    </div>
                </div>

                {/* Name */}
                <h2>{props.name}</h2>

                {/* Role / one-line description */}
                <h3>{props.role}</h3>

                {/* Description */}
                <p>{props.description}</p>
            </div>

            {/* Horizontal bar between upper and lower halves */}
            <hr />

            {/* Socials section */}
            <div
                style={{
                    marginTop: "1em",
                    display: "flex",
                    gap: "2em",
                    justifyContent: "center",
                    height: "30px",
                }}
            >
                {/* Facebook button */}
                <a href={props.facebook}><div
                    style={{
                        width: "2em",
                        height: "2em",
                    }}
                >
                    <img style={{filter: "invert(1)"}} src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook" />
                </div></a>

                {/* Instagram button */}
                <a href={props.instagram}><div
                    style={{
                        width: "2em",
                        height: "2em",
                    }}
                >
                    <img style={{filter: "invert(1)"}} src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" />
                </div></a>

                {/* Twitter / X button */}
                <a href={props.twitter}><div
                    style={{
                        width: "2em",
                        height: "2em",
                    }}
                >
                    <img style={{filter: "invert(1)"}} src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" alt="Twitter" />
                </div></a>
            </div>
        </div>
    );
}

export default ProfileCard;