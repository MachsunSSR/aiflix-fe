import React from 'react';

const LogDisplay = () => {
    // Data log
    const logData = [
        { account: 'UserA', targetAccount: 'UserB', date: '2024-03-29', action: 'Transfer', status: 'Completed' },
        { account: 'UserB', targetAccount: 'UserC', date: '2024-03-30', action: 'Withdrawal', status: 'Failed' },
        { account: 'UserC', targetAccount: 'UserD', date: '2024-03-31', action: 'Deposit', status: 'Pending' },
    ];

    return (
        <div className="m-4 flex mx-auto w-10/12 bg-[#333333] rounded-lg p-4 justify-center  text-white">
            <div className='w-full'>
                <h1>Output Log</h1>
                <table className="border-collapse w-full  rounded-lg">
                    <thead>
                        <tr>
                            <th className="p-2  ">Account</th>
                            <th className="p-2  ">Target Account</th>
                            <th className="p-2  ">Date</th>
                            <th className="p-2  ">Action</th>
                            <th className="p-2  ">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logData.map((log, index) => (
                            <tr key={index}>
                                <td className="p-2  ">{log.account}</td>
                                <td className="p-2  ">{log.targetAccount}</td>
                                <td className="p-2  ">{log.date}</td>
                                <td className="p-2  ">{log.action}</td>
                                <td className="p-2  ">{log.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LogDisplay;
