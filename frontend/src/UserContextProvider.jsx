import { useMemo, useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const ProfilesContext = createContext();

const UserContextProvider = ({ children }) => {
  const profilesData = JSON.parse(localStorage.getItem("profiles"));
  const [profiles, setProfiles] = useState(profilesData);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  return (
    <ProfilesContext.Provider
      value={useMemo(() => ({ profiles, setProfiles }), [profiles])}
    >
      {children}
    </ProfilesContext.Provider>
  );
};

UserContextProvider.prototypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
