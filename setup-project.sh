#!/bin/bash
# React Boilerplate Setup Script
# This script helps set up a new project based on the React Boilerplate

# Text colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}===================================${NC}"
echo -e "${BLUE}  React Boilerplate Setup Script   ${NC}"
echo -e "${BLUE}===================================${NC}"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}Error: git is not installed. Please install git and try again.${NC}"
    exit 1
fi

# Check if yarn is installed
if ! command -v yarn &> /dev/null; then
    echo -e "${RED}Error: yarn is not installed. Please install yarn and try again.${NC}"
    exit 1
fi

# Get project name
read -p "Enter your new project name: " project_name

# Validate project name
if [[ -z "$project_name" ]]; then
    echo -e "${RED}Error: Project name cannot be empty.${NC}"
    exit 1
fi

# Create directory with project name
if [[ -d "$project_name" ]]; then
    echo -e "${RED}Error: Directory '$project_name' already exists.${NC}"
    exit 1
fi

echo -e "${YELLOW}Cloning boilerplate repository...${NC}"
git clone https://github.com/Prakash-Growmax/React_Biolerplate.git "$project_name"

if [[ ! -d "$project_name" ]]; then
    echo -e "${RED}Error: Failed to clone repository.${NC}"
    exit 1
fi

cd "$project_name"

# Remove existing git history
echo -e "${YELLOW}Setting up new git repository...${NC}"
rm -rf .git
git init

# Ask for new repository URL
read -p "Enter your new git repository URL (leave blank to skip): " repo_url

if [[ ! -z "$repo_url" ]]; then
    git remote add origin "$repo_url"
fi

# Add upstream for updates
echo -e "${YELLOW}Adding upstream remote for future updates...${NC}"
git remote add upstream https://github.com/Prakash-Growmax/React_Biolerplate.git

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
yarn install

# Initial commit
echo -e "${YELLOW}Creating initial commit...${NC}"
git add .
git commit -m "Initial commit from boilerplate"

# Push to remote if URL was provided
if [[ ! -z "$repo_url" ]]; then
    echo -e "${YELLOW}Pushing to remote repository...${NC}"
    git push -u origin main
fi

echo -e "${GREEN}Setup complete!${NC}"
echo -e "${GREEN}Your new project '$project_name' has been created successfully.${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo -e "1. cd $project_name"
echo -e "2. yarn dev"
echo -e "3. Open http://localhost:5173 in your browser"
echo ""
echo -e "${YELLOW}To get updates from the boilerplate in the future:${NC}"
echo -e "git fetch upstream"
echo -e "git merge upstream/main"
echo ""
echo -e "${BLUE}Happy coding!${NC}"