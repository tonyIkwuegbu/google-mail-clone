import React from "react";
import { useHistory } from "react-router-dom";
import "./EmailRow.css";
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { IconButton } from "@material-ui/core";
import {useDispatch} from "react-redux";
import { selectMail } from "./features/mailSlice"


function EmailRow({ title, subject, description, id, time }) {
  const history = useHistory();
 const dispatch = useDispatch();

 const openMail = ()=> {
   dispatch(selectMail({
     id,
     title,
     subject,
     description,
     time,
   }))
   history.push("/mail")
 }


  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow_title">{title}</h3>
      <div className="emailRow_message">
        <h4>
          {subject}
          {"  "}
          <span className="emailRow_description">-{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
