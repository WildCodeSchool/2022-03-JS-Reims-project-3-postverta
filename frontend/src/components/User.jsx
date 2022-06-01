import propTypes from "prop-types";

export default function User({ id, username, email, password }) {
  return (
    <div className="user">
      <p className="user-name">
        N°{id}: {username}
      </p>
      <p className="user-email">{email}</p>
      <p className="user-password">{password}</p>
    </div>
  );
}

User.propTypes = {
  id: propTypes.number.isRequired,
  username: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
};
