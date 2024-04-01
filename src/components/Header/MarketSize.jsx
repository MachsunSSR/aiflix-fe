import React from 'react';
import flags from '../../data/bendera';

const MarketSize = () => {
    return (
        <div className="lg:p-4 ">
            <h1 className='text-white text-xl mb-4 w-4/5 mx-auto overflow-auto '>MARKET SIZE</h1>
            <table className="table-auto lg:w-4/5 overflow-x-auto  text-gray-400 justify-center mx-auto  lg:border-collapse ">
                <thead>
                    <tr>
                        <th className="text-left px-4 py-2">Country</th>
                        <th className="text-center px-4 py-2">Limit User</th>
                        <th className="text-center px-4 py-2">User Active</th>
                        <th className="text-center px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {flags.map((flag, index) => (
                        <tr key={index}>
                            <td className="text-center px-4 py-2 flex items-center mx-auto space-x-5"><img src={flag.image} alt={flag.name} style={{ width: '30px' }} /> <h1>{flag.name}</h1></td>
                            <td className="text-center px-4 py-2">{flag.limitUser}</td>
                            <td className="text-center px-4 py-2">{flag.userActive}</td>
                            <td className="text-center ">
                                
                                <button className='text-white rounded-lg p-2  bg-purple-900 '>{flag.status}</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MarketSize;
