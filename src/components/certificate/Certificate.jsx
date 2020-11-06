import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import playfair from './PlayfairDisplay-Regular.ttf';
import { emphasize } from '@material-ui/core';

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'snow',
    flexDirection: 'column',
    padding: "50px",
    fontFamily: "Helvetica"
  },
  titleText: {
    fontSize: "46",
    fontFamily: "Playfair Display",
    alignSelf:"center",
    fontWeight: 'heavy',
  },
  line: {
    alignSelf: 'center',
  },
  para1:{
    marginTop: "100px",
    marginBottom: "20px",
    alignSelf:"center"
  },
  para2:{
    marginTop: "30px",
    alignSelf:"center",
  },
  name:{
    fontSize: "30",
    alignSelf:"center"
  },
});

Font.register({ family: "Playfair Display", fonts: [
{ src: playfair },
]})


const MyDocument = () => (
  <Document>
    <Page size="Letter" orientation="landscape"	style={styles.page}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Certificate of Appreciation</Text>
      </View>
      <View style={styles.line}>
        <Text>*--------------------------------------------------------------------------------------------------*</Text>
      </View>
      <View style={styles.para1}>
        <Text>This is to certify that</Text>
      </View>
      <View style={styles.name}>
        <Text>Anurag Sharan</Text>
      </View>
      <View style={styles.para2}>
        <Text>has bagged the <Text style={{fontWeight:'bold', fontFamily:"Helvetica-Bold"}}>first position</Text> in REVA Hack 2020, a 3 day hackathon conducted by REVA University</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;