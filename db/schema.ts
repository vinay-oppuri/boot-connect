import { integer, pgTable, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const reviewsTable = pgTable("reviews", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  rating: integer().notNull(), // typically 1-5
  comment: text("comment").notNull(), // using text() instead of varchar since reviews can be very long
  isPublished: boolean("is_published").default(false).notNull(), // Allow moderation of reviews before showing publicly
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const editorsTable = pgTable("editors", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  gdriveLink: text("gdrive_link").notNull(), // URLs can exceed 255 chars, text is safer
  portfolioUrl: text("portfolio_url"), // Optional personal portfolio
  category: varchar({ length: 100 }).notNull(),
  skills: text("skills").notNull(), // comma-separated values or JSON string
  rating: integer().default(0).notNull(), // Default to 0 initially
  projectsDone: integer("projects_done").default(0).notNull(), // Start at 0 implicitly
  isVerified: boolean("is_verified").default(false).notNull(), // Production systems usually require manual approval layers
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(), // Useful to know when editor last updated their profile
});