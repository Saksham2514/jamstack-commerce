import { gql } from '@apollo/client'

export const getAllProducts = gql`
query getAllProducts {
  products {
    data {
      id
      attributes {
        name
        description
        price
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}

`
export const getProductById = gql`

query getProductById($productId: ID) {
    product(id: $productId) {
      data {
        attributes {
          name
          description
          price
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        id
      }
    }
  }  

`

export const getCategories = gql `
query Attributes {
  categories {
    data {
      id,
      attributes {
        Name
      }
    }
  }
}`

export const GET_PRODUCT_BY_CATEGORIES = gql`
query Category($categoryId: ID) {
  category(id: $categoryId) {
    data {
      attributes {
        Name
        products {
          data {
            attributes {
              name
              price
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              description
            }
            id
          }
        }
      }
    }
  }
}`

/**
{
  "categoryId": "1"
}
 */