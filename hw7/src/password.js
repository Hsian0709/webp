const styleArgument={border: "Solid rgb(29, 114, 189)"}
const Password=()=>{
    var output=[];
    output.push(<label for='uname'>  Password  </label>);
    output.push(<input id="uname" style={styleArgument}/>);
    return output;
}

export default Password;