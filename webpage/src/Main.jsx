import React from 'react'

function Main() {
  return (
    <div>
        <div className="contanier">
            <header>
                <ul className='row'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Profile</li>
                    <li>Contact</li>
                    <li>Services</li>
                    <li>Help</li>
                </ul>
            </header>
            <h3>Real Estate investing</h3>
            <h1>What is s real Estate Agent ?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam tempore,<br/> sed placeat, beatae reiciendis eum doloremque commodi asperiores numquam, vel praesentium.</p>
        </div>
        <div className="w-100">
            <div className="row">
            <div className="w-50">
                <img src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg" alt="" />
                <h1>About Us</h1>
                <p>Sample text. Click to select the text box. Click again or double click <br/>to start editing the text.</p>
                <button>View more</button>
            </div>
            <div className="w-50">
                <img src="https://img.freepik.com/free-photo/beautiful-flowers-bouquet-with-copy-space_23-2149053793.jpg?w=2000" alt="" />
                <h1>What we do</h1>
                <p>Sample text. Click to select the text box. Click again or double click<br/> to start editing the text.</p>
                <button>View more</button>
            </div>
            </div>
        </div>
        <footer>
            <h1>Code Opacity</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt nesciunt quas <br/>nihil totam inventore dignissimos commodi quasi. Labore, sunt.</p>
            <div className='foot'>Copyright @2020 Codeopacity , design by...</div>
        </footer>
    </div>
  )
}

export default Main