import styled from "styled-components";

import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../features/Authentication/useUser";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //2. If there is no Authenticated user, redirect to the /welcome
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/welcome");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. While Loading, show a spinner
  if (isLoading)
    return (
      <>
        {" "}
        <FullPage>
          <Spinner />
        </FullPage>
      </>
    );

  //4. If there is a user , render the app
  if (isAuthenticated) return <div>{children}</div>;
}

export default ProtectedRoute;
