import React from "react";
import "./Breadcrumb.css";

interface BreadcrumbProps {
  labels: string[];
  status: string;
}

function Breadcrumb({ labels, status }: BreadcrumbProps) {
  return (
    <div className="breadcrumb">
      {status === "success" && (
        <p>
          {labels.length
            ? labels.map((label, index) => (
                <small key={index}>{`: ${label}`}</small>
              ))
            : "..."}
        </p>
      )}
      {status === "loading" && <small>Cargando ...</small>}
      {status === "error" && <small>Error!</small>}
    </div>
  );
}

export default Breadcrumb;
