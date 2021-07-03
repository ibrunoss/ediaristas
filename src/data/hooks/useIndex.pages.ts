import { useState, useMemo } from "react";

import { UserInterface, UserInterfaceAPI } from "data/@types/UserInterface";
import ValidationService from "data/services/ValidationService";
import ApiService from "data/services/ApiService";

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

  async function searchProfessionalsByZipCode(zipCode: string) {
    setSearchDone(false);
    setSearching(true);
    setError("");

    try {
      await ApiService.get<{
        diaristas: UserInterfaceAPI[];
        quantidade_diaristas: number;
      }>(`/api/diaristas-cidade?cep=${zipCode.replace(/\D/g, "")}`).then(
        ({ data }) => {
          const { diaristas, quantidade_diaristas } = data;
          const response: {
            professionals: UserInterface[];
            remainingProfessionals: number;
          } = {
            professionals: diaristas.map(
              ({ cidade, nome_completo, foto_usuario, reputacao }) => ({
                city: cidade,
                photo: foto_usuario,
                fullName: nome_completo,
                rating: reputacao,
              })
            ),
            remainingProfessionals: quantidade_diaristas,
          };
          setProfessionals(response.professionals);
          setRemainingProfessionals(response.remainingProfessionals);
        }
      );
    } catch (error) {
      setError("CEP não encontrado");
    }

    setSearching(false);
    setSearchDone(true);
  }

  return {
    zipCode,
    setZipCode,
    zipCodeValid,
    zipCodeFeedback,
    error,
    searching,
    searchDone,
    professionals,
    remainingProfessionals,
    searchProfessionalsByZipCode,
  };
}
