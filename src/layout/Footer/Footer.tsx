import { Container, Row } from "react-bootstrap";

export default function Footer() {
  
  const currentYear: number = new Date().getFullYear();
  const gitHubUrl: string = "https://github.com/dradjai"

  return(
    <>
      <Container className="footer">
        <p>&copy; {currentYear} by David Radjai<br/>
        Content AI Generated<br/>
        <a href={gitHubUrl}
          target="_blank"
          rel="noreferrer">GitHub</a></p> 
      </Container>
    </>
  )
}