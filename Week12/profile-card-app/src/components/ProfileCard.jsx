function ProfileCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
        width: "220px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        margin: "10px",
        backgroundColor: "#ffffff"
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />
      <h2 style={{color: "#777"}}>{props.name}</h2>
      <p>{props.role}</p>
      <h3>{props.location}</h3>
      <p>Email: <a href={`mailto:${props.email}`}>{props.email}</a></p>
      <a href={props.buttonLink}>
        <button style={{fontSize: "1em", marginTop: "1em", paddingLeft: "1em", paddingRight: "1em"}}>Visit Site</button>
      </a>
    </div>
  );
}
 
export default ProfileCard;