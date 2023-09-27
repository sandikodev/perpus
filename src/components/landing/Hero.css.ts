import { styled } from 'styled-vanilla-extract/qwik';

export const background = styled.div`
    margin: 0;
    background-size: cover;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-lonely.jpg") no-repeat center center;
    background-blend-mode: darken;
    transition: 3s;
    display: block;
    width: 400px;
    height: 200px;
    position: absolute;
`;

export const wrapper = styled.div`
    position: relative;
    width: 400px;
    height: 200px;
`