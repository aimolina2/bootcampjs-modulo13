import React from "react";
import { createEmptyCredentials, Credentials } from "../login.vm";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials(),
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          name="user"
          onChange={handleFieldChange}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="passwprd"
          id="password"
          name="password"
          onChange={handleFieldChange}
        ></input>
      </div>
      <button type="submit">Acceder</button>
    </form>
  );
};
