import { useState } from "react";
import { useDispatch } from "react-redux";

const Form = () => {
  const [amount, setAmount] = useState('');
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMoibleNumber] = useState('');

  let dispatch = useDispatch()
  return (
    <div className="container">
      <h1 className="text-warning">Form</h1>
      <div className="row m-2">
        <div className="col-4">
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          
        </div>
        <button className="btn btn-primary col-2" onClick={()=>{
            dispatch({type:'deposit', payload:amount})
            setAmount('')
        }}>Deposit</button>&nbsp;
        <button className="btn btn-danger col-2" onClick={()=>{
            dispatch({type:'withdraw', payload:amount})
            setAmount('')
        }}>withdraw</button>
      </div>
      <div className="row m-2">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          
        </div>
        <button className="btn btn-primary col-3" onClick={()=>{
            dispatch({type:'fullName', payload:fullName})
            setFullName('')
        }}>FullName</button>
        </div>
        <div className="row m-2">
        <div className="col-4">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Number"
            value={mobileNumber}
            onChange={(e) => {
              setMoibleNumber(e.target.value);
            }}
          />
          
        </div>
        <button className="btn btn-primary col-3" onClick={()=>{
            dispatch({type:'mobileNumber', payload:mobileNumber})
            setMoibleNumber('')
        }}>Number</button>
        </div>
        <button className="btn btn-danger col-2" onClick={()=>{
            dispatch({type:'reset'})
        }}>Reset</button>
    </div>
  );
};
export default Form;
