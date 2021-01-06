import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { editItem } from "../../JS/Actions/Action";
import { connect, useDispatch } from "react-redux";
const Edit = (props) => {
  const { className, item } = props;

  const [modal, setModal] = useState(false);
  const [todo, setTodo] = useState(item.todo);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              dispatch(editItem({ id: item.id, description: todo }));
              toggle();
            }}
          >
            Edit Comment
          </Button>{" "}
          <Button color="primary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default connect()(Edit);
