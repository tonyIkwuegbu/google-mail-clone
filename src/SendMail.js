import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./Firebase";
import firebase from "firebase/compat/app";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    
    
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", {
            required: "Required",
          })}
        />
        {errors.to && <p className="sendMail_error">To is Required!</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", {
            required: "Required",
          })}
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is Required!</p>
        )}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
          {...register("message", {
            required: "Required",
          })}
        />
        {errors.message && (
          <p className="sendMail_error">Message is Required!</p>
        )}
        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
