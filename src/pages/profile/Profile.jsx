import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { SpinnerImg } from "../../components/loader/Loader";
// import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
// import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
// import { getUser } from "../../services/authService";
import img2 from "../../assets/img_1.jpeg";

const Profile = () => {
  // useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Getting user");
    setIsLoading(true);
    async function getUserData() {
      // const data = await getUser();
      // console.log(data);
      // setProfile(data);
      setIsLoading(false);
      // await dispatch(SET_USER(data));
      // await dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]);

  return (
    <div className="my-8">
      {isLoading && <SpinnerImg />}
      <>

         <Card className="max-w-4xl flex flex-col md:flex-row p-0">
            <div className="profile-photo text-center p-4 md:w-1/2">
              <img 
                src={img2} 
                alt="profilepic" 
                className="w-full max-w-xs mx-auto"
              />
            </div>
            <div className="profile-data p-4 space-y-4 md:w-1/2">
              <p className="border-t border-gray-300 pt-2">
                <b>Name:</b> Muhimen
              </p>
              <p className="border-t border-gray-300 pt-2">
                <b>Email:</b> muhimen@deep.ai
              </p>
              <p className="border-t border-gray-300 pt-2">
                <b>Phone:</b> 01948593949
              </p>
              <p className="border-t border-gray-300 pt-2">
                <b>Bio:</b> Nothing
              </p>
              <div className="pt-4">
                <Link to="/edit-profile">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
          </Card>
        {/* {!isLoading && profile === null ? (
          <p>Something went wrong, please reload the page...</p>
        ) : (
       
        )} */}
      </>
    </div>
  );
};

export default Profile;