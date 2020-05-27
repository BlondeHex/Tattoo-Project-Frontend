import styled from "styled-components";

import {
  BACKGROUND_COLOR_BASE,
  BACKGROUND_COLOR_NAV,
  MAIN_YELLOW_COLOR,
} from "../../constants/colors";

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  background: ${BACKGROUND_COLOR_BASE};
  height: 100vh;
`;
const MainWrapper = styled.div`
  padding: 15px 20px;
`;

export { PageWrapper, MainWrapper };
