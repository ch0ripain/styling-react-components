import { styled } from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;

  & h3 {
    padding: 1%;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1rem;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(172, 26, 208, 1) 14%,
      rgba(174, 45, 214, 1) 49%,
      rgba(240, 74, 217, 1) 68%,
      rgba(128, 0, 255, 0.9444152661064426) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
  }

  & hr {
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 10vh;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <hr></hr>
      <h3>
        This website is a practice from{" "}
        <a
          target="_blank"
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=ST6MT103124"
        >
          Academind's React course
        </a>
      </h3>
    </StyledFooter>
  );
}
