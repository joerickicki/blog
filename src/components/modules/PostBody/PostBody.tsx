import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Node } from '@contentful/rich-text-types';
import { ReactElement } from 'react';
import { PostParsed } from 'services/contentful/post/postParser';

import markdownStyles from './markdown-styles.module.css';

type PostBodyProps = {
  post: PostParsed
};

const renderOption = {
  renderNode: {  
    [BLOCKS.EMBEDDED_ASSET](node : Node) {
      return (
        <img
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.file.url}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
        />
      );
    },
    [BLOCKS.PARAGRAPH](node : Node, children : any) {
      return ( <p>{children}</p>);
    },
    [BLOCKS.UL_LIST](node : Node, children : any) {
      return (
        <ul className="list-disc list-inside">{children}</ul>
      );
    },
    [BLOCKS.OL_LIST](node : Node, children : any) {
      return (
        <ol className="list-decimal list-inside">{children}</ol>
      );
    },
    [BLOCKS.LIST_ITEM](node : Node, children : any) {
      return ( <li>{children}</li>);
    },
  }
};

export default function PostBody({ post }: PostBodyProps): ReactElement {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles.markdown}>
        {documentToReactComponents(post.content, renderOption)}
      </div>
    </div>
  );
}
