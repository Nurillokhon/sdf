import React, { useContext } from 'react';
import { DataContext } from '../../Contex/Contex'
import './chat.css'
import {TbBrandTelegram} from 'react-icons/tb'
const Chat = () => {
    const { data } = useContext(DataContext);
    console.log(data);
    return (
        <div className='container '>
            <div className='chat'>
                <h1>{data}</h1>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary outline-none" type="button" id="button-addon2"><TbBrandTelegram/></button>
            </div>
        </div>
    );
}

export default Chat;
