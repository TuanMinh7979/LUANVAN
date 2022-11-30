import React from "react";

import axios from "axios";
import { toast } from "react-toastify";
function Other() {
  // DUNG CAI NAY THI T TRA VE MA LOI 400 THI PHAI TRY CATCH
  //   const postData = async () => {
  //     try {
  //       let resp = await axios.post("http://localhost:8800/api/auth/login", {
  //         username: "admi12n",
  //         password: "1234",
  //       });
  //       console.log("YEP", resp);
  //     } catch (e) {
  //       console.log(e.response.data);

  //     }
  //   };

  // DUNG CAI NAY THI T TRA VE MA LOI 200 KHONG PHAI TRY CATCH
  //   const postData1 = async () => {
  //     let resp = await axios.post("http://localhost:8800/api/auth/login", {
  //       username: "admi12n",
  //       password: "1234",
  //     });
  //     console.log("RES", resp);
  //     if (resp.status !== 200) {
  //       console.log("FAILED", err);
  //     }
  //   };
  const getData1WithToken = async () => {
    let resp = await axios.get("user");
    console.log("RES", resp);
    if (resp.status !== 200) {
      console.log("FAILED", err);
    }
  };

  return (
    // toast.success("create new user success")
    <div style={{ backgroundColor: "blue", width: "200px", height: "200px" }}>
      <button onClick={() => toast.success("create ner success")}>
        Send data fake
      </button>
    </div>
  );
}
export default Other;
