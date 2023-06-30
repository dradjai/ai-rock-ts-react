import { useEffect, useState } from "react"
import { Row } from "react-bootstrap";
import Panel from "./Panel";

export interface ObjectProps {
  id: number;
  image: string;
  content: string;
}

export default function List() {

  const [item, setItem] = useState<ObjectProps[]>();

  useEffect( () => {
    fetch('https://ai-api-project-dsr.web.app/item')
      .then(response => response.json())
      .then((res: ObjectProps[]) => setItem(res))
      .catch(Error)
  }, []);


  return(


   
      <Row className="d-flex justify-content-center">
        {!item 
          ? "Loading..." 
          : item.map((element: ObjectProps) => (
            <Panel id={element.id} content={element.content} image={element.image} />
          ))}
      
      </Row>
    
  )
}