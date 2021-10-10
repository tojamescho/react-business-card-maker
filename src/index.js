import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './services/auth_service';
import { firebaseApp } from './services/firebase';
import ImageUploader from './services/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './services/card_repository';

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));
ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
