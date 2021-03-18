import React, { Component } from 'react';
import { Platform, Dimensions, View, Text, Button, StyleSheet, ScrollView, Picker, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Table, Row, Rows, TableWrapper, Col } from 'react-native-table-component';

const smstr0ti = {
    header:['Prerequisite'],
    data:[
    ['1','FENG000','Bahasa Inggris Dasar / Foundation of English (3)','Prerequisite'],
    ['2','COPS000','Keterampilan Komputer Dasar / Basic Computer Skill (3)','Prerequisite'],
    ['3','WEDU001','Pendidikan Keterampilan / Work Education (1)','Prerequisite'],
    ['4','MATH000','Matematika / Mathematics (2)','Prerequisite'],]};

const smstr1ti = {
    header:['Semester 1'],
    data:[
    ['1','COPS121','Pengantar Komputer / Introduction to Computing (3)','Basic'],
    ['2','AGMA181','Hidup dan Ajaran Yesus I / Life and Teaching of Jesus I (2)','General'],
    ['3','SENG191','Pemrograman Komputer I / Computer Programming I (3)','Major'],
    ['4','INGU121','Bahasa Inggris I / General English I (3)','General'],
    ['5','MATH172','Kalkulus I / Calculus I (3)','Basic'],
    ['6','MATH171','Linear Aljabar dan Matriks / Linear Algebra and Matrix (3)','Basic'],]};

const smstr2ti = {
    header:['Semester 2'],
    data:[
    ['1','MATH173','Matematika Diskrit / Discrete Mathematics (3)','Basic'],
    ['2','MATH174','Kalkulus II / Calculus II (3)','Major'],
    ['3','SENG192','Pemrograman Komputer II / Computer Programming II (3)','Major'],
    ['4','COHD111','Perancangan Digital dan Logika / Digital and Logic Design (3)','Major'],
    ['5','INGU122','Bahasa Inggris II / General English II (3)','General'],
    ['6','AGMA182','Hidup dan Ajaran Yesus II / Life and Teaching of Jesus II (2)','General'],]};

const smstr3ti = {
    header:['Semester 3'],
    data:[
    ['1','MATH271','Statistik dan Probabilitas / Statistics and Probability (3)','Major'],
    ['2','COPS225','Algoritma dan Struktur Data / Algorithm and Data Structure (3)','Major'],
    ['3','AGMA283','Prinsip-Prinsip Alkitab I / Biblical Principles I (2)','General'],
    ['4','INGU223','Bahasa Inggris III / General English III (3)','General'],
    ['5','COHD211','Organisasi dan Arsitektur Komputer / Computer Organization and Architecture (3)','Major'],
    ['6','PEND131','Filsafat Pendidikan Kristen / Philosphy of Christian Education (2)','General'],]};

const smstr4ti = {
    header:['Semester 4'],
    data:[
    ['1','CNET201','Jaringan Komputer I / Computer Network I (3)','Major'],
    ['2','AGMA284','Prinsip-Prinsip Alkitab II / Biblical Principles II (2)','General'],
    ['3','INGU224','Bahasa Inggris IV / General English IV (3)','General'],
    ['4','SENG292','Bahasa Rakitan / Assembly Language (3)','Major'],
    ['5','SENG291','Pemrograman Berorientasi Objek / Object Oriented Programming (3)','Major'],
    ['6','PPKN101','Pendidikan Kewarganegaraan / Indonesian Civics (3)','General'],
    ['7','IFSY261','Ilmu Manajemen / Management Science (3)','Basic'],]};

const smstr5ti = {
    header:['Semester 5'],
    data:[
    ['1','COPS222','Teori Bahasa dan Automata / Language and Automata Theory (3)','Major'],
    ['2','IFSY361','Analisis dan Perancangan Sistem / System Analysis and Design (3)','Major'],
    ['3','SENG391','Pemrograman Visual / Visual Programming (3)','Major'],
    ['4','CNET301','Jaringan Komputer II/ Computer Network II (3)','Major'],
    ['5','COPS321','Konsep-Konsep Sistem Operasi/ Operating System Concepts (3)','Major'],
    ['6','DABS251','Pengantar Database/ Introduction to Database (3)','Major'],
    ['7','AGMA385','Nubuatan Alkitab I/ Biblical Prophecies I (2)','General'],]};

