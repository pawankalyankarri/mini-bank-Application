import { useSelector } from "react-redux";

const Account = () => {
  const data = useSelector((state)=>{
        return state
    })
  return (
    <div className="container mt-5">
        <hr></hr>
        <h2 className="text-primary">Account Details</h2>
      <table className="table table-bordered">
        <thead>
            <tr>
                <th>Balance</th>
                <th>FullName</th>
                <th>Mobile Number</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>{data.balance}</td>
            <td>{data.fullName}</td>
            <td>{data.mobileNumber}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Account;
