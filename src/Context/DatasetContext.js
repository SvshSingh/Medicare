import React, { useState, useEffect, createContext} from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from "../Firebase/config";


export const DatasetContext = createContext();

export const DatasetProvider = (props) => {

    const [ dataset, setDataset ] = useState({
        Type: '',
        Prescription: {},
        LabReport: {}
    });
    const [ formStepper, setFormStepper ] = useState(1);
    const navigate = useNavigate();
    const collectionRef = collection(firestore, 'Reports');
    const uploadDataset = async () => {
        await addDoc(collectionRef, dataset)
        .then( () => {
            console.log("dataset uploaded successfully...");
            setFormStepper(1);
            navigate('/')
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        if (formStepper === 3) {
            console.log("dataset is ready to be uploaded...");
            console.log("Medical Dataset --> ", dataset);
            uploadDataset();
        }
    }, [dataset]);

    return (
        <DatasetContext.Provider value = {[ dataset, setDataset, formStepper, setFormStepper ]}>
            { props.children }
        </DatasetContext.Provider>
    )
}