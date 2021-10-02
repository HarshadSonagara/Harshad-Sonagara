import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";
import { Box } from "@material-ui/core";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Frontend Developer"}
            paragraph={
              <Box>
                <span> ◾ HTML </span>
                <span> ◾ CSS </span>
                <span> ◾ JAVASCRIPT </span>
                {/* <span> ◾ REACT </span> */}
              </Box>
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Backend Developer"}
              paragraph={
                <Box>
                  <span> ◾ Node JS </span>
                  <span> ◾ My SQL </span>
                  <span> ◾ Mongo DB </span>
                  {/* <span> ◾ REACT </span> */}
                </Box>
              }
            />
          </div>
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
