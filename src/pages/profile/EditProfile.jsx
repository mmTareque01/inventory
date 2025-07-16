import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
// import { selectUser } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import ChangePassword from "../../components/changePassword/ChangePassword";
// import { updateUser } from "../../services/authService";
// import ChangePassword from "../../components/changePassword/ChangePassword";

const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const user = useSelector(selectUser);
  // const { email } = user;

  // useEffect(() => {
  //   if (!email) {
  //     navigate("/profile");
  //   }
  // }, [email, navigate]);

  const initialState = {
    name:' user?.name',
    email: 'user?.email',
    phone: 'user?.phone',
    bio: 'user?.bio',
    photo: 'user?.photo',
  };
  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", "zinotrust");
        image.append("upload_preset", "wk66xdkq");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/zinotrust/image/upload",
          { method: "post", body: image }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();

        const formData = {
          name: profile.name,
          phone: profile.phone,
          bio: profile.bio,
          photo: profileImage ? imageURL : profile.photo,
        };

        // const data = await updateUser(formData);
        toast.success("User updated");
        navigate("/profile");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-8">
      {isLoading && <Loader />}

      <Card className="max-w-4xl flex flex-col p-0">
        <div className="profile-photo text-center p-4">
          <img 
            src={'user?.photo'} 
            alt="profilepic" 
            className="w-full max-w-xs mx-auto"
          />
        </div>
        <form onSubmit={saveProfile} className="p-4 space-y-4">
          <div className="space-y-4">
            <div className="border-t border-gray-300 pt-2">
              <label className="block font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={profile?.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-400 rounded"
              />
            </div>
            <div className="border-t border-gray-300 pt-2">
              <label className="block font-medium">Email:</label>
              <input 
                type="text" 
                name="email" 
                value={profile?.email} 
                disabled
                className="w-full p-2 border border-gray-400 rounded bg-gray-100"
              />
              <code className="text-sm text-gray-600">Email cannot be changed.</code>
            </div>
            <div className="border-t border-gray-300 pt-2">
              <label className="block font-medium">Phone:</label>
              <input
                type="text"
                name="phone"
                value={profile?.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-400 rounded"
              />
            </div>
            <div className="border-t border-gray-300 pt-2">
              <label className="block font-medium">Bio:</label>
              <textarea
                name="bio"
                value={profile?.bio}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-400 rounded min-h-24"
              />
            </div>
            <div className="border-t border-gray-300 pt-2">
              <label className="block font-medium">Photo:</label>
              <input 
                type="file" 
                name="image" 
                onChange={handleImageChange}
                className="w-full p-2"
              />
            </div>
            <div className="pt-4">
              <button 
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </form>
      </Card>
      <br />
      <ChangePassword />
    </div>
  );
};

export default EditProfile;