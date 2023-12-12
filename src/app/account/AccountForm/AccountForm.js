import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

const AccountForm = () => {
  return (
    <div className="px-6 gap-6  py-12 md:px-12 lg:px-24 xl:px-36 flex flex-col lg:flex-row items-start justify-between">
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default AccountForm;
