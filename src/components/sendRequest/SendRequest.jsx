import { useState } from "react";
import { useForm } from "@formspree/react";
import styles from "./sendRequest.module.scss";
import Alert from "@mui/material/Alert";
import { useEffect } from "react";
export default function SendRequest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSend, setSend] = useState(false);
  const [state, handleSubmit] = useForm("mgeqobdd", {
    data: {
      subject: `${name} send you a letter`,
      Info: message,
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setSend(true);
  };
  useEffect(() => {
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => {
      setSend(false);
    }, 6500);
  }, [isSend]);
  return (
    <>
      {state.succeeded && isSend && (
        <Alert
          style={{ display: "flex", justifyContent: "center" }}
          severity="success"
        >
          Your message was successfully delivered
        </Alert>
      )}
      <form id="form" className={styles.requestForm} onSubmit={handleClick}>
        <h1>Connect with me</h1>
        <input
          className={styles.requestInput}
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={styles.requestInput}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          name="email"
          required
        />
        <textarea
          className={styles.requestTextarea}
          placeholder="Send your message"
          value={message}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.requestButton}
        >
          Send
        </button>
      </form>
    </>
  );
}
