import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';

const ChatBox = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'user', text: 'Hi there!' },
        { id: 2, sender: 'bot', text: 'Hello! How can I assist you today?' },
        { id: 1, sender: 'user', text: 'My name is agung' },
        { id: 2, sender: 'bot', text: 'Halo Aku Bot' },
        { id: 1, sender: 'user', text: 'Halo BOT' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
        const newMsg = {
            id: messages.length + 1,
            sender: 'user',
            text: newMessage.trim(),
        };
        setMessages([...messages, newMsg]);
        setNewMessage('');
    };

    return (
        <div className="flex flex-col  h-[90vh] rounded-lg bg-[#222222]">
            <div className="flex-1 overflow-y-auto p-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex items-center justify-${message.sender === 'user' ? 'end' : 'start'} mb-2`}
                    >
                        {message.sender === 'user' ? (
                            <div className="flex items-center">
                                <span className="mr-2 text-white">{message.text}</span>
                                <FiUser className="text-xl text-white" />
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <FiUser className="text-xl text-white" />
                                <span className="ml-2 text-white">{message.text}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <form className="p-4 border-t " onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-full border rounded-lg p-2 bg-[#333333] text-white"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default ChatBox;
