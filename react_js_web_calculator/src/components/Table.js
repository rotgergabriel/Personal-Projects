import React from "react";
import '../assets/styles/components/Table.css'

const Table = () => {

    const newProps = parseFloat(document.getElementById('newValue'))
    const oldProps = parseFloat(document.getElementById('oldValue'))
    
    const numberButtons = parseInt(document.querySelectorAll('.table--button'))
    const operators = parseInt(document.querySelectorAll('.table--button__algebraic-operations'))

    //Operaciones algebraicas
    const sum = (num1, num2) => {
        return num1 + num2
    }
    const rest = (num1, num2) => {
        return num1 - num2
    }
    const split = (num1, num2) => {
        return num1 / num2
    }
    const multiply = (num1, num2) => {
        return num1 * num2
    }
    const porcentage = (num1, num2) => {
        return ((num1*(num2/100)))
    }

    return(
        <div className="calc">
            <h6 className="calc--header">Calculator</h6>
            <input id="oldValue" className="calc--input__old" type='text'></input>
            <input id="newValue" placeholder="0" className="calc--input" type='text'></input>
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
                            <button className="table--button__delete">
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
                            <button id="result" className="table--button__result">
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