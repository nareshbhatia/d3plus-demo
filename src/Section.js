import React from 'react';
import { Treemap } from 'd3plus-react';
import numeral from 'numeral';
import './Section.css';

export const Section = ({ sectionId }) => {
    const methods = {
        groupBy: 'id',
        data:
            'https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/sectors-performance?datatype=json',
        // Take absolute values
        size: d => d.value > 0 ? d.value : -d.value
    };

    const formatter = d =>
        Object.keys(d).map(key => ({
            id: d[key].Name,
            value: numeral(d[key].Change).value()
        }));

    return (
        <div className="section">
            <h1>Section {sectionId}</h1>
            <div className="section__content">
                <p className="section__lhs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <div className="section__rhs">
                    <Treemap config={methods} dataFormat={formatter} />
                </div>
            </div>
        </div>
    );
};
