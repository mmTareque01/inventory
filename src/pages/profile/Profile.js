import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { SpinnerImg } from "../../components/loader/Loader";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import { getUser } from "../../services/authService";
import "./Profile.scss";
// dmeo data
import img2 from "../../assets/img_1.jpeg"

const Profile = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Getting use");
    setIsLoading(true);
    async function getUserData() {
      const data = await getUser();
      console.log(data);

      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]);

  return (
    <div className="profile --my2">
      {isLoading && <SpinnerImg />}
      <>
        {!isLoading && profile === null ? (
          <p>Something went wrong, please reload the page...</p>
        ) : (
          <Card cardClass={"card --flex-dir-column"}>
            <span className="profile-photo">
              {/* <img src={profile?.photo} alt="profilepic" /> */}
              <img src={img2} alt="profilepic" />
            </span>
            <span className="profile-data">
              <p>
                <b>Name : </b>  Muhimen
                {/* {profile?.name} */}
              </p>
              <p>
                <b>Email : </b> muhimen@deep.ai
                {/* {profile?.email} */}
              </p>
              <p>
                <b>Phone : </b> 01948593949
                {/* {profile?.phone} */}
              </p>
              <p>
                <b>Bio : </b> Nothing
                {/* {profile?.bio} */}
              </p>
              <div>
                <Link to="/edit-profile">
                  <button className="--btn --btn-primary">Edit Profile</button>
                </Link>
              </div>
            </span>
          </Card>
        )}
      </>
    </div>
  );
};

export default Profile;
