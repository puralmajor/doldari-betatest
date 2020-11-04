//페이지안에는 페이지를 구성하는 컴포넌트들을 import하여 페이지를 만들 수 있다.
import React from 'react'
import Appbar from '../../organisms/appbar/Appbar';
export default function Rooms(): JSX.Element{
  return( 
  <div style={{width: '70%', margin: '30px auto'}}>
    <Appbar/> 
    자취방 양도 페이지 입니다.
  </div>);
}