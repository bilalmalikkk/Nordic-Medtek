-- Migration to add datasheet_url column to products table
-- Run this script to update existing database

ALTER TABLE products ADD COLUMN datasheet_url TEXT;
