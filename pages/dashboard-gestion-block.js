import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const defaultJobs = [
  { value: "pd", label: "Plus récent" },
  { value: "gd", label: "Plus ancien" },
  { value: "fd", label: "Ordre croissant" },
  { value: "bd", label: "Ordres decroissant" },
];


const LISTE_BLOCS=gql`
    query { 
      blocs{ 
        id
        libelle
        emplacement
        image
        {
          url
        }
        estate
        {
          id
          libelle
        }
      }
    }
`;

export default function DashboardBlocks () {

  
  const {data,error,loading}=useQuery(LISTE_BLOCS);

  if(loading){
      return <p>Loading</p>
  }
  if(error){
      return <p>Erreur</p>
  }

  const blocs=data?.blocs

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
                  <h3 className="font-size-6 mb-0">Gestion des blocks</h3>
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
                          Libelle
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Emplacement
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Estate
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
                          blocs.map((bloc,index)=>(
                            
                            <tr className="border border-color-2" key={"LigneTableEstate"+index}>
                             
                                <th
                                  scope="row"
                                  className="pl-6 border-0 py-7 min-width-px-235"
                                >
                                  <div className="">
                                    <Link href={"/dashboard-detail-block/"+bloc.id}>
                                      <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                        {
                                          bloc.libelle
                                        }
                                      </a>
                                    </Link>
                                  </div>
                                </th>
                                <td className="table-y-middle py-7 min-width-px-135">
                                  <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                   {
                                     bloc.emplacement
                                   }
                                  </h3>
                                </td>
                                <td className="table-y-middle py-7 min-width-px-135">
                                  <Link href={"/dashboard-detail-estate/"+bloc.estate.id}>
                                      <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                        {
                                          bloc.estate.libelle
                                        }
                                      </a>
                                    </Link>
                                </td>
                                <td className="table-y-middle py-7 min-width-px-80">
                                  <a
                                     href={"/dashboard-detail-block/"+bloc.id}
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