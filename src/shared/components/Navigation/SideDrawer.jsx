import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SideDrawer.css";
const SideDrawer = (props) => {
    const nodeRef = useRef(null) 
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter nodeRef={nodeRef}
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick} ref={nodeRef}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
