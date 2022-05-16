const styleArgument={border: "Solid rgb(29, 114, 189)"}
const Username=()=>{
    var output=[];
    output.push(<label for='uname'>User Name </label>);
    output.push(<input id="uname" style={styleArgument}/>);
    return output;
}

export default Username;