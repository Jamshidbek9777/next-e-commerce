"use client";

import React from "react";
import { useRouter } from "next/navigation";
const Profile = () => {
     const router = useRouter();
     const handleLogout = () => {
          router.push("/login");
          localStorage.removeItem("token");
     };
     return (
          <div>
               Profile
               <button
                    onClick={() => {
                         handleLogout();
                    }}>
                    Logout
               </button>
          </div>
     );
};

export default Profile;
