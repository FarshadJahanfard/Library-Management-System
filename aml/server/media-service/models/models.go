package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type BorrowingRecord struct {
	ID         primitive.ObjectID `bson:"_id,omitempty"`
	UserID     primitive.ObjectID `bson:"userID"`
	MediaID    primitive.ObjectID `bson:"mediaID"`
	BorrowedAt int64              `bson:"borrowedAt"`
	ReturnAt   int64              `bson:"returnAt"`
}
