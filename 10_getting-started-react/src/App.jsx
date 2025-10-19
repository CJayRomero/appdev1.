import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.6" }}>
      <h1>About Me</h1>
      <p><strong>Name:</strong> Christian Jay S. Romero</p>
      <p><strong>Course/Year:</strong> BS Information Technology 3rd Year</p>
      <p><strong>Fun Fact:</strong> I can dance like Michael Jackson</p>

      <hr style={{ margin: "20px 0" }} />

      <h2>Why I Want to Learn React</h2>
      <p>
        I don’t know much about React and I’m not really into programming, but I need to learn how it works. 
        I want to understand how to use it to build websites and interactive pages. 
        Learning React will help me gain basic coding skills and become more confident with web development.
      </p>
    </div>
  );
}

export default App;