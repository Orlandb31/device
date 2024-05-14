import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
import { Signage } from "./signage";
import { Provider } from "react-redux";
import { wrapper } from "./store";
import "./styles/custom.scss";
import * as animationData from "./animations/network_error.json";
import Lottie from "react-lottie";


const store = wrapper();

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export const App: React.FC = () => {
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  const [isNetwork, setisNetwork] = useState<boolean>(false);
  const [webViewVisible, setWebViewVisible] = useState<boolean>(false);
  const [ready, setReady] = useState(false);
  const [config, setConfig] = useState<any>({});



  const log = (data: string) => {
    (window as any).ipcRenderer.send("log", data);
  };

  const listen = () => {
    (window as any).ipcRenderer.onResponse((json: any) => {
      setConfig(json);
      setReady(true);
    });
    (window as any).ipcRenderer.send("readconfig", {});
  };

  useEffect(() => {
    listen();
    return () => {
    };
  }, []);


  const getdata = async () => {
    setisNetwork(false);
    let response = null;

    while (!response) {
      try {
        response = await axios.get(config?.health_check, {
          params: {
            config: config
          }
        });
      } catch (error) {
        await new Promise((resolve) => setTimeout(resolve, config?.timer_Network));
      }
    }

    if (response) {
      //console.log(response);
      if (response.status === 200) {
        setisNetwork(true);
      }
      return;
    }
  };

  useEffect(() => {

    if (!ready)
      return

    //const intervalId = setInterval(checkNetworkStatus, config?.timer_Network || 3);
    getdata();
    const updateOnlineStatus = () => {
      setOnline(navigator.onLine);
      console.log(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      //clearInterval(intervalId);
    };
  }, [ready]);

  useEffect(() => {
    console.log(navigator.onLine);
    if (online) {
      setWebViewVisible(true);
    } else {
      setWebViewVisible(false);
    }
  }, [online]);

  if (webViewVisible && isNetwork) {
    return (
      <Provider store={store}>
        <Signage />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <div className="App">
        <div className="ErrorNet">
          <div>
            <Lottie options={defaultOptions} height={700} width={700} />
            <p style={{ fontWeight: "bold" }}>
              Se perdió la conexión de INTERNET
            </p>
            <p style={{ color: "black" }}>
              Por favor revisar la conexión del dispositivo
            </p>
          </div>
        </div>
      </div>
    </Provider>
  );
};
