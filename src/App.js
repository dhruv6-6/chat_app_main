import React from 'react';
import { BrowserRouter as Router, Route ,Routes ,Navigate} from "react-router-dom";

import Chat from './components/chat/Chat';
import Join from './components/join/Join';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Join />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    </Router>
  );
}

export default App;
