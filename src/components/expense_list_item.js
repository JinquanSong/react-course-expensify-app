import React from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom';

const ExpenseListItem  = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
                <h3>{ description }</h3>
        </Link>
        <p>{ amount }</p>
        <p>{ moment(createdAt).format('DD/MM/YYYY') }</p>
    </div>
);

export default ExpenseListItem