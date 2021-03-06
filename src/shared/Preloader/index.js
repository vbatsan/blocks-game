import React from 'react';
import styled, {keyframes} from 'styled-components'

const preloaderAnimation = keyframes`
	0% {
         -webkit-transform: rotate(0deg);
         -ms-transform: rotate(0deg);
         transform: rotate(0deg);
      }
    100% {
         -webkit-transform: rotate(360deg);
         -ms-transform: rotate(360deg);
         transform: rotate(360deg);
      }
`

const Preloader = styled.div`
	 position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
`
const Loader = styled.div`
	  display: block;
      position: relative;
      left: 50%;
      top: 50%;
      width: 150px;
      height: 150px;
      margin: -75px 0 0 -75px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #9370DB;
      -webkit-animation: spin 2s linear infinite;
      animation: ${preloaderAnimation} 2s linear infinite;
      &:after {
      	 content: "";
		 position: absolute;
		 top: 15px;
		 left: 15px;
		 right: 15px;
		 bottom: 15px;
		 border-radius: 50%;
		 border: 3px solid transparent;
		 border-top-color: rgb(11, 156, 100);
		 -webkit-animation: spin 1.5s linear infinite;
		 animation: ${preloaderAnimation} 1.5s linear infinite;
      };
      &:before {
      	 content: "";
		 position: absolute;
		 top: 5px;
		 left: 5px;
		 right: 5px;
		 bottom: 5px;
		 border-radius: 50%;
		 border: 3px solid transparent;
		 border-top-color: rgb(17, 211, 201);
		 -webkit-animation: spin 3s linear infinite;
		 animation: ${preloaderAnimation} 3s linear infinite;
      }
`
const Spinner = () => {
	return <Preloader><Loader/></Preloader>
}
export default Spinner

