import React from 'react';
import { connect } from 'react-redux';
import * as BS from 'react-bootstrap';
import FieldGroup from '../../components/FieldGroup';
import { handleChange, submit } from '../../actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    handleChange: event => dispatch(handleChange(event)),
    submit: () => dispatch(submit(dispatch))
});

const Intro = ({ from, to, dateTo, dateFrom, handleChange, submit }) => {
    return <div>
        <BS.Panel>Добро пожаловать в наше приложение для поиска лучших авиабилетов</BS.Panel>
        <BS.Well>
            <BS.Form>
                <h4>Введите интересующие вас даты и направление</h4>
                <FieldGroup label="Место отправления" value={from} 
                    onChange={handleChange} name="from" />

                <FieldGroup label="Место назначения" value={to} 
                    onChange={handleChange} name="to" />

                <FieldGroup label="Дата отправления" type="date" value={dateTo}
                    onChange={handleChange} name="dateTo" />

                <FieldGroup label="Дата возвращения" type="date" value={dateFrom}
                     onChange={handleChange} name="dateFrom" />

                <BS.Button bsClass="btn-primary" onClick={submit}>Найти</BS.Button>
            </BS.Form>
        </BS.Well>
    </div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
