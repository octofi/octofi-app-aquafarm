import React from 'react';


const TableCard = props => {
    return (
        <div className="card card-custom gutter-b">
            <div className="card-header">
                <h5 className="card-title">{props.title}</h5>
            </div>
            <div className="card-body">
                <table className="table table-head-custom table-vertical-center">
                    <thead>
                        <tr>
                            {props.columns.map((c) => {
                                return (
                                    <th key={c.id}>{c.title}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                    {props.data.map((row, index) => {
                        return (
                            <tr key={index} className={'assets__row'}>
                                {row.map((field, i) => {
                                    return (
                                        <td key={index + '-' + i} className={'py-7 assets__value'}>
                                            {field}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default TableCard;