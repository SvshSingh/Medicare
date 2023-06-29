const docOne = {
    documentNumber: 'Auto generated',  // at last step
    dateOfCreation: 'Auto generated',
    doctor: 'BS Rao',
    type: 'Prescription',
    dateOfVisit: '21.12.2021',
    link: 'url of the prescription',
    department: 'Example: General or Dermatology etc',
    medicine: [
        {
            name: 'Medicine 1',
            dose: {
                day: 1,
                afternoon: 0,
                night: 1
            }
        },
        {
            name: 'Medicine 2',
            dose: {
                day: 0,
                afternoon: 0,
                night: 1
            }
        }
    ]

}

const docTwo = {
    DocumentNumber: 'Auto generated',
    DateOfCreation: 'Auto generated',
    Doctor: 'BS Rao',
    Type: 'Prescription',
    DateOfVisit: '21.12.2021',
    link: 'url of the prescription',
    department: 'Example: General or Dermatology etc',
    Medicine: null
}

const docthree = {
    documentNumber: 'Auto generated',
    dateOfCreation: 'Auto generated',
    type: 'Lab Report',
    dateOfTest: '21.12.2021',
    test: 'Example: full body checkup, sugar test, haemoglobin test etc',
    link: 'link of the lab report uploaded'
}

const doc = {
    type: "Prescription",                                               //DONE-------------------
    Prescription: {
        documentNumber: 'Auto generated',
        dateOfCreation: 'Auto generated',
        doctor: 'BS Rao',                                               //DONE--------------------
        department: 'Example: General or Dermatology etc',              //DONE--------------------
        dateOfVisit: '21.12.2021',                                      //DONE--------------------
        link: 'url of the prescription',
        medicine: [
            {
                name: 'Medicine 1',
                dose: {
                    day: 1,
                    afternoon: 0,
                    night: 1
                }
            },
            {
                name: 'Medicine 2',
                dose: {
                    day: 0,
                    afternoon: 0,
                    night: 1
                }
            }
        ]
    },
    LabReport: null
}
