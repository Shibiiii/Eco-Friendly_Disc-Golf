const typeDefs = `
    type Product {
        id: ID!
        name: String!
        description: String
        price: Float!
        stock: Int!
        category: ProductCategory!
    }
    
    enum ProductCategory {
        DISCS
        BAGS
        ACCESSORIES
        APPAREL
    }
    
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        orders: [Order!]!
    }
    
    type Order {
        id: ID!
        products: [OrderItem!]!
        date: String!
        total: Float!
        status: OrderStatus!
    }
    
    type OrderItem {
        product: Product!
        quantity: Int!
    }
    
    enum OrderStatus {
        PENDING
        COMPLETED
        CANCELLED
    }
    
    type Query {
        users: [User!]!
        user(id: ID!): User
        products: [Product!]!
        product(id: ID): Product
        orders: [Order!]!
        order(id: ID!): Order
    }
    
    type Mutation {
        createUser(name: String!, email: String!, password: String!): User
        createProduct(name: String!, description: String, price: Float, stock: Int!, category: ProductCategory!): Product
        createOrder(products: [ID!]!, quantities:[Int!]!): Order
        updateOrderStatus(id: ID!, status: OrderStatus!): Order
        login(email: String!, password: String!): Auth
    }

    type Auth {
        token: ID
        user: User
    }
    `;

module.exports = typeDefs;
