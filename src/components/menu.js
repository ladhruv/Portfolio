import React from "react";
import { Popover, Menu, Button, Position } from "evergreen-ui";
import * as LABELS from "../constants/label";
import { HashLink } from "react-router-hash-link";

const menu = () => {
  return (
    <Popover
      position={Position.TOP_RIGHT}
      content={({ close }) => (
        <Menu>
          <Menu.Group>
            <Menu.Item onClick={close}>
              {" "}
              <HashLink className="menuTab" smooth to="/">
                {LABELS.HOME}
              </HashLink>
            </Menu.Item>
            <Menu.Item onClick={close}>
              <HashLink className="menuTab" smooth to="/#project">
                {LABELS.PROJECTS}
              </HashLink>
            </Menu.Item>
            <Menu.Item onClick={close}>
              {" "}
              <HashLink className="menuTab" smooth to="/#experience">
                {LABELS.EXPERIENCE}
              </HashLink>
            </Menu.Item>
          </Menu.Group>
          <Menu.Divider />
          <Menu.Group>
            <Menu.Item onClick={close}>
              {" "}
              <HashLink className="menuTab" smooth to="/#contact">
                {LABELS.CONTACT}
              </HashLink>
            </Menu.Item>
          </Menu.Group>
        </Menu>
      )}
    >
      <Button
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "3em",
          marginTop: "3em",
          backgroundImage: "linear-gradient(to bottom, white, white)",
        }}
      >
        <i className="fas fa-bars"></i>
      </Button>
    </Popover>
  );
};

export default menu;
