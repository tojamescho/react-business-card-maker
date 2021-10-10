import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, title, email, message, theme, fileName } = card;

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileUrl: file.url,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        onChange={onChange}
        className={styles.input}
        type='text'
        name='name'
        ref={nameRef}
        value={name}
      />
      <input
        onChange={onChange}
        className={styles.input}
        type='text'
        name='company'
        ref={companyRef}
        value={company}
      />
      <select
        onChange={onChange}
        className={styles.select}
        name='theme'
        ref={themeRef}
        value={theme}
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        onChange={onChange}
        className={styles.input}
        type='text'
        name='title'
        ref={titleRef}
        value={title}
      />
      <input
        onChange={onChange}
        className={styles.input}
        type='text'
        name='email'
        ref={emailRef}
        value={email}
      />
      <textarea
        onChange={onChange}
        className={styles.textarea}
        name='message'
        ref={messageRef}
        value={message}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
