import React from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import MyDocument from '../certificate/Certificate';

const RenderCertificate = () => {
    return(
        <PDFViewer style={{width:"100vw", height:"100vh"}}>
            <MyDocument />
        </PDFViewer>
    );
};

export default RenderCertificate;