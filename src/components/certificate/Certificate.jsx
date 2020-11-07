import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import playfair from './PlayfairDisplay-Regular.ttf';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: "50px",
    fontFamily: "Helvetica"
  },
  titleText: {
    fontSize: "40",
    fontFamily: "Playfair Display",
    alignSelf:"center",
  },
  para1:{
    marginTop: "100px",
    marginBottom: "20px",
    alignSelf:"center"
  },
  para2:{
    marginTop: "30px",
    alignSelf:"center"
  },
  name:{
    fontSize: "30",
    alignSelf:"center"
  },
  signature:{
    marginTop:"190px",
    alignSelf:"flex-end",
    marginRight:"50px",
    fontSize: "15"
  }
});

Font.register({ family: "Playfair Display", fonts: [
{ src: playfair },
]})


const Certificate = ({cert_title, cert_name, cert_para, cert_position, cert_sign}) => (
  <Document>
    <Page size="Letter" orientation="landscape"	style={styles.page}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{cert_title}</Text>
      </View>
      <View style={styles.para1}>
        <Text>This is to certify that</Text>
      </View>
      <View style={styles.name}>
        <Text>{cert_name}</Text>
      </View>
      <View style={styles.para2}>
        {/* <Text>has bagged the first position in REVA Hack 2020, a 3 day hackathon conducted by REVA University</Text> */}
        <Text>{cert_para?.replace("{position}", cert_position)}</Text>
      </View>
      <View style={styles.signature}>
        <Text>{cert_sign}</Text>
      </View>
    </Page>
  </Document>
);

export default Certificate;