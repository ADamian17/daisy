import React from "react";

import {graphql, PageProps} from "gatsby";

type AboutTemplateType = {};

const AboutTemplate: React.FC<PageProps<AboutTemplateType>> =(props) => {
  return <div>AboutTemplate</div>
}

export default AboutTemplate;

export const query = graphql`
  query PageQuery($id: String!) {
    wpPage(id: {eq: $id}){}
}
`