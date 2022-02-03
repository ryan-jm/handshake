import React from "react";
import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItem,
  EuiHeaderLinks,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonEmpty,
} from "@elastic/eui";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <EuiHeader theme="dark">
      <EuiHeaderSectionItem border="right">
        <Link to="/">
          <EuiHeaderLogo iconType="heartbeatApp" color="primary">
            Handshake
          </EuiHeaderLogo>
        </Link>
      </EuiHeaderSectionItem>
      <EuiHeaderLinks aria-label="header-links">
        <Link to="/login">
          <EuiButtonEmpty
            iconType="user"
            aria-label="sign up or login"
            size="s"
            color="ghost"
          >
            Get started
          </EuiButtonEmpty>
        </Link>
      </EuiHeaderLinks>
    </EuiHeader>
  );
};

export default Header;
