import "./EmailList.css";
import React, { useState, useEffect } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Checkbox } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/Keyboard";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./Firebase"
import { onSnapshot, collection, query} from "firebase/firestore";


function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'emails'))
    // eslint-disable-next-line
    const unsub = onSnapshot(q, (snapshot) => setEmails(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    ))
      // db.collection('emails')
      // .orderBy('timestamp', 'desc')
      // .onSnapShot((snapshot) =>
      //   setEmails(
      //     snapshot.docs.map((doc) => ({
      //       id: doc.id,
      //       data: doc.data(),
      //     }))
      //   )
      // );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
      </div>
      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

        <EmailRow
          title="Twitch"
          subject="Hey Mate"
          description="This is a test"
          time="10pm"
        />
        
 
      </div>
    </div>
  );
}

export default EmailList;
