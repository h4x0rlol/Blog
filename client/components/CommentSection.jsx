import { DiscussionEmbed } from "disqus-react";
import styles from "/styles/CommentSection.module.scss";

export const CommentSection = ({ shortname, url, id, title }) => {
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
