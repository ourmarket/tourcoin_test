"use client";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";

import {
  clearAuth,
  setAddress,
  setAuthProcess,
  setError,
  setIsAuthenticated,
  setRefreshToken,
  setToken,
} from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Auth = ({ translations }) => {
  const { connect } = translations;
  const dispatch = useDispatch();

  const { address: addressUser } = useAccount();

  const { address, authProcess } = useSelector((state) => state.auth);

  // 1.  Click en el botón de conectar, se inicia el proceso de autenticación

  /* const handleConnect = async () => {
    if (!address) {
      dispatch(setAuthProcess(true));
    }
  }; */

  // 2. Cuando este conectada la wallet, se guarda en el store
  /* useEffect(() => {
    if (addressUser) {
      dispatch(setAddress(addressUser));
    } else {
      dispatch(clearAuth());
    }
  }, [addressUser, dispatch]); */

  // 3. Se envía la petición a la API de nonce y luego se recibe el token. Tiene que existir address y authProcess = true

  /*   useEffect(() => {
    if (address && authProcess) {
      const fetchNonce = async () => {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/nonce`,
            { address }
          );

          // una vez que se obtiene el nonce, se autentica
          await authenticateUser(response.data.nonce);
        } catch (error) {
          dispatch(setError("Error obtaining nonce. Please try again."));
          console.error("Error obtaining nonce:", error);
        }
      };
      fetchNonce();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]); */

  // función que se encarga de autenticar el usuario
  /*  const authenticateUser = async (nonce) => {
    if (!window.ethereum) {
      dispatch(setError("MetaMask is not installed."));
      console.error("MetaMask is not installed.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const signature = await signer.signMessage(`Nonce: ${nonce}`);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          address,
          signature,
        }
      );

      dispatch(setToken(response.data.accessToken));
      dispatch(setRefreshToken(response.data.refreshToken));
      dispatch(setIsAuthenticated(true));
    } catch (error) {
      dispatch(setError("Error authenticating user. Please try again."));
      console.error("Error authenticating user:", error);
    } finally {
      dispatch(setAuthProcess(false));
    }
  }; */

  //

  /*   useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (authToken) {
      dispatch(setToken(authToken));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setIsAuthenticated(true));
    }
  }, [dispatch]); */

  return (
    <w3m-button
      balance="false"
      size="sm"
      label={connect}
      /*  onClick={handleConnect} */
    />
  );
};

export default Auth;
