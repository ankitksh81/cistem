import React from 'react';
import { PDFViewer} from '@react-pdf/renderer';
import Certificate from '../certificate/Certificate';

const RenderCertificate = () => {
    return(
        <PDFViewer style={{width:"100vw", height:"100vh"}}>
            <Certificate />
        </PDFViewer>
    );
};

export default RenderCertificate;