import React, { Component } from "react";
import PublisherInfo from "../PublisherInfo/PublisherInfo";

export default function BookDetailsPublishers(props) {
  const items = [];

  if (props.bookPublishers != undefined) {
    for (const [id, name] of props.bookPublishers.entries()) {
      items.push(<span key={id} />);
    }
  }

  return (
    <div>
      <span component="span" className="font-weight-bold mr-2">
        Publisher(s):
      </span>

      {props.bookPublishers
        ? props.bookPublishers.map(publisher => {
            return (
              <span>
                <PublisherInfo publisher={publisher} id={publisher.id} />
              </span>
            );
          })
        : undefined}
    </div>
  );
}
