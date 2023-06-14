const UserCard = ({ user, deleteUserById, setUpdateInfo, setIsCloseForm }) => {
  const handleDelete = () => {
    deleteUserById("/users", user.id);
  };

  const hnadleEdit = () => {
    setUpdateInfo(user);
    setIsCloseForm(false);
  };
  return (
    <article className="card__content">
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="card__info">
        <li>
          <span className="card__email">Email</span>
          <span className="email">{`${user.email}`}</span>
        </li>
        <li>
          <span className="card__birthday">Birthday</span>
          <span className="birthday">
            <i className="bx bx-gift"></i>
            {`${user.birthday}`}
          </span>
        </li>
      </ul>
      <hr className="divider" />
      <section className="btn__content">
        <button className="card__btn btn__trash" onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
        <button className="card__btn btn__edit" onClick={hnadleEdit}>
          <i className="bx bx-edit"></i>
        </button>
      </section>
    </article>
  );
};

export default UserCard;
