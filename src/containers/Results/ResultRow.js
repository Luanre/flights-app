import * as React from 'react';
import * as BS from 'react-bootstrap';
import './ResultRow.css';

const ResultRow = ({ time, price, flightNo, duration }) => {
    return (
        <tr>
            <td>{time}</td>
            <td>{price} р.</td>
            <td>{duration} ч.</td>
            <td>{flightNo}</td>
            <td><BS.Button><BS.Glyphicon glyph="menu-right" /></BS.Button></td>
        </tr>
    );
}

export default ResultRow;