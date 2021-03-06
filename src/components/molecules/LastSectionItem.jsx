import React from "react";
import Text from "../atoms/Text.jsx";
import { Link } from "react-router-dom";
import "../../styles/lastSection/lastSectionItem.css";

class MiddleSection extends React.Component {
  render() {
    const {
      ImageSource,
      LinkSource,
      ImageAlt,
      TextValueAuthor,
      TextValueTitle,
      TextValueDescription,
    } = this.props.item;
    return (
      <div className="last_section_article">
        <Link to={LinkSource}>
          <img
            src={ImageSource}
            alt={ImageAlt}
            className="last_section_image"
          />
        </Link>
        <div className="last_section_article_info">
          <Text TextType="author" TextValue={TextValueAuthor} />
          <Link to={LinkSource}>
            <Text TextType="subtitle" TextValue={TextValueTitle} />
          </Link>
          <Text TextType="description" TextValue={TextValueDescription} />
        </div>
      </div>
    );
  }
}
export default MiddleSection;
