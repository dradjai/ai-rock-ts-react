import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <h1 className="hero" onClick={handleShow}>THE TALENT BEHIND THE GUITAR</h1>


      <Offcanvas show={show} onHide={handleClose}>
    
       <h2 className="canvas-title">The Story</h2>
       <div>
        <Offcanvas.Body>
        The modern comic story about Mike, a bit of a loner, but an aspiring musician trying to break free from his small town. When he discovers a mysterious vinyl record called "The Resonant Riot," his music becomes infused with a rebellious energy. As his fame grows, Mike defies authorities and organizes a massive concert, inspiring a town-wide revolution of music and freedom. This story celebrates the power of music to find himself and challenge the status quo and ignite change.
        </Offcanvas.Body>
       </div>
      </Offcanvas>
    </>

  )
}