import React from "react";
import {
  EuiPage,
  EuiPageContent,
  EuiTitle,
  EuiButton,
  EuiEmptyPrompt,
  EuiImage,
  EuiPageBody,
} from "@elastic/eui";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import groupChat from "../assets/group_chat.svg";

const Home = () => {
  return (
    <EuiPage paddingSize="none">
      <EuiPageBody paddingSize="l">
        <EuiPageContent
          verticalPosition="center"
          horizontalPosition="center"
          paddingSize="none"
        >
          <EuiEmptyPrompt
            layout="horizontal"
            icon={<EuiImage size="fullWidth" src={groupChat} alt="" />}
            title={<h2>Handshake</h2>}
            body={
              <p>
                The place where individuals connect, converse, and create
                stories together.
              </p>
            }
            paddingSize="l"
            actions={<CallToAction />}
            footer={
              <>
                <EuiTitle size="xxs">
                  <span>Curious? </span>
                </EuiTitle>
                <Link to="#" className="link">
                  Read documentation
                </Link>
              </>
            }
          />
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export default Home;
