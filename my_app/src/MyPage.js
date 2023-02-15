import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyPage = ({ isAuth }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  return <div>MyPage</div>;
};

export default MyPage;
