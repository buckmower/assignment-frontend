import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import './css/StreamChat.css';
import StarWhite from '../../../public/assets/star-white.png';
import GearWhite from '../../../public/assets/gear-white.png';
import DiamondWhite from '../../../public/assets/diamond-white.png';
import Turtle from '../../../public/assets/turtle.png';
import CelebrateWhite from '../../../public/assets/celebrate-white.png';
import SmileWhite from '../../../public/assets/smile-white.png';
import catJamEmote from '../../../public/assets/emotes/catJam.webp';
import EZEmote from '../../../public/assets/emotes/EZ.webp';
import KEKWEmote from '../../../public/assets/emotes/KEKW.webp';
import monkaSEmote from '../../../public/assets/emotes/monkaS.webp';


const users = ["RocketLeague", "0dave4444", "17Thedarklord", "36_h", "7goodVibes7"];
const commands = [
    { command: '/block', description: 'Block a user from interacting with you on Twitch' },
    { command: '/unblock', description: 'Remove user from your block list' },
    { command: '/color', description: 'Change your username color, i.e. blue, green, etc.' },
    { command: '/gift', description: 'Gift a specified number of Subs to the community.' },
    { command: '/help', description: 'Get detailed information on using a chat command' },
    { command: '/mods', description: 'Display a list of moderators for this channel' },
    { command: '/vips', description: 'Display a list of VIPs for this channel' },
    { command: '/vote', description: 'Vote in the active poll on the given channel' }
  ];

  const emotes = [
    { name: 'catJam', url: catJamEmote },
    { name: 'EZ', url: EZEmote },
    { name: 'KEKW', url: KEKWEmote },
    { name: 'monkaS', url: monkaSEmote },
  ];

const StreamChatComponent = (props) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const [showCommandSuggestions, setShowCommandSuggestions] = useState(false);
    const [showEmoteSuggestions, setShowEmoteSuggestions] = useState(false);
    const [filteredEmotes, setFilteredEmotes] = useState([]);

    const [filteredUsers, setFilteredUsers] = useState([]);
    const [filteredCommands, setFilteredCommands] = useState([]);
    const inputRef = useRef(null);
  
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
              setShowAutocomplete(false);
              setShowCommandSuggestions(false);
              setShowEmoteSuggestions(false);
            }
          };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    useEffect(() => {
        const handleKeyPress = (e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        };
    
        window.addEventListener('keypress', handleKeyPress);
    
        return () => {
          window.removeEventListener('keypress', handleKeyPress);
        };
      }, [input]);
  
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);
    
        if (value.includes('@')) {
          const searchValue = value.split('@').pop();
          const filtered = users.filter(user => user.toLowerCase().includes(searchValue.toLowerCase()));
          setFilteredUsers(filtered);
          setShowAutocomplete(true);
          setShowCommandSuggestions(false);
          setShowEmoteSuggestions(false);
        } else if (value.startsWith('/')) {
          const searchValue = value.slice(1);
          const filtered = commands.filter(cmd => cmd.command.toLowerCase().includes(searchValue.toLowerCase()));
          setFilteredCommands(filtered);
          setShowCommandSuggestions(true);
          setShowAutocomplete(false);
          setShowEmoteSuggestions(false);
        } else if (value.includes(':')) {
          const searchValue = value.split(':').pop();
          const filtered = emotes.filter(emote => emote.name.toLowerCase().includes(searchValue.toLowerCase()));
          setFilteredEmotes(filtered);
          setShowEmoteSuggestions(true);
          setShowAutocomplete(false);
          setShowCommandSuggestions(false);
        } else {
          setShowAutocomplete(false);
          setShowCommandSuggestions(false);
          setShowEmoteSuggestions(false);
        }
      };
  
      const handleSendMessage = () => {
        if (input.trim()) {
          setMessages([...messages, input]);
          setInput('');
          setShowAutocomplete(false);
          setShowCommandSuggestions(false);
          setShowEmoteSuggestions(false);
        }
      };
  
      const handleUserClick = (user) => {
        const parts = input.split('@');
        parts.pop();
        const newInput = parts.join('@') + '@' + user + ' ';
        setInput(newInput);
        setShowAutocomplete(false);
        inputRef && inputRef.current && inputRef.current.focus();
      };

    const handleCommandClick = (command) => {
        setInput(command + ' ');
        setShowCommandSuggestions(false);
        inputRef && inputRef.current && inputRef.current.focus();
      };

      const handleEmoteClick = (emote) => {
        const parts = input.split(':');
        parts.pop();
        const newInput = parts.join(':') + ':' + emote + ' ';
        setInput(newInput);
        setShowEmoteSuggestions(false);
        inputRef && inputRef.current && inputRef.current.focus();
      };

      const renderMessageContent = (message) => {
        const words = message.split(' ');
        return words.map((word, index) => {
          const emote = emotes.find(emote => `:${emote.name}` === word);
          if (emote) {
            return <Image width={75} height={75} key={index} src={emote.url} alt={emote.name} className="message-emote" />;
          } else {
            return <span key={index}>{word} </span>;
          }
        });
      };

  return (
    <StreamChat theme={props.theme} className="stream-chat">
            <div className="chat-header">
                <h3>Stream Chat</h3>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                <div key={index} className="chat-message">
                    <span className="username">Stonks:</span> {renderMessageContent(msg)}
                </div>
                ))}
                {showAutocomplete && (
                <div className="autocomplete">
                    {filteredUsers.map((user, index) => (
                    <UserItem key={index} className="autocomplete-item" onClick={() => handleUserClick(user)}>
                        {user}
                    </UserItem>
                    ))}
                </div>
                )}
                {showCommandSuggestions && (
                    <div className="command-suggestions">
                        {filteredCommands.map((cmd, index) => (
                        <CommandItem key={index} className="command-suggestion-item" onClick={() => handleCommandClick(cmd.command)}>
                            <div className="command">{cmd.command}</div>
                            <div className="description">{cmd.description}</div>
                        </CommandItem>
                        ))}
                    </div>
                    )}
                {showEmoteSuggestions && (
                    <div className="emote-suggestions">
                        {filteredEmotes.map((emote, index) => (
                        <div key={index} className="emote-suggestion-item" onClick={() => handleEmoteClick(emote.name)}>
                            <Image width={15} height={15} style={{width: "15px", height: "15px"}} src={emote.url} alt={emote.name} className="emote-image" />
                            <div className="emote-name">{emote.name}</div>
                        </div>
                        ))}
                    </div>
                    )}
            </div>
            <div className="chat-input">
                <div style={{margin: "10px", padding: "2px", display: "flex", position: "relative", width: "20px", height: "20px", backgroundColor: "#454C4C"}}>
                    <Image style={{width: "15px", height: "15px"}} src={StarWhite} />
                </div>
                <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Send a message"
                />
                <div style={{margin: "5px", marginTop: "10px", padding: "2px", display: "flex", position: "relative", width: "20px", height: "20px"}}>
                    <Image style={{width: "15px", height: "15px"}} src={CelebrateWhite} />
                </div>
                <div style={{margin: "5px", marginTop: "10px", padding: "2px", display: "flex", position: "relative", width: "20px", height: "20px"}}>
                    <Image style={{width: "15px", height: "15px"}} src={SmileWhite} />
                </div>
            </div>
            <div className='chat-actions'>
                <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div style={{float: "left", width: "auto", display: "flex", flexDirection: "row", padding: "10px"}}>
                        <Image style={{width: "15px", height: "15px"}} src={DiamondWhite} />
                        <Image style={{marginLeft: "10px", borderRadius: "5px", width: "15px", height: "15px"}} src={Turtle} />
                    </div>
                    <div style={{float: "right", width: "auto", display: "flex", flexDirection: "row"}}>
                        <div style={{display: "flex", padding: "10px"}}><Image style={{width: "15px", height: "15px"}} src={GearWhite} /></div>
                        <button onClick={handleSendMessage}>
                            <span style={{fontSize: "14px", fontWeight: "700", padding: "5px 7px"}}>Chat</span>
                        </button>
                    </div>
                </div>
            </div>
    </StreamChat>
  );
};

