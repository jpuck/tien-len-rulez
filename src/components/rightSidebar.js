import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// import Link from './link';
import config from '../../config';
import { Sidebar, ListItem } from './styles/Sidebar';

function makeTableOfContentsListItem(item, level)
{
  const itemId = item.title
    ? item.title.replace(/\s+/g, '').toLowerCase()
    : '#';

  return (
    <ListItem key={itemId} to={`#${itemId}`} level={level}>
      {item.title}
    </ListItem>
  );
}

function buildTableOfContentsRecursively(item, index, level)
{
  if (level instanceof Array) {
    level = -1;
  }

  const listItems = [makeTableOfContentsListItem(item, level)]

  if (!item.items) {
    return listItems;
  }

  level++;
  return listItems.concat(item.items.map((sub, index) => {
    return buildTableOfContentsRecursively(sub, index, level);
  }))
}

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let finalNavItems;

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        allMdx.edges.map(item => {
          let innerItems;

          if (item !== undefined) {
            if (
              item.node.fields.slug === location.pathname ||
              config.gatsby.pathPrefix + item.node.fields.slug === location.pathname
            ) {
              if (item.node.tableOfContents.items) {
                innerItems = item.node.tableOfContents.items.map(buildTableOfContentsRecursively);
              }
            }
          }
          if (innerItems) {
            finalNavItems = innerItems;
          }
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <ul className={'rightSideBarUL'}>
              <li className={'rightSideTitle'}>CONTENTS</li>
              {finalNavItems}
            </ul>
          </Sidebar>
        );
      } else {
        return (
          <Sidebar>
            <ul></ul>
          </Sidebar>
        );
      }
    }}
  />
);

export default SidebarLayout;
