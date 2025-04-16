import { useEffect, useState } from 'react';
import './App.css';
import EventSourcing from './view/EventSourcing.js';
import Login from './view/Login.js';
import Registration from './view/Registration.js';
import { useSelector } from 'react-redux'
import { selectUser } from './reducer/user.js';
import UIButton from './components/UIButton/UIButton.js';

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const user = useSelector(selectUser)
    if (!user?.name || !user.token) {
        return <div className='form'>
            <UIButton onClick={() => setIsLogin(prev => !prev)} style={{ margin: '0 auto 20px' }}>
                {isLogin ? 'register' : 'login'}
            </UIButton>
            {isLogin ? <Login /> : <Registration />}
        </div>
    }
    return (
        <div className="App">
            <EventSourcing />
        </div>
    );
}

export default App;
