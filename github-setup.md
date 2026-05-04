# GitHub Repository Setup Instructions

## Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click "+" button in top right corner
3. Select "New repository"
4. Fill in details:
   - Repository name: `treasurefun-clone`
   - Description: `Thunder Storm NFT Marketplace`
   - Visibility: **Public** (required for GitHub Pages)
   - Don't check any other boxes
5. Click "Create repository"

## Step 2: Push Code to GitHub

After creating repository, GitHub will show you commands. Use these:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/treasurefun-clone.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Build and deployment", select:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
5. Click "Save"

## Step 4: Wait for Deployment

GitHub Actions will automatically:
- Build your site
- Deploy to GitHub Pages
- Your site will be live at: `https://YOUR_USERNAME.github.io/treasurefun-clone`

## Your Site Features

- **Admin Login:** admin@thunderstorm.com / Larkanasindhpakistan786@
- **User Registration:** Email/Phone signup
- **NFT Marketplace:** 25 NFTs ($50-$500,000)
- **TRC-20 Wallet:** Your address integrated
- **Professional Design:** Modern UI/UX

## Important Notes

- Repository must be **Public** for free GitHub Pages
- Deployment takes 2-5 minutes after push
- All features are production-ready
- No additional configuration needed
