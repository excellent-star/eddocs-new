import React, { useContext } from "react";
import Link from "next/link";
import { Collapse } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import imgL from "../../assets/image/logo-main-black.png";

const Sidebar = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <Collapse in={gContext.showSidebarDashboard}>
        <div className="dashboard-sidebar-wrapper pt-11" id="sidebar" style={{overflowY: "scroll"}}>
          <div className="brand-logo px-11">
            <Link href="/">
              <a>
                <img src={imgL.src} alt="" />
              </a>
            </Link>
          </div>
          <div className="my-5 mt-15 px-11">
            <Link href="/dashboard-gestion-recolte">
              <a className="btn btn-primary btn-xl w-100 text-uppercase">
                <span className="mr-5 d-inline-block">+</span>Gestion des recoltes
              </a>
            </Link>
          </div>
          
          <ul className="list-unstyled dashboard-layout-sidebar">
            <li className="">
              <Link href="/dashboard-main">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="icon icon-layout-11 mr-7"></i>Tableau de bord
                </a>
              </Link>
            </li>
            <hr className="mx-10"/>
            <p className="mx-10">Contracteurs</p> 
            <li className="">
              <Link href="/dashboard-nouveau-contracteur">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-briefcase mr-7"></i>Nouveau 
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-gestion-contracteur">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-briefcase mr-7"></i>Gestion
                </a>
              </Link>
            </li>
            <hr className="mx-10"/>
            <p className="mx-10">Estates</p>
            <li className="">
              <Link href="/dashboard-nouveau-estate">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-user mr-7"></i>Nouveau{" "}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-gestion-estate">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-user mr-7"></i>Gestion{" "}
                </a>
              </Link>
            </li>
            <hr className="mx-10"/>
            <p className="mx-10">Blocks</p>
            <li className="">
              <Link href="/dashboard-nouveau-block">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-user mr-7"></i>Nouveau{" "}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-gestion-block">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-user mr-7"></i>Gestion{" "}
                  
                </a>
              </Link>
            </li>
            <hr className="mx-10"/>
            <p className="mx-10">Recolteurs</p>
            <li className="">
              <Link href="/dashboard-nouveau-recolteur">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-user mr-7"></i>Nouveau{" "}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-gestion-recolteur">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-user mr-7"></i>Gestion{" "}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Collapse>
      <a
        href="/#"
        className="sidebar-mobile-button"
        onClick={(e) => {
          e.preventDefault();
          gContext.toggleSidebarDashboard();
        }}
      >
        <i className="icon icon-sidebar-2"></i>
      </a>
    </>
  );
};

export default Sidebar;
