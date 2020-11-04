import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {BackendContext} from "../context/backend/backendContext";

export const Form = ({user}) => {

  const {changeUserData} = useContext(BackendContext);

  const [name, setName] = useState(user.name || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [email, setEmail] = useState(user.email || '');
  const [website, setWebsite] = useState(user.website || '');

  const alert = useContext(AlertContext);

  const submitHandler = event => {
    event.preventDefault();

    if(name.trim() && phone.trim() && email.trim() && website.trim()) {
      changeUserData({name, phone, email, website});
      alert.show('Информация отредактирована', 'success');
    } else {
      alert.show('Не все поля заполнены корректно');
    }
  };

  return (
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input type="text"
                 className="form-control"
                 id="name"
                 placeholder={user.name}
                 value={name}
                 onChange={e => setName(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input type="text"
                 className="form-control"
                 id="phone"
                 placeholder={user.phone}
                 value={phone}
                 onChange={e => setPhone(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email"
                 className="form-control"
                 id="email"
                 placeholder={user.email}
                 value={email}
                 onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="website">Сайт</label>
          <input type="text"
                 className="form-control"
                 id="website"
                 placeholder={user.website}
                 value={website}
                 onChange={e => setWebsite(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary">Сохранить</button>
      </form>
  );
};
