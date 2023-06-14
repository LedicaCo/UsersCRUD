import { useEffect, useState } from "react";
import "./App.css";
import "./components/css/layout.css";
import "./components/css/UseCard.css";
import useFetch from "./hooks/useFetch";
import FormUsers from "./components/FormUsers";
import UserCard from "./components/UserCard";

function App() {
  const [isCloseForm, setIsCloseForm] = useState(true);

  const [updateInfo, setUpdateInfo] = useState();

  const baseUrl = "https://users-crud.academlo.tech/";
  const [users, getAllUser, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl);

  useEffect(() => {
    getAllUser("/users");
  }, [getAllUser]);

  const handleOpenForm = () => {
    setIsCloseForm(false);
  };

  return (
    <div className="app__content">
      <div className="header">
        <span className="card__title">Users CRUD</span>
        <button className="openForm__btn" onClick={handleOpenForm}>
          <i className="bx bx-plus"></i>Create New User
        </button>
      </div>
      <div className={`form__container ${isCloseForm && "form__close"}`}>
        <FormUsers
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setIsCloseForm={setIsCloseForm}
        />
      </div>
      <div className="user__content">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setIsCloseForm={setIsCloseForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
