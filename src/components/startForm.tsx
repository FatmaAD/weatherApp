import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { color, font } from '../themes/utilities';
import { getAppId } from '../redux/actions/authHandlers';

const Input = styled.input`
color: ${color.prime};
padding:7px;
border-radius: 3px;
border: 1px solid #ccc;
box-shadow: 0px 1px 3px 0px;
`;
const Button = styled.button`
border: none;
font-size: 15px;
font-family;${font.family};
text-transform: uppercase;
padding: 5px 20px;
color:  ${color.white};
border-radius: 3px;
background-color: ${color.prime};
`;
const Link = styled.a`
font-size: 15px;
font-family;${font.family};
text-transform: capitalize;
color:  ${color.prime};
:hover{
    color:  ${color.white};
    background-color: ${color.prime};
    cursor:pointer;
}
`;
const LinkContainer = styled.div`
  padding:10px
`;
const StartForm = (props: any) => {
    const [appId, setAppId] = useState("" as string)
    useEffect(() => {
        if (localStorage.getItem("appID")) {
            setAppId(JSON.stringify(localStorage.getItem("appID")));
        }
    }, [])
    return <>
        {props.appId === "" ?
            <>
                <Input onChange={e => setAppId(e.target.value)} type="password" placeholder="please enter your app ID" />
                <Button onClick={() => props.submitId(appId)}>submit</Button>
                <LinkContainer>
                    <Link href="https://openweathermap.org/appid">
                        don't have one yet?</Link>
                </LinkContainer>
            </> : null}
    </>
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        submitId: (id: string) => dispatch(getAppId(id)),
    }
}
const mapStateToProps = (state: any) => {
    return { appId: state.appId }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartForm) 