import React, { useState } from 'react';
import axios from "axios";
import { selectApi } from '../reducer/api';
import { setUser } from '../reducer/user';
import { useSelector, useDispatch } from 'react-redux';
import UIInput from '../components/UIInput/UIInput';
import UIButton from '../components/UIButton/UIButton';
import style from './Registration.module.css';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const api = useSelector(selectApi)
    const dispatch = useDispatch()

    const registration = () => {
        axios.post(api.register, {
            username,
            password,
        }).then(() =>
            axios.post(api.login, {
                username,
                password
            })
        ).then(res =>
            dispatch(setUser({ name: username, token: res.data }))
        ).catch((e) =>
            alert(JSON.stringify(e))
        )
    }

    return (
        <div className={style.form}>
            <UIInput
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder='username'
            />
            <UIInput
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='password'
            />
            <UIButton onClick={registration}>Отправить</UIButton>
        </div>
    );
};

export default Registration;
