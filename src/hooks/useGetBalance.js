import { useFetch } from "@/hooks/useFetch";
import { useReadContract, useBalance, useAccount } from "wagmi";
import { ABI_TRC, TRC_CONTRACT } from "../../data/data_exchange";
import { useDispatch, useSelector } from "react-redux";
import { formatUnits } from "viem";
import { useEffect } from "react";
import {
  clearBalances,
  setAmountBNB,
  setAmountTRC,
  setBNBPrice,
  setErrorBalance,
  setIsLoadingBalance,
  setTRCPrice,
} from "@/redux/balanceSlice";

export const useGetBalance = () => {
  const dispatch = useDispatch();

  const { errorBalance, isLoading } = useSelector((state) => state.balance);
  const { address } = useAccount();

  // Limpiar los balances si no hay dirección
  useEffect(() => {
    if (!address) {
      dispatch(clearBalances());
    }
  }, [dispatch, address]);

  // Obtener el precio de TRC y BNB
  const {
    data: priceTrcData,
    loading: l1,
    error: fetchPriceTrcError,
  } = useFetch("0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A");

  useEffect(() => {
    if (priceTrcData?.pairs === null) {
      console.error("Error loading TRC price.");
      dispatch(setErrorBalance("Error loading TRC price."));
      return;
    }
    if (priceTrcData?.pairs[0]?.priceUsd) {
      dispatch(setTRCPrice(priceTrcData?.pairs[0]?.priceUsd));
    }
  }, [dispatch, priceTrcData]);

  const {
    data: priceBnbData,
    loading: l2,
    error: fetchPriceBnbError,
  } = useFetch("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c");

  useEffect(() => {
    dispatch(setBNBPrice(priceBnbData?.pairs[0]?.priceUsd));
  }, [dispatch, priceBnbData]);

  // Obtener los balances de la wallet
  const {
    data: balanceTrc,
    isLoading: l3,
    error: readContractError,
  } = useReadContract({
    abi: ABI_TRC,
    address: TRC_CONTRACT,
    functionName: "balanceOf",
    args: [address],
  });
  useEffect(() => {
    if (balanceTrc) {
      const balanceTrcFormat = formatUnits(balanceTrc, 18);

      dispatch(setAmountTRC(balanceTrcFormat));
    }
  }, [dispatch, balanceTrc]);

  const {
    data: balanceBnb,
    isLoading: l4,
    error: balanceError,
  } = useBalance({
    address,
  });
  useEffect(() => {
    if (balanceBnb) {
      dispatch(setAmountBNB(balanceBnb?.formatted));
    }
  }, [dispatch, balanceBnb]);

  // manejo de errores
  useEffect(() => {
    if (
      address &&
      (fetchPriceTrcError ||
        fetchPriceBnbError ||
        readContractError ||
        balanceError)
    ) {
      console.error("Error loading balance data. Please try again.");
      dispatch(
        setErrorBalance("Error loading balance data. Please try again.")
      );
    } else {
      dispatch(setErrorBalance(null));
    }
  }, [
    address,
    fetchPriceTrcError,
    fetchPriceBnbError,
    readContractError,
    balanceError,
    dispatch,
  ]);

  useEffect(() => {
    dispatch(setIsLoadingBalance(l1 && l2 && l3 && l4));
  }, [dispatch, l1, l2, l3, l4]);

  return {
    priceTrcData,
    priceBnbData,
    balanceTrc,
    balanceBnb,
    errorBalance,
    isLoading,
  };
};
