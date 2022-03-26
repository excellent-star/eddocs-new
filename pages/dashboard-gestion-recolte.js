import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const defaultJobs = [
  { value: "pd", label: "Plus récent" },
  { value: "gd", label: "Plus ancien" },
  { value: "fd", label: "Ordre croissant" },
  { value: "bd", label: "Ordres decroissant" },
];

const LISTE_RECOLTES=gql`
    query { 
        recoltes
        { 
            id
            quantite
            contracteur
            { 
                id 
            raison_sociale
            }
            bloc
            {
            id 
            libelle
            }
            recolteur
            { 
                id 
            nom_complet
            }
            
        }
    }
`;


export default function GestionRecoltes () {

  const {data,error,loading}=useQuery(LISTE_RECOLTES);

  if(loading){
      return <p>Loading</p>
  }
  if(error){
      return <p>Erreur</p>
  }

  const recoltes=data?.recoltes
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
                  <h3 className="font-size-6 mb-0">Gestion des estates</h3>
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
                          Quantité
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Contracteur
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Bloc
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
                          recoltes.map((recolte,index)=>(
                            
                            <tr className="border border-color-2" key={"LigneTableRecoltes"+index}>
                             
                                <th
                                  scope="row"
                                  className="pl-6 border-0 py-7 min-width-px-235"
                                >
                                  <div className="">
                                    <Link href={"/dashboard-detail-estate/"+recolte.id}>
                                      <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                        {
                                          recolte.quantite
                                        }
                                      </a>
                                    </Link>
                                  </div>
                                </th>
                                <td className="table-y-middle py-7 min-width-px-135">
                                    <Link href={"/dashboard-detail-contracteur/"+recolte.contracteur.id}>
                                      <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                        {
                                          recolte.contracteur.raison_sociale
                                        }
                                      </a>
                                    </Link>
                                </td>
                                <td className="table-y-middle py-7 min-width-px-135">
                                    <Link href={"/dashboard-detail-bloc/"+recolte.bloc.id}>
                                      <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                        {
                                          recolte.bloc.libelle
                                        }
                                      </a>
                                    </Link>
                                </td>
                               
                                <td className="table-y-middle py-7 min-width-px-80">
                                  <a
                                     href={"/dashboard-detail-bloc/"+recolte.bloc.id}
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