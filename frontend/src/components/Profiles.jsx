import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ProfilesContext } from "../UserContextProvider";

const Profiles = () => {
  const allProfiles = useContext(ProfilesContext);
  const data = allProfiles.profiles;
  return (
    <div className="h-screen bg-gradient-to-bl from-cyan-500 to-blue-500 flex flex-col justify-between overflow-x-hidden">
      <Header title={"Profiles"} />
      <div className="container mx-auto flex flex-col flex-grow p-10">
        {data.map((userProfile, index) => (
          <div key={index}>
            <h1>{userProfile.name}</h1>
            <p>{userProfile.age}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Profiles;
