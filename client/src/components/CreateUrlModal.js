import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const isValidUrl = (url) => {
    const matchpattern = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
    return matchpattern.test(url);
  }


const CreateUrlModal = ({ showModal, setShowModal, createUrl }) =>  {
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);
    const handleClose = () => setShowModal(false);

    const handleCreate = () => {
        if (!isValidUrl(input)) {
            setError('Not a valid URL');
        } else {
            setError(null);
            createUrl(input);
            setInput('');
            handleClose();
        }
    }
    
    const handleChange = (e) => {
        setInput(e.target.value);
        setError(null);
    }

    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                    Insert a URL
                </Typography>
                <TextField 
                    error={!!error}
                    helperText={error}
                    placeholder='For example https://google.com'
                    label='URL'
                    size='medium'
                    sx={{ width: '550px' }}
                    onChange={(event) => handleChange(event)}

                />
                <Button
                    sx={{ marginLeft: '20px'}}
                    variant='contained'
                    onClick={() => handleCreate()}

                >
                        Create
                </Button>
                </Box>
            </Modal>
        </div>
  );
}

export default CreateUrlModal;