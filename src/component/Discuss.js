import React from "react";
import ChatBot from 'react-simple-chatbot';

export default function Discuss() {
  const steps = [
    {
      id: '1',
      message: 'Hi there! I am the ChatBot. How can I assist you today?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'I need your location', trigger: '3' },
        { value: 2, label: 'Show me the new collection', trigger: '4' },
        { value: 3, label: 'I want to rate the web site', trigger: '5' },
        { value: 4, label: 'Exit', end: true },
      ],
    },
    {
      id: '3',
      message: 'its4 Grays Inn Rd, London EC1N 2NS, Royaume-Uni',
      end : true ,
      trigger: '2', // Go back to the main question after providing the location
    },
    {
      id: '4',
      message: 'Our new collection is the summer collection',
      end : true ,
      trigger: '2', // Go back to the main question after showing the new collection
    },
    {
      id: '5',
      message: 'on scale 1 to 3 how do you find us',
      trigger: '6',
    },
    {
      id: '6',
      options: [
        { value: 1, label: '1', trigger: '7' },
        { value: 2, label: '2', trigger: '8' },
        { value: 3, label: '3', trigger: '9' },
      ],
    },
    {
      id: '7',
      message: 'sorry :/ send your full comment to flyhigh@mail.com',
      end : true ,
      trigger: '2', // Go back to the main question after receiving the rating
    },
    {
      id: '8',
      message: 'we will work hard to be better send your full comment to flyhigh@mail.com',
      end : true ,
      trigger: '2', // Go back to the main question after receiving the rating
    },
    {
      id: '9',
      message: 'yohoooo I am happy send your full comment to flyhigh@mail.com',
      end : true ,
      trigger: '2', // Go back to the main question after receiving the rating
    },
  ];

  return (
    <>
      <h1>Welcome to the Chat Page!</h1>
      <div className="chat-container">
        <ChatBot steps={steps} />
      </div>
    </>
  );
}
