import React, { useState } from 'react';
import Dropdown from './Dropdown';
import axios from 'axios';
import { BrowserRouter as Router} from "react-router-dom";
import './style/Form.css';
import { withRouter } from 'react-router-dom';
import { Container} from 'reactstrap';
import { useHistory } from 'react-router-dom';

function Form(props) {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [pictureURL, setPictureURL] = useState('');
    const history = useHistory();
    
    const handleSubmit = (evt, props) => { 
        evt.preventDefault();
        console.log(title);
        console.log(description);
        console.log(price);

        const payload = {
            title: title,
            description: description,
            price: price,
            pictureURL: pictureURL
        }

        axios({
            url: '/api/items',
            method: "POST",
            data: payload
        }).then(() => {
            console.log('Data has been sent to the server')
        })
        .catch(() => {
            console.log('internal server error')
        })
        history.push('/');
    }
    
    return (
    <Router>
        <Container>
            {/*<form onSubmit={handleSubmit, props.handleClick} className='formBox'>*/}
            <form onSubmit={handleSubmit} className='formBox'>
                <div className='name'>
                    <h3>Title</h3>
                    <input type='text' placeholder='title' name='title' value={title} onChange={(evt) => setTitle(evt.target.value)}/>
                </div>
                <div className='desc'>
                    <h3>Description</h3>
                    <input type='text' placeholder='description' name='description' value={description} onChange={(evt) => setDescription(evt.target.value)}/>
                </div>
                <div className='price'>
                    <h3>Price</h3>
                    <input type='text' placeholder='price' name='price' value={price} onChange={(evt) => setPrice(evt.target.value)}/>
                </div>
                <div className='pic'>
                    <h3>Picture</h3>
                    <input type='text' placeholder='pictureURL' name='pictureURL' value={pictureURL} onChange={(evt) => setPictureURL(evt.target.value)}/>
                </div>
                <div className='country'>
                    <h2>Country</h2>
                    <Dropdown name='country'/>
                </div>
                <button className='submitBtn' type='submit'>Submit</button>
                <button type="button" id='exitBtn' onClick={() => history.push('/')}>X</button>
                {/*<button type="button" id='exitBtn' onClick={props.handleClick}>X</button>*/}
            </form>
        </Container>
        </Router>
    )
}
export default withRouter(Form);