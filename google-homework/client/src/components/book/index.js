import React from "react";

function Book({ title, subtitle, authors, link, description, image, Button }) {
    return (
        <div>
            <h3>{title}</h3>
            {subtitle && <h5>{subtitle}</h5>}
            <p> Written by : {authors}</p>
            <div>
            <img src={image} alt={title} />
            </div>
            <div>
            <a target="_blank" href={link}>
                    view
            </a>
            <Button />
            </div>
            <div>
            <p>{description}</p>
            </div>
        </div>
    )
}
export default Book;