import React from "react";
import { Typography, Box } from "@material-ui/core";

import {
  FooterStyled,
  FooterContainerStyled,
  FooterTitleStyled,
  AppListStyled,
} from "./Footer.style";

const Footer: React.FC = () => (
  <FooterStyled>
    <FooterContainerStyled>
      <Box sx={{ maxWidth: 400 }}>
        <FooterTitleStyled>Quem Somos</FooterTitleStyled>
        <Typography variant="body2" sx={{ mt: 2 }}>
          E-Diaristas te ajuda a encontrar um(a) profissional perfeito(a) para
          realizar a limpeza de sua casa. Garantimos o(a) melhor profissional
          com a total segurança e praticidade! São milhares de clientes
          satisfeitos por todo o país.
        </Typography>
      </Box>
      <div>
        <FooterTitleStyled>Baixe nossos aplicativos</FooterTitleStyled>
        <AppListStyled>
          <li>
            <a href="#" target="blank" rel="noopener noreferrer">
              <img src="/img/logos/app-store.png" alt="App Store" />
            </a>
          </li>
          <li>
            <a href="#" target="blank" rel="noopener noreferrer">
              <img src="/img/logos/google-play.png" alt="Google Play" />
            </a>
          </li>
        </AppListStyled>
      </div>
    </FooterContainerStyled>
  </FooterStyled>
);

export default Footer;
