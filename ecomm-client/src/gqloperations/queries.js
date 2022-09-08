import { gql } from '@apollo/client'

export const getAllProducts = gql`

  query getAllProducts($pagination: PaginationArg) {
  products(pagination: $pagination) {
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
    meta {
      pagination {
        pageCount
      }
    }
  }
}

`
/**
{
  "pagination": {
    "page": 1,
    "pageSize": 8
  }
}
 */
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

export const SEARCH = gql`

query Products($filters: ProductFiltersInput) {
  products(filters: $filters) {
    data {
      id
      attributes {
        name
      }
    }
  }
}
`
/**
 {
  "filters": {
    "name": {
      "startsWith": "M"
    }
  }
}
 */