const smstr6ti = {
    header:['Semester 6'],
    data:[
    ['1','SENG394','Pemrograman Framework/ Framework Programming (3)','Major'],
    ['2','RSCH382','Metodologi Penelitian/ Research Method (3)','General'],
    ['3','AGMA386','Nubuatan Alkitab II/ Biblical Prophecies II (2)','General'],
    ['4','SENG393','Rekayasa Perangkat Lunak/ Software Engineering (3)','Major'],
    ['5','COPS223','Sistem Berkas/ File Structure (3)','Major'],
    ['6','COPS323','Teori Kompilasi/ Compiler Theory (3)','Major'],
    ['7','DABS252','Sistem Manajemen Basisdata/ Database Management System (3)','Major'],]};

const smstr7ti = {
    header:['Semester 7'],
    data:[
    ['1','COPS421','Kecerdasan Buatan/ Artificial Intelligence (3)','Major'],
    ['2','SENG351','Pemrograman Web/ Web Programming (3)','Major'],
    ['3','RSCH383','Menulis Ilmiah/ Research Writing (2)','Major'],
    ['4','CSEC441','Etika Komputer/ Computer Ethics (2)','Major'],
    ['5','COPS424','Grafik Komputer/ Computer Graphics (3)','Major'],
    ['6','RSCH481','Skripsi I/ Research Project I (3)','Major'],]};

const smstr8ti = {
    header:['Semester 8'],
    data:[
    ['1','COPS425','Pemrograman Sistem/ System Programming (3)','Major'],
    ['2','CSEC442','Keamanan Komputer/ Computer Security (3)','Major'],
    ['3','RSCH482','Skripsi II/ Research Project II (3)','Major'],
    ['4','IFSY465','Manajemen Proyek/ Project Management (3)','Major'],
    ['5','COPS426','Pemrograman Multiplatform/ Multiplatform Programming (3)','Major'],]};

const smstr9ti = {
    header:['Semester 9'],
    data:[
    ['1','BENG330','Komunikasi Bisnis Bahasa Inggris/ Business English Communication (3)','General'],
    ['2','IFSY463','Knowledge Management / Knowledge Management (3)','Elective'],
    ['3','EGRC492','Persiapan TOEFL/ TOEFL Preparation Class (3)','General'],
    ['4','ELAN491','Penerjemahan dan Komunikasi Internasional/ Translation and International Communication (3)','General'],
    ['5','CSAR441','Perancangan Seni & Visual/ Arts and Visual Design (3)','Elective'],
    ['6','COMP482','Teknologi Komputasi Internet/ Cloud Computing Technology (3)','Elective'],
    ['7','COPS472','Pengembangan Perangkat Bergerak/ Mobile Device Development (3)','Elective'],
    ['8','EWRI343','Menulis III/ Writing III (3)','General'],
    ['9','CSAR331','Perancangan Web/ Web Design (3)','Elective'],
    ['10','BENG320','Korespondensi Bisnis Bahasa Inggris/ Business English Correspondence (3)','General'],
    ['11','BENG310','Bahasa Inggris Bisnis Membaca dan Kosakata/ Business English Reading and Vocabulary (3)','General'],
    ['12','DABS451','Data Mining/ Data Mining (3)','Elective'],
    ['13','CSAR431','Multimedia/ Multimedia (3)','Elective'],]};

