import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Path from '../../paths';

export default function NotFoundPage() {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        navigate(Path.Home);
    };

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial', height: '54vh' }}
        >
            <Modal show={show} onHide={handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Something happened...</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    );
}

