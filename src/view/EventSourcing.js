import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectApi } from '../reducer/api';
import UIInput from '../components/UIInput/UIInput';
import UIButton from '../components/UIButton/UIButton';
import style from './EventSourcing.module.css'

const EventSourcing = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const api = useSelector(selectApi)
    const user = useSelector(state => state.user)

    useEffect(() => {
        const eventSource = new EventSource(`${api.connect}?token=${user.token}`);

        eventSource.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages((prev) => [message, ...prev]);
            setMessage('');
        };

        return () => {
            eventSource.close();
        };
    }, [])

    const sendMessage = () => {
        axios.post(
            api.sendMessage
            , {
                message,
            }
            , {
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            }
        )
    }

    return (
        <div className="center">
            <div>
                <div className={style.form}>
                    <UIInput value={message} onChange={e => setMessage(e.target.value)} />
                    <UIButton onClick={sendMessage}>Отправить</UIButton>
                </div>
                <div className={style.messages}>
                    {messages.map(mess =>
                        <div className={style.message} key={mess._id}>
                            <span className={style.message__name}>
                                {mess.username}:
                            </span>
                            <span className='message__text'>
                                {mess.message}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventSourcing;
