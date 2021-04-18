import './css/App.css';
import MyLongTextbox from './components/Textboxes'
import ShortenLink from './components/urls'
import AlertDialog from "./components/AlertDialog";
import { MySaveButton } from './components/Buttons'
import MySnackbar from './components/Snackbars'
import { MyRedirectAPI, MySaveAPI } from './apis/apis'
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Switch
} from "react-router-dom";

function App() {

  const [url, setUrl] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [shortUrl, setShortUrl] = useState('');
  const [shortening, setShortening] = useState(false);

  // get to long url using short url and redirect 
  function GotoLongUrl() {
    let { id } = useParams() //get params from URL
    MyRedirectAPI(id, error) //connect to redirect get API
    return (<RedirectUi />) //show redireciton on screen
  }

  function error(e) {
    setErrorMessage(e);
    setOpenAlert(true);
  }

  //  for textfield
  function handleChange(e) {
    setUrl(e.target.value);
    setShortUrl('');
  }
  function onKeyPress(e) {
    if (e.which === 13) makeShorten()
  }

  // for shortener 
  function handleCloseAlert() {
    setOpenAlert(false);
  }
  function makeShorten() {
    if (url === "") return;
    setShortening(true)  // url exist?
    MySaveAPI(url, error, handleSaveShortenUrl)//connect to post API
      .then(() => setShortening(false)) // change short button
  }

  //for saveUrl handle
  function handleSaveShortenUrl(myShortUrl) {
    setUrl('');
    setOpenSnackbar(true);
    setShortUrl(myShortUrl);
  }

  //for redirection
  function handleCloseAlertRedirect() {
    setOpenAlert(false);
    return (window.location.href = "/")
  }


  function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>Goto</h4>
          <div>
            <MyLongTextbox onKeyPress={onKeyPress} url={url} handleChange={handleChange} />
            <MySaveButton shortening={shortening} makeShorten={makeShorten} />
          </div>
          <div>
            <ShortenLink shortUrl={shortUrl} />
          </div>
        </header>
        <AlertDialog open={openAlert} handleClose={handleCloseAlert} error={errorMessage} />
        <MySnackbar openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar} />
      </div>
    )
  }

  function RedirectUi() {
    return (<div className="App">
      <header className="App-header">
        <h4>redirecting...</h4>
      </header>
      <AlertDialog open={openAlert} handleClose={handleCloseAlertRedirect} error={errorMessage} />
    </div >)
  }

  //routing - depends on url
  return (
    <React.StrictMode>
      <Router >
        <></>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/:id" children={<GotoLongUrl />} ></Route>
        </Switch>
      </Router >
    </React.StrictMode>
  );
}


export default App;
