import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SearchBox from "../../components/SearchBox";
import Seo from "../../components/Seo";

interface HeaderProps {
  title: string;
  description?: string;
  keywords: string[];
  status: string;
}

function Header({ title, description, keywords, status }: HeaderProps) {
  return (
    <>
      <Seo title={title} description={description} />
      <SearchBox />
      <Breadcrumb labels={keywords} status={status} />
    </>
  );
}

export default Header;
