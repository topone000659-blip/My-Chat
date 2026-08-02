CREATE TABLE messages (

    id UUID PRIMARY KEY,

    sender_id UUID NOT NULL,

    receiver_id UUID NOT NULL,

    message TEXT,

    message_type VARCHAR(20) DEFAULT 'text',

    is_read BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

