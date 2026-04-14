import ProfileCard from "./components/ProfileCard";
 
function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh"
      }}
    >
      <h1>Profile Card App</h1>
 
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        <ProfileCard
          name="John Doe"
          role="Frontend Developer"
          image="https://picsum.photos/200"
          location="Clarksville, AR"
          email="jdoefrontenddev@gmail.com"
          buttonLink="https://www.google.com"
        />
        <ProfileCard
          name="Jane Smith"
          role="UI Designer"
          image="https://picsum.photos/200/300"
          location="Clarksville, TN"
          email="jsmithdesign@gmail.com"
          buttonLink="https://www.google.com"
        />
        <ProfileCard
          name="David Lee"
          role="Backend Developer"
          image="https://picsum.photos/300"
          location="Russellville, AR"
          email="dleebackenddev@gmail.com"
          buttonLink="https://www.google.com"
        />
      </div>
    </div>
  );
}
 
export default App;