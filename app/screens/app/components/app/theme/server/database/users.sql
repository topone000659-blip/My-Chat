CREATE TABLE users (

    id UUID PRIMARY KEY,

    username VARCHAR(50) NOT NULL,

    phone VARCHAR(20) UNIQUE NOT NULL,

    password TEXT NOT NULL,

    avatar TEXT,

    status TEXT DEFAULT 'offline',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

