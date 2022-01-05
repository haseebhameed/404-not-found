import React from 'react'
import Button from '../../components/button/Button'
import NotFoundImage from '../../assets/logo.png'

const Content = () => {
    return (
        <div class="p404__NotFoundWrapper">
            <div className="p404__NotFoundImage">
                <img src={NotFoundImage} alt="404 Not Found" />
            </div>
            <div className="p404__NotFoundContent">
                <h1>I have bad news for you</h1>
                <p>The page you are looking for might be removed or is temporarily unavailable</p>
                <Button text="Back to homepage" />
            </div>
        </div>
    )
}

export default Content
