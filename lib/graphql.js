
import gql from "graphql-tag";

export const LISTE_DOCUMENTS=gql`
    query { 
        documents
    { 
        data{ 
            id
        attributes{ 
            code
            libelle
        }
        }
    }
    }
`;