//SI
    const smstr0si = {
      header:['Prerequisite'],
      data:[
      ['1','FENG000','Bahasa Inggris Dasar / Foundation of English (3)','Prerequisite'],
      ['2','COPS000','Keterampilan Komputer Dasar / Basic Computer Skill (3)','Prerequisite'],
      ['3','WEDU001','Pendidikan Keterampilan / Work Education (1)','Prerequisite'],
      ['4','MATH000','Matematika / Mathematics (2)','Prerequisite'],]};
  
  const smstr1si = {
      header:['Semester 1'],
      data:[
      ['1','COPS121','Pengantar Komputer / Introduction to Computing (3)','Basic'],
      ['2','BUSS111','Manajemen / Management (3)','Basic'],
      ['3','INGU121','Bahasa Inggris I / General English I (3)','General'],
      ['4','PEND131','Filsafat Pendidikan Kristen / Philosophy of Christian Education (2)','General'],
      ['5','AGMA181','Hidup dan Ajaran Yesus I / Life and Teaching of Jesus I (2)','General'],
      ['6','SENG191','Pemrograman Komputer I / Computer Programming I (3)','Basic'],]};
  
  const smstr2si = {
      header:['Semester 2'],
      data:[
      ['1','SENG192','Pemrograman Komputer II / Computer Programming II (3)','Basic'],
      ['2','BUSS121','Prinsip-Prinsip Akuntansi / Principles of Accounting (3)','Basic'],
      ['3','IFSY121','Pengantar Sistem Informasi / Introduction to Information System (3)','Major'],
      ['4','PPKN101','Pendidikan Kewarganegaraan / Indonesian Civics (3)','General'],
      ['5','AGMA182','Hidup dan Ajaran Yesus II / Life and Teaching of Jesus II (2)','General'],
      ['6','INGU122','Bahasa Inggris II / General English II (3)','General'],
      ['7','MATH173','Matematika Diskrit / Discrete Mathematics (3)','Basic'],]};
  
  const smstr3si = {
      header:['Semester 3'],
      data:[
      ['1','AGMA283','Prinsip-Prinsip Alkitab I / Biblical Principles I (2)','General'],
      ['2','SENG291','Pemrograman Berorientasi Obyek / Object Oriented Programming (3)','Major'],
      ['3','BUSS231','Sistem Informasi Akuntansi / Accounting Information System (3)','Major'],
      ['4','DABS251','Pengantar Database / Introduction to Database (3)','Major'],
      ['5','COHD211','Organisasi dan Arsitektur Komputer / Computer Organization and Architecture (3)','Basic'],
      ['6','INGU223','Bahasa Inggris III / General English III (3)','General'],
      ['7','COPS221','Struktur Data dan Algoritma / Data Structure and Algorithms (3)','Major'],]};
  
  const smstr4si = {
      header:['Semester 4'],
      data:[
      ['1','BUSS241','Ekonomi Bisnis / Business Economic (3)','Major'],
      ['2','CNET201','Jaringan Komputer I / Computer Network I (3)','Major'],
      ['3','DABS252','Sistem Manajemen Basisdata / Database Management System (3)','Major'],
      ['4','SENG391','Pemrograman Visual / Visual Programming (3)','Major'],
      ['5','AGMA284','Prinsip-Prinsip Alkitab II / Biblical Principles II (3)','General'],
      ['6','IFSY462','Sistem Informasi Manajemen / Management Information System (3)','Major'],
      ['7','INGU224','Bahasa Inggris IV / General English IV (3)','General'],]};
  
  const smstr5si = {
      header:['Semester 5'],
      data:[
      ['1','IFSY361','Analisis dan Perancangan Sistem / System Analysis and Design (3)','Major'],
      ['2','AGMA385','Nubuatan Alkitab I / Biblical Prophecies I (2)','General'],
      ['3','SENG351','Pemrograman Web / Web Programming (3)','Major'],
      ['4','COPS321','Konsep-Konsep Sistem Operasi / Operation System Concepts (3)','Major'],
      ['5','COPS422','Interaksi Manusiadan Kompuer / Human and Computer Interaction (3)','Major'],
      ['6','MATH271','Statistik dan Probabilitas / Statistics and Probability (3)','Basic'],
      ['7','AGMA385','Nubuatan Alkitab I/ Biblical Prophecies I (2)','General'],]};
  
  const smstr6si = {
      header:['Semester 6'],
      data:[
      ['1','COPS361','Data Mining dan Warehousing / Data Mining and Warehousing (3)','Major'],
      ['2','AGMA386','Nubuatan Alkitab II / Biblical Prophecies II (2)','General'],
      ['3','SENG393','Rekayasa Perangkat Lunak / Software Engineering (3)','Major'],
      ['4','SENG361','Pemrograman Mobile / Mobile Programming (3)','Major'],
      ['5','CSEC442','Keamanan Komputer / Computer Security (3)','Major'],
      ['6','RSCH382','Metodologi Penelitian / Research Method (3)','Basic'],
      ['7','IFSY362','Rekayasa Proses Bisnis / Business Process Reengineering (3)','Major'],]};
  
  const smstr7si = {
      header:['Semester 7'],
      data:[
      ['1','COPS471','Etika dan Profesi Komputer / Computer Ethics and Profession (3)','Major'],
      ['2','RSCH481','Skripsi I/ Research Project I (3)','Major'],
      ['3','IFSY463','Knowledge Management / Knowledge Management (3)','Basic'],
      ['4','IFSY471','Pengaturan Teknologi Informasi / Information Techology Governance (3)','Major'],
      ['5','BUSS471','Perilaku Organisasi / Organization Behavior (2)','Major'],]};
  
  const smstr8si = {
      header:['Semester 8'],
      data:[
      ['1','IFSY464','Manajemen Proyek Teknologi Informasi / Information Tecnology Project Management (3)','Major'],
      ['2','COPS423','Sistem Pendukung Keputusan / Decision Support System (3)','Major'],
      ['3','BUSS481','Kewirausahaan / Project Capstone (3)','Major'],
      ['4','RSCH482','Skripsi II / Research Project II (3)','Major'],]};
  
  const smstr9si = {
      header:['Semester 9'],
      data:[
      ['1','IFSY493','Sistem Perencanaan Sumber Daya Perusahan/ Enterprise Resource Planning System (3)','Elective'],
      ['2','EGRC492','Persiapan TOEFL/ TOEFL Preparation Class (3)','General'],
      ['3','ELAN491','Penerjemahan dan Komunikasi Internasional/ Translation and International Communication (3)','General'],
      ['4','COPS323','Teori Kompilasi / Compiler Theory (3)','Elective'],
      ['5','COPS222','Teori Bahasa dan Automata / Language and Automata and Theory (3)','Elective'],
      ['6','COHD411','Robotika / Robotics (3)','Elective'],
      ['7','CSAR431','Multimedia/ Multimedia (3)','Elective'],
      ['8','EWRI343','Kecerdasan Buatan/ Artificial Intelligence (3)','Elective'],
      ['9','CNET301','Jaringan Komputer II / Computer Network II (3)','Elective'],
      ['10','SENG392','Analisis dan Perancangan Berorientasi Obyek / Object Oriented Analysis and Design (3)','Elective'],
      ['12','BENG310','Bahasa Inggris Bisnis Membaca dan Kosakata/ Business English Reading and Vocabulary (3)','General'],
      ['13','DABS451','Data Mining/ Data Mining (3)','Elective'],
      ['14','CSAR431','Multimedia/ Multimedia (3)','Elective'],]};

