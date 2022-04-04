import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Context API?</Accordion.Header>
          <Accordion.Body style={{ textAlign: "left" }}>
            React hooks provides a concepts call "context". REact Context API
            can access data from different levels of data without passing data
            in every level of component. <br />
            For this we have to wrap all parent component where we need to pass
            the data. then we have to declare useContext to gain the data from
            first parent where we pass the data
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>HTML Semantic Elements</Accordion.Header>
          <Accordion.Body style={{ textAlign: "left" }}>
            Semantic tag is a tag where we can clearly describe the meaning of
            this tag for both developer and user. It's behavior is like a div
            tag. But it's can explain what is the purpose of this code or tag.
            Anyone with semantic tag can understand the meaning and purpose of
            every semantic tag in a website.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
