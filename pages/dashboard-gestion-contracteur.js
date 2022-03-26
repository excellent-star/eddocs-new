import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const defaultJobs = [
  { value: "pd", label: "Plus récent" },
  { value: "gd", label: "Plus ancien" },
  { value: "fd", label: "Ordre croissant" },
  { value: "bd", label: "Ordres decroissant" },
];


const LISTE_CONTRACTEUR=gql`
    query { 
      contracteurs
      {
        id
        sigle
        nif
        forme_juridique
        telephone
        raison_sociale
      }
    }
`;

export default function DashboardJobs () {

    const {data,error,loading}=useQuery(LISTE_CONTRACTEUR);
    
    if(loading){
        return <p>Loading</p>
    }
    if(error){
        return <p>Erreur</p>
    }
    
  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div className="dashboard-main-container mt-25 mt-lg-31">
          <div className="container">
            <div className="mb-18">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Gestion des contracteurs</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filtrer par:</p>
                    <div className="h-px-48">
                      <Select
                        options={defaultJobs}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
                <div className="table-responsive ">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0 border-0 font-size-4 font-weight-normal"
                        >
                          Raison Sociale
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Sigle
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          NIF
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Forme juridique
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Telephone
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data!=="undefined" ?(
                          data?.contracteurs.map((contracteur,index)=>(
                            
                            <tr className="border border-color-2" key={"LigneTableContracteur"+index}>
                             
                                <th
                                  scope="row"
                                  className="pl-6 border-0 py-7 min-width-px-235"
                                >
                                  <div className="">
                                    <Link href={"/dashboard-detail-contracteur/"+contracteur.id}>
                                      <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                        {
                                          contracteur.raison_sociale
                                        }
                                      </a>
                                    </Link>
                                  </div>
                                </th>
                                <td className="table-y-middle py-7 min-width-px-135">
                                  <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                   {
                                     contracteur.sigle
                                   }
                                  </h3>
                                </td>
                                <td className="table-y-middle py-7 min-width-px-125">
                                  <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
                                    {
                                      contracteur.nif
                                    }
                                  </h3>
                                </td>
                                <td className="table-y-middle py-7 min-width-px-155">
                                  <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                    {
                                      contracteur.forme_juridique
                                    }
                                  </h3>
                                </td>
                                <td className="table-y-middle py-7 min-width-px-205">
                                  <h3 className="font-size-4 font-weight-normaltext-black-2 mb-0">
                                    {
                                      contracteur.telephone
                                    }
                                  </h3>
                                </td>
                                <td className="table-y-middle py-7 min-width-px-80">
                                  <a
                                     href={"/dashboard-detail-contracteur/"+contracteur.id}
                                    className="font-size-3 font-weight-bold text-green text-uppercase"
                                  >
                                    Détail
                                  </a>
                                </td>
                                <td className="table-y-middle py-7 min-width-px-100">
                                  <a
                                    href="/#"
                                    className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                                  >
                                    Delete
                                  </a>
                                </td>
                              </tr>
                          ))
                        ):(<>eheheheh</>)
                      }
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};