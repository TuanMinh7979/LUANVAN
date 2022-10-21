import React from "react";
import Form from "../../components/other/yupValidate/Form";
import axios from "axios";
function Other() {
  // DUNG CAI NAY THI T TRA VE MA LOI 400 THI PHAI TRY CATCH
  const postData = async () => {
    try {
      let resp = await axios.post("http://localhost:8800/api/auth/login", {
        username: "admi12n",
        password: "1234",
      });
      console.log("YEP", resp);
    } catch (e) {
      console.log(e.response.data);
      
    }
  };

  // DUNG CAI NAY THI T TRA VE MA LOI 200 KHONG PHAI TRY CATCH
  const postData1 = async () => {
    let resp = await axios.post("http://localhost:8800/api/auth/login", {
      username: "admi12n",
      password: "1234",
    });
    console.log("RES", resp);
    if (resp.status !== 200) {
      console.log("FAILED", err);
    }
  };

  return (
    <div>
      <button onClick={postData1}>Send data fake</button>
    </div>
  );
}
export default Other;
