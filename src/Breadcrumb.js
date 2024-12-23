import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Import icon Home từ React Icons
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  
  // Kiểm tra nếu đang ở trang chủ
  if (location.pathname === "/") {
    return null; // Không render breadcrumb nếu là trang chủ
  }

  const paths = location.pathname
    .replace(/\/$/, "")  // Loại bỏ dấu / cuối nếu có
    .split("/")
    .filter((path) => path);

  return (
    <nav className="breadcrumb">
      <ul>
        {/* Link về trang Home với icon */}
        <li>
          <Link to="/">
            <FaHome style={{ marginRight: "5px" }} /> Home
          </Link>
        </li>
        {/* Hiển thị các phần của đường dẫn */}
        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          return (
            <li key={index}>
              {isLast ? (
                <span>{decodeURIComponent(path)}</span>
              ) : (
                <Link to={routeTo}>{decodeURIComponent(path)}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
