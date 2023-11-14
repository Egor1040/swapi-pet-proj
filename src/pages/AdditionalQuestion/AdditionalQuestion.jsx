import React from 'react';
import './additionalQuestion.scss';
import { Link } from 'react-router-dom';

export const AdditionalQuestion = () => {
    return (
        <div className='additional-question'>
            <h1>STAR WARS<sub>A VISUAL GUIDE</sub></h1>
            <Link to='/' className='additional-question__home'>Home</Link>

            <div id="titles">
                <div id="titlecontent">
                    <p className="center">MY PET PROJECT ON REACT</p>

                    <p>
                        My project is a web application that is based on modern
                        technologies to create an impressive user interface and
                        functionality. Using HTML5, SCSS, and JavaScript, I create
                        the basic structure and appearance of web pages. To ensure
                        responsiveness and dynamism, I chose the React.js framework,
                        which allows me to create components and effectively manage
                        the state of the application.
                    </p>

                    <p>
                        The application uses React Router DOM for navigation between
                        different pages and routing. This allows users to easily
                        navigate through different parts of the application and
                        ensures that the application state is preserved when
                        the URL changes.
                    </p>

                    <p>
                        The application also uses the AJAX or Fetch API to interact with
                        the server and receive or send data without reloading the page. 
                        This ensures fast and smooth operation of the application, reducing user waiting time.
                    </p>

                    <p>
                        In general, my project combines modern technologies to create a
                        user-friendly, attractive, and functional web application that
                        provides users with a pleasant user experience and access to the
                        information they need.
                    </p>
                </div>
            </div>
        </div>
    );
};