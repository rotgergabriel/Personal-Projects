import React from "react";
import '../assets/styles/components/Table.css'

const Table = () => {

    return(
        <div className="calc">
            <h6 className="calc--header">Calculator</h6>
            <input id="inputProps" className="calc--input" type='text'></input>
            <table className="table">
                <tbody className="table--tbody">
                    <tr className="table--tr">
                        <td className="table--td">
                            <button className="table--button__reset">
                                C
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button__algebraic-operations">
                                /
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button__algebraic-operations">
                                *
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button__algebraic-operations">
                                x
                            </button>
                        </td>
                    </tr>
                    <tr className="table--tr">
                        <td className="table--td">
                            <button className="table--button">
                                7
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button">
                                8
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button">
                                9
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button__algebraic-operations">
                                %
                            </button>
                        </td>
                    </tr>
                    <tr className="table--tr">
                        <td className="table--td">
                            <button className="table--button">
                                4
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button">
                                5
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button">
                                6
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button__algebraic-operations">
                                -
                            </button>
                        </td>
                    </tr>
                    <tr className="table--tr">
                        <td className="table--td">
                            <button className="table--button">
                                1
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button">
                                2
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button">
                                3
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button__algebraic-operations">
                                +
                            </button>
                        </td>
                    </tr>
                    <tr className="table--tr">
                        <td className="table--td">
                            <button className="table--button">
                                +/-
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button">
                                0
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button">
                                .
                            </button>
                        </td>
                        <td className="table--td">
                            <button className="table--button__result">
                                =
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;