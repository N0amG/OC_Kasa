import { useState } from 'react'
import './collapse.scss'
import arrow from '../../assets/img/arrow_up.png'

export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    let bodyContent;

    if (Array.isArray(content)) {
        bodyContent = (
            <ul>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    } else {
        bodyContent = <p>{content}</p>;
    }

    return (
        <div className={`collapse ${isOpen ? 'active' : ''}`}>
            <div className='collapse-header' onClick={toggleCollapse}>
                <h2 className='collapse-title'>{title}</h2>
                <img
                    src={arrow}
                    className={`collapse-icon ${isOpen ? 'active' : ''}`}
                    alt="Toggle collapse"
                />
            </div>
            <div className={`collapse-body ${isOpen ? 'active' : ''}`}>
                {bodyContent}
            </div>
        </div>
    );
}