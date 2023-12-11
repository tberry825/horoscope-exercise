import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalComponent({ show, handleClose, selectedSign }) {
  console.log(selectedSign, "selected sign")
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      {/* <Modal.Header closeVariant="danger" closeButton> */}
        {/* <Modal.Title>Learn about {selectedSign.sign}</Modal.Title> */}
      {/* </Modal.Header> */}
      <Modal.Body >
        {/* Customize the content based on the selected sign */}
        <h4 className='modalTitle' as="success">You have selected {selectedSign}!</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="success" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function ModalComponent({ show, handleClose, selectedSign }) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ModalComponent;