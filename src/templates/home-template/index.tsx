import React from "react";

import {graphql, PageProps} from "gatsby";

type HomeTemplateType = {};

const HomeTemplate: React.FC<PageProps<HomeTemplateType>> =(props) => {
  return <div>HomeTemplate</div>
}

export default HomeTemplate;

export const query = graphql`
  query PageQuery($id: String!) {
    wpPage(id: {eq: $id}){
 }
}
`