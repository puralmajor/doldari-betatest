import React from 'react';
import '../App.css'
import Appbar from '../organisms/Appbar';
import Navi from '../organisms/Navi';

export default function Health(): JSX.Element{
  return(  
  <div style={{width: '70%', margin: '30px auto'}}>
      <Appbar/>
      <Navi/>
    헬스장양도페이지 입니다. 
  </div>);
}