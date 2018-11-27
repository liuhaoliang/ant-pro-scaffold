import React, { Fragment } from "react";
import { Layout, Icon } from "antd";
import GlobalFooter from "@/components/GlobalFooter";
import { companyName } from "../utils/Constant";

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> {companyName}
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