const head = {
  header:['No.','Code','Subject Name','Type']
}

class SI extends Component {
  render() {
    return (
      <View style={{ marginHorizontal: 10 }}>
          <ImageBackground source={require('../assets/backgroundimg.png')} style={{ width: '100%', height: '100%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ marginVertical: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                  <Row data={smstr0si.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                  <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                  <TableWrapper style={{ flexDirection: 'row' }}>
                    <Rows data={smstr0si.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                  </TableWrapper>
                </Table>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                  <Row data={smstr1si.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                  <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                  <TableWrapper style={{ flexDirection: 'row' }}>
                    <Rows data={smstr1si.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                  </TableWrapper>
                </Table>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                  <Row data={smstr2si.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                  <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                  <TableWrapper style={{ flexDirection: 'row' }}>
                    <Rows data={smstr2si.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                  </TableWrapper>
                </Table>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                  <Row data={smstr3si.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                  <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                  <TableWrapper style={{ flexDirection: 'row' }}>
                    <Rows data={smstr3si.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                  </TableWrapper>
                </Table>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                  <Row data={smstr4si.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                  <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                  <TableWrapper style={{ flexDirection: 'row' }}>
                    <Rows data={smstr4si.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                  </TableWrapper>
                </Table>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                  <Row data={smstr5si.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                  <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                  <TableWrapper style={{ flexDirection: 'row' }}>
                    <Rows data={smstr5si.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                  </TableWrapper>
                </Table>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                  <Row data={smstr6si.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                  <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                  <TableWrapper style={{ flexDirection: 'row' }}>
                    <Rows data={smstr6si.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                  </TableWrapper>
                </Table>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                  <Row data={smstr7si.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                  <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                  <TableWrapper style={{ flexDirection: 'row' }}>
                    <Rows data={smstr7si.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                  </TableWrapper>
                </Table>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                  <Row data={smstr8si.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                  <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                  <TableWrapper style={{ flexDirection: 'row' }}>
                    <Rows data={smstr8si.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                  </TableWrapper>
                </Table>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                  <Row data={smstr9si.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                  <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                  <TableWrapper style={{ flexDirection: 'row' }}>
                    <Rows data={smstr9si.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                  </TableWrapper>
                </Table>
              </View>
            </ScrollView>
          </ImageBackground>
      </View>
    );
  }
}



class TI extends Component {
    render() {
      return (
        <View style={{ marginHorizontal: 10 }}>
          <ImageBackground source={require('../assets/backgroundimg.png')} style={{ width: '100%', height: '100%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginVertical: 10 }}>
                  <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                    <Row data={smstr0ti.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                    <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Rows data={smstr0ti.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                    </TableWrapper>
                  </Table>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                    <Row data={smstr1ti.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                    <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Rows data={smstr1ti.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                    </TableWrapper>
                  </Table>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                    <Row data={smstr2ti.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                    <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Rows data={smstr2ti.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                    </TableWrapper>
                  </Table>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                    <Row data={smstr3ti.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                    <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Rows data={smstr3ti.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                    </TableWrapper>
                  </Table>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                    <Row data={smstr4ti.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                    <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Rows data={smstr4ti.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                    </TableWrapper>
                  </Table>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                    <Row data={smstr5ti.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                    <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Rows data={smstr5ti.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                    </TableWrapper>
                  </Table>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                    <Row data={smstr6ti.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                    <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Rows data={smstr6ti.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                    </TableWrapper>
                  </Table>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                    <Row data={smstr7ti.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                    <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Rows data={smstr7ti.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                    </TableWrapper>
                  </Table>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                    <Row data={smstr8ti.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                    <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Rows data={smstr8ti.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                    </TableWrapper>
                  </Table>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Table borderStyle={{ borderWidth: 2, borderColor:'#c8e1ff' }}>
                    <Row data={smstr9ti.header} style={{ height: 35, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }}/>
                    <Row data={head.header} flexArr={[1,2,3,2]} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Rows data={smstr9ti.data} flexArr={[1,2,3,2]} textStyle={{ margin: 6, fontSize: 10 }}/>
                    </TableWrapper>
                  </Table>
                </View>
              </ScrollView>
          </ImageBackground>
        </View>
      );
    }
}

const TabNavigator = createBottomTabNavigator({
      "Teknik Informatika": TI,
      "Sistem Informasi": SI
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName == "Teknik Informatika") {
              iconName = `ios-information-circle-outline`;
          } else if (routeName == "Sistem Informasi") {
              iconName = `ios-information-circle-outline`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
          activeTintColor: '#3575D3',
          inactiveTintColor: 'gray',
      },
      initialRouteName: 'Teknik Informatika',
})

const StackNavigator =  createStackNavigator({
    TabNavigator: TabNavigator
},{
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                />
            ),
            headerTitle: "Curriculum",
            headerTintColor: 'white',
            headerStyle: {
                borderBottomColor: 'transparent',
                backgroundColor: '#3575D3',
            }
        }
  }
});

export default createAppContainer(StackNavigator);
