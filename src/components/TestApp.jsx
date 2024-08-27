import React, { useEffect } from "react";
import axios from "axios";

const TestApp = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://creator.zoho.in/api/v2.1/2comsapps/gigforce/report/All_SP_Register_Report/65616000089387268",
          {
            method: "GET",
            headers: {
              Authorization:
                "Zoho-oauthtoken 1000.abdea5ec2a8602b06b59d05976e64e3d.6f841ac2604b4b83b61ac6586dc1738e",
              Accept: "application/json",
              Cookie:
                "ZCNEWLIVEUI=true; _zcsr_tmp=a147c67e-eee3-42e6-b4cd-cb8570e18cd7; zalb_f8176abf63=824a990513397e205cf960357c59e7e0; zccpn=a147c67e-eee3-42e6-b4cd-cb8570e18cd7",
            },
          }
        );

        const data = await response.json();
        console.log("All_SP_Register_Report===>", data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return <div>TestApp</div>;
};

export default TestApp;
