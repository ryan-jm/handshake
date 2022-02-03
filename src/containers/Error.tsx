import React from "react";

import {
  EuiEmptyPrompt,
  EuiButton,
  EuiButtonEmpty,
  EuiImage,
} from "@elastic/eui";
import { Link, useNavigate } from "react-router-dom";
import pageNotFound from "../assets/page_not_found.svg";

const Error = () => {
  const navigation = useNavigate();

  return (
    <EuiEmptyPrompt
      icon={<EuiImage size="fullWidth" src={pageNotFound} alt="" />}
      title={<h2>Page not found</h2>}
      layout="vertical"
      body={
        <p>
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
      }
      actions={[
        <Link to="/">
          <EuiButton color="primary" fill>
            Go home
          </EuiButton>
        </Link>,
        <EuiButtonEmpty
          iconType="arrowLeft"
          flush="left"
          onClick={() => navigation(-1)}
        >
          Go back
        </EuiButtonEmpty>,
      ]}
    />
  );
};

export default Error;
