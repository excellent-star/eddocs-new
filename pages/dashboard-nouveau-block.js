import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";

const defaultJobs = [
  { value: "1", label: "Publier" },
  { value: "0", label: "Brouillon" },
];

const ListeEstate = [
    { value: "0", label: "Aucun" },
  ];

export default function NouveauEstate () {
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
                  <h3 className="font-size-6 mb-0">Nouveau block</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Etat du block:</p>
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
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                          <div className="form-group">
                              <label>Libelle</label>  
                              <input type="text" className="form-control" placeholder="Saisir ici" />
                          </div>  
                      </div>  
                      <div className="col-lg-12">
                          <label>Decrire l'emplacement du block</label>  
                          <textarea className="form-control" rows="8" placeholder="Saisir ici"></textarea>
                      </div>  
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                          <div className="form-group">
                              <label>Estate d'appartenance</label>  
                              <Select
                                    options={ListeEstate}
                                    className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                                    border={false}
                                />
                          </div>  
                      </div>  
                      
                    </div>
                    <div className="row mt-5">
                      <div className="col-lg-6">
                          <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-xl w-100 text-uppercase">
                            <span className="mr-5 d-inline-block">+</span>Ajoutez
                          </button>
                          </div>  
                      </div>  
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};