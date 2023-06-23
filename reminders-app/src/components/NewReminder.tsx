import React, { useState } from "react";
interface Props {
  addReminder: (title: string) => void;
}
function NewReminder({addReminder}: Props): JSX.Element {
  const [title, settitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if(!title) return
    addReminder(title);
    settitle('');
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label> 
      <input
        type="text"
        className="form-control"
        onChange={(e) => settitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary my-3 rounded-pill">
        Add Rminder
      </button>
    </form>
  );
}

export default NewReminder;
