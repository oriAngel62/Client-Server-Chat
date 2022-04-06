import ChatHistory from "../chatHistory/ChatHistory";
import React, { useState, useEffect } from "react";
import "./ContactItem.css";

function ContactItem({ contactItem }) {
    console.log("Ad");
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    // });
    // console.log(
    //     contactItem.listMessages[contactItem.listMessages.length - 1].time
    // );
    // <ChatHistory contactList={contactItem}
    function handleClick(contactItem) {
        return <ChatHistory contactList={contactItem} />;
    }
    return (
        <div className="contact">
            <div className="list-group">
                <button
                    href="#"
                    className="list-group-item list-group-item-action "
                    id="list-tab"
                    role="tablist"
                    aria-current="true"
                    // onClick={() => <ChatHistory />}
                    // data-toggle="collapse"
                    // data-target="#learnMore"
                    // onClick={showChatHistory(contactItem)}
                    onClick={(contactItem) => handleClick(contactItem)}
                >
                    <div className="d-flex w-100 justify-content-between">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                            width="80pxd"
                        ></img>
                        <h5 className="mb-1">{contactItem.name}</h5>
                        <br></br>
                        <small>
                            {
                                contactItem.listMessages[
                                    contactItem.listMessages.length - 1
                                ].lastContextTime
                            }
                        </small>
                    </div>
                    <p className="mb-1">
                        {
                            contactItem.listMessages[
                                contactItem.listMessages.length - 1
                            ].context
                        }
                    </p>
                </button>
                <div id="learnMore" className="collapse">
                    GeeksforGeeks is a computer science portal where you can
                    learn programming. It is a platform where you can practice
                    multiple languages content and many more.
                </div>
            </div>
        </div>
    );
}

export default ContactItem;