const UserItem = styled.div`
    padding: 5px;
    cursor: pointer;
    background-color: #524D53;
    border: 1px solid #333;
    color: #fff;
`

const CommandItem = styled.div`
    padding: 5px;
    cursor: pointer;
    background-color: #524D53;
    border: 1px solid #333;
    color: #fff;
`

const StreamChat = styled.div`
    
    display: flex;
    flex-direction: column;
    height: 100%;
    border-left: 1px solid #666;
    padding: 0 7px;
  
    .chat-header {
    padding: 10px;
    background-color: #1B1D1D;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #666;
  }
  
  .chat-messages {
    flex: 1;
    padding: 10px;
    overflow-y: scroll;
    background-color: #1B1D1D;
    color: #fff;
    border: none;
  }
  
  .chat-message {
    margin-bottom: 10px;
  }
  
  .username {
    font-weight: bold;
    color: #00aaff;
  }
  
  .chat-input {
    display: flex;
    padding: 0px;
    background-color: #1B1D1D;
    border: 1px solid #fff;
    border-radius: 4px;
  }
  
  .chat-input input {
    flex: 1;
    padding: 5px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
    background-color: #1B1D1D;
    color: #fff;
  }

  .chat-input input :hover {
    pointer-events: none;
  }

  .chat-input input::placeholder {
        font-size: 12px;
        padding: 5px;
   }

   .chat-actions {
    display: flex;
    padding: 5px;
    background-color: #1B1D1D;
    border-top: none;
    }
  
  .chat-actions button {
    display: flex;
    position: relative;
    height: 30px;
    width: 50px;
    border: none;
    border-radius: 4px;
    background-color: #9146FF;
    color: #fff;
    cursor: pointer;
  }
  
  .chat-input button:hover {
    background-color: #5b6eae;
  }
}`;

export default StreamChatComponent;