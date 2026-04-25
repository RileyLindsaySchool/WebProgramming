import { useState } from 'react'
import './App.css'
import ProfileCard from "./components/ProfileCard";

import profileFiller from "./image/profile_filler.png";
import paulMImage from "./image/paul_mccartney.png";
import ringoSImage from "./image/ringo_starr.png";
import johnWImage from "./image/john_williams.png";
import anthonyGImage from "./image/anthony_gourdine.png";
import steveRImage from "./image/steve_reich.png";

function App() {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                placeItems: "center",
            }}
        >
            {/* Paul McCartney */}
            <ProfileCard
                profilePic={paulMImage}
                name={"Paul McCartney"}
                role={"Rock/Pop Musician"}
                description={"Founding member and one of the lead singers of the Beatles"}
                facebook={"https://www.facebook.com/PaulMcCartney/"}
                instagram={"https://www.instagram.com/paulmccartney/"}
                twitter={"#"}
            />

            {/* Ringo Starr */}
            <ProfileCard
                profilePic={ringoSImage}
                name={"Ringo Starr"}
                role={"Rock/Pop Musician"}
                description={"Drummer of the Beatles who replaced Pete Best in 1962"}
                facebook={"https://www.facebook.com/RingoStarr/"}
                instagram={"https://www.instagram.com/ringostarrmusic/"}
                twitter={"https://twitter.com/ringostarrmusic"}
            />

            {/* John Williams */}
            <ProfileCard
                profilePic={johnWImage}
                name={"John Williams"}
                role={"Composer"}
                description={"Renowned film composer responsible for soundtracks like Star Wars and Jaws"}
                facebook={"#"}
                instagram={"#"}
                twitter={"#"}
            />

            {/* Anthony Gourdine (Little Anthony) */}
            <ProfileCard
                profilePic={anthonyGImage}
                name={"Anthony Gourdine"}
                role={"Doo Wop Singer"}
                description={"Lead singer of the doo wop group Little Anthony and the Imperials"}
                facebook={"https://www.facebook.com/littleanthonymusic/"}
                instagram={"https://www.instagram.com/littleanthonyandthemusic/"}
                twitter={"#"}
            />

            {/* Steve Reich */}
            <ProfileCard
                profilePic={steveRImage}
                name={"Steve Reich"}
                role={"Composer"}
                description={"Classical composer and pioneer of minimalism"}
                facebook={"https://www.facebook.com/SteveReichMusic/"}
                instagram={"#"}
                twitter={"https://x.com/SteveReich"}
            />
        </div>
    );
}

export default App
