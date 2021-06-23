import { useState, useMemo } from "react";

import { UserInterface } from "data/@types/UserInterface";
import ValidationService from "data/services/ValidationService";

export default function useIndex() {
  const [zipCode, setZipCode] = useState(""),
    zipCodeValid: boolean = useMemo(
      () => ValidationService.zipCode(zipCode),
      [zipCode]
    ),
    zipCodeFeedback: string = useMemo(
      () => (zipCodeValid ? "CEP válido" : "CEP inválido"),
      [zipCodeValid]
    ),
    [error, setError] = useState(""),
    [searching, setSearching] = useState(false),
    [searchDone, setSearchDone] = useState(false),
    [professionals, setProfessionals] = useState([] as UserInterface[]),
    [remainingProfessionals, setRemainingProfessionals] = useState(0);

  return {
    zipCode,
    setZipCode,
    zipCodeValid,
    zipCodeFeedback,
    error,
    setError,
    searching,
    setSearching,
    searchDone,
    setSearchDone,
    professionals,
    setProfessionals,
    remainingProfessionals,
    setRemainingProfessionals,
  };
}
