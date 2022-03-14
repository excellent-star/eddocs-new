import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";

const defaultJobs = [
  { value: "1", label: "Publier" },
  { value: "0", label: "Brouillon" },
];

export default function NouveauContracteur () {
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
                  <h3 className="font-size-6 mb-0">Nouveau recolteur</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Etat du recolteur:</p>
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
                      <div className="col-lg-6">
                          <div className="form-group">
                              <label>Nom complet (Nom é Prénom)</label>  
                              <input type="text" className="form-control" placeholder="Saisir ici" />
                          </div>  
                      </div>  
                      <div className="col-lg-6">
                          <label>N° Matricule</label>  
                          <input type="text" className="form-control" placeholder="Saisir ici" />  
                      </div>  
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                          <div className="form-group">
                              <label>Libelle maison</label>  
                              <input type="text" className="form-control" placeholder="Saisir ici" />
                          </div>  
                      </div>  
                      <div className="col-lg-6">
                          <div className="form-group">
                              <label>Photo d'identité</label>  
                              <input type="file" className="form-control" placeholder="Saisir ici" />
                          </div>  
                      </div>  
                      <div className="col-lg-6">
                          <div className="form-group">
                              <label>Contrat</label>  
                              <input type="file" className="form-control" placeholder="Saisir ici" />
                          </div>  
                      </div>  
                      <div className="col-lg-6">
                          <div className="form-group">
                              <label>Fax</label>  
                              <input type="text" className="form-control" placeholder="Saisir ici" />
                          </div>  
                      </div> 
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                          <div className="form-group">
                              <label>Téléphone</label>  
                              <input type="text" className="form-control" placeholder="Saisir ici" />
                          </div>  
                      </div>  
                      <div className="col-lg-6">
                          <div className="form-group">
                              <label>Email</label>  
                              <input type="email" className="form-control" placeholder="Saisir ici" />
                          </div>  
                      </div>  
                    </div>
                    <div className="row">
                      
                        
                      <div className="col-lg-6 pt-5">
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