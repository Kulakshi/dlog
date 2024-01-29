import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const Table = ({data}) => {
    // let nav = useNavigate()
    const keys = data && data.length > 0 ? Object.keys(data[0]) : null

    return (
        <div className="flex flex-col max-w-full max-h-full border my-1">
            <div className="flex-grow overflow-auto ">
                {
                    keys &&
                    <table className="relative border-1">
                        <thead>
                        {
                            keys.map((name)=> <th className="sticky top-0 px-6 py-3 text-primary bg-neutralVariant">{name}</th>)
                        }
                        </thead>
                        <tbody>
                        {
                            data && data.map((row)=> <tr>
                                {
                                    keys.map((key)=> <td className="border p-2">{row[key]}</td>)
                                }
                                </tr>)
                        }
                        </tbody>
                    </table>
                }

            </div>
        </div>
    );
};

export default Table;