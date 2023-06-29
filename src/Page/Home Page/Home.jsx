import React, { useContext, useState, useEffect } from 'react';
import { Button, Paper, Container, Typography, Grid, Divider, IconButton, Tooltip, Menu, MenuList ,MenuItem, ListItemIcon, Skeleton } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { AuthContext } from '../../Context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import useFetchDataset from '../../Business Logic/useFetchDataset';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import style from './Home.module.css';
import { doc, deleteDoc } from 'firebase/firestore';
import { firestore } from '../../Firebase/config';
import { Backdrop, Fade, Modal, Box} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import CustomCard from '../../Component/Card/Card';
import { Skeletons } from '../../Component';

export default function Home() {

    const { dataset, DSLstatus } = useFetchDataset();
    const [ document, setDocument ] = useState();
    const [ user ] = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate('/login');
        }
    }, [user])


    // VD = View details
    const handleVD = (id) => {
        setDocument(id)
    }

    // DR = Delete Report
    const [ DRLStatus, setDRLStatus ] = useState(false);
    const [ documentDelete ,setDocumentDelete] = useState(null);


    const handleDR = async () => {
        setDRLStatus(true);
        try {
          const docRef = doc(firestore, 'Reports', documentDelete);
          await deleteDoc(docRef);
          setDRLStatus(false);
          setDocument(null);
          handleModalClose();
        } catch (error) {
          console.log(error);
          setDRLStatus(false);
        }
      }

    // Right panel menu control variables
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    // Modal Controls & Styles
    const [Modalopen, setModalOpen] = React.useState(false);
    const handleModalOpen = (DocId) => {
        setModalOpen(true);
        setDocumentDelete(DocId);
    } 
    const handleModalClose = () => setModalOpen(false);
    const Modalstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
      };

    return (
        <>
      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
        open={Modalopen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={Modalopen}>
          <Box sx={Modalstyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Delete Document
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
              Are you sure you want to delete this document?
            </Typography>
            <Grid mt={1} container spacing={2} direction='row' justifyContent='flex-end'>
              <Grid item>
                <Button onClick={handleModalClose} size='small'>Cancel</Button>
              </Grid>
              <Grid item>
                <LoadingButton
                    color='error'
                    loading = {DRLStatus}
                    loadingPosition="start"
                    startIcon={<DeleteIcon />}
                    // startIcon={<CheckIcon />}
                    variant="contained"
                    size='small'
                    onClick={handleDR}
                    >
                        {DRLStatus ? 'Deleting' : 'Delete'}
                </LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
        <Grid container sx = {{ mt: 0}}>
            <Grid item md = {5} lg = {5} className = {style.leftOption}>
                <Container>

                    {DSLstatus === false && dataset.map((data, index) => (
                        <CustomCard key={index} data={data} handleVD={handleVD} />
                    ))}
                    {DSLstatus === true && <Skeletons />}

                </Container>
            </Grid>
            <Grid item md = {7}  lg = {7} sx = {{ mt: 4  }} className = {style.rightPanel}>
                <Container sx = {{ height: '100%' }}>
                <Paper variant='outlined' sx = {{ p: 4}} >
                    { document ? <>
                        <Typography variant='h5' color='text.primary' textAlign='center'>Report Details: </Typography>
                        <Grid container sx = {{ mt: 4 , mb: 2 }} alignItems="center">
                            <Grid item lg={12} container alignItems='center' justifyContent='flex-end' spacing={2}>
                                <Grid item>
                                    <Tooltip title='Document type'>
                                        <Typography>{document[1].Type}</Typography>
                                    </Tooltip>
                                </Grid>
                                <Grid item>
                                    <Tooltip title='Appointment date'>
                                        <Typography>{document[1].Prescription.date}</Typography>
                                    </Tooltip>
                                </Grid>
                                <Grid item>
                                    <Tooltip title = 'Report settings'>
                                        <IconButton onClick={handleClick}>
                                            <MoreVertRoundedIcon />
                                        </IconButton>
                                    </Tooltip>

                                    <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose} PaperProps={{
                                        elevation: 0,
                                        sx: { overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5, '& .MuiAvatar-root': { width: 28, height: 28, ml: -0.5, mr: 1, },
                                                '&:before': { content: '""', display: 'block', position: 'absolute', top: 0, right: 14, width: 10, height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0, },
                                            },
                                        }} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuList dense>
                                            <MenuItem disabled>
                                                <ListItemIcon>
                                                    <ModeEditOutlineIcon fontSize="small" />
                                                </ListItemIcon>
                                                Edit
                                            </MenuItem>
                                            <MenuItem onClick={() => {
                                                handleModalOpen(document[0]);
                                                // handleDR(document[0])
                                                }}>
                                                <ListItemIcon>
                                                    <DeleteIcon fontSize="small"/>
                                                </ListItemIcon>
                                                Delete
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>

                                </Grid>
                            </Grid>
                        </Grid>
                        
                            <Grid item lg={6}>
                                <Typography variant='h4'>{document[1].Prescription.doctor}</Typography>
                                <Typography color='text.secondary'>{document[1].Prescription.department}</Typography>
                            </Grid>

                            <Divider></Divider>

                            <Typography variant='h6' sx = {{ mt: 2}}>Prescribed Medicine</Typography>
                            <Paper sx = {{m: 2}} elevation={0}>
                                {document[1].Prescription.Medicine.map((meds) => {
                                    return(
                                        <Paper sx = {{ mb: 2, p: 1}} variant='outlined'>
                                            <Typography variant='body'>{meds.MedName}</Typography>
                                            <br />
                                            <Typography variant='caption' color='text.secondary'>Morning:{meds.Morning} Afternoon:{meds.Afternoon} Night: {meds.Night}</Typography>
                                        </Paper>
                                    );
                                })}
                            </Paper>
                        
                        </>
                    :
                    <Grid container alignItems='center' justifyContent='center' sx = {{ height: "68vh"}}>
                        <Grid item>
                            <Typography color='text.secondary'>
                                Select a option to View its details
                            </Typography>
                        </Grid>
                    </Grid>
                    }
                     

                </Paper>
                </Container>

            </Grid>
        </Grid>
        </>
    )
}
