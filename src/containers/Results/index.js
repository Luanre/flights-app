import React from 'react';
import * as BS from 'react-bootstrap';
import { connect } from 'react-redux'; 
import ResultRow from './ResultRow';
import generateData from './generateData';

const mapStateToProps = state => ({
    from: state.intro.from,
    to: state.intro.to,
    dateTo: state.intro.dateTo,
    dateFrom: state.intro.dateFrom
});
const mapDispatchToProps = () => ({});

const Results = ({ from, to, dateFrom, dateTo }) => {
    const results = generateData();

    return (
        <div>
            <h1>Результаты поиска</h1>
            <p>{from} -> {to}, {dateFrom} -> {dateTo}</p>
            <BS.Table className="verticalAlign">
                <thead><tr>
                        <th>Время отправления</th>
                        <th>Цена</th>
                        <th>Время в пути</th>
                        <th>Номер рейса</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => {
                        return <ResultRow flightNo={result.fligtNo} time={result.time} 
                                duration={result.duration} price={result.price} key={index} />
                    })}
                </tbody>
            </BS.Table>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);