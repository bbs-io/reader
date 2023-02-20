import { useState } from 'react';

import { invoke } from '@tauri-apps/api/tauri';
import { Provider } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import store from './state';

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <Provider store={store}>
      <CssBaseline />
      <Container>
        <h1>Hello Reader</h1>
        <p>BBS.io Reader coming soon.</p>
      </Container>
    </Provider>
  );
}

export default App;
