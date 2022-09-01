import { DiscussionEmbed } from "disqus-react";
import React from "react";
import styles from "../styles/CommentSection.module.scss";

const CommentSection = ({ shortname, url, id, title }) => {
  return (
    <div className={styles.container}>
      <DiscussionEmbed
        shortname={shortname}
        config={{
          url: url,
          identifier: id,
          title: title,
        }}
      />
    </div>
  );
};

export default CommentSection;
