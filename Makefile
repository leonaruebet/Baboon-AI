# Makefile for Baboon Secretary Landing Page

.PHONY: dev build start clean install help

# Default target
help:
	@echo "Available commands:"
	@echo "  make dev     - Start development server"
	@echo "  make build   - Build for production"
	@echo "  make start   - Start production server"
	@echo "  make clean   - Remove build artifacts and node_modules"
	@echo "  make install - Install dependencies"

# Development
dev:
	npm run dev

# Production
build:
	npm run build

start:
	npm run start

# Cleanup
clean:
	rm -rf .next
	rm -rf out
	rm -rf node_modules
	rm -rf package-lock.json

# Setup
install:
	npm